import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { booking } from "../firebase";
import emailjs from "@emailjs/browser";
import React from "react";

function PayementPopup({ status, onClose, bookingData }) {
  if (!status) return null;
  const amount = bookingData.total.toFixed(2) ?? "0.00";
  const currency = bookingData?.currency ?? "USD";

  const updateDatabase = async (e) => {
    const emailParams = {
      email: bookingData.bookingEmail,
      full_name: bookingData.bookingName,
      room_type: bookingData.room_name,
      check_in: new Date(bookingData.bookingDateIn).toLocaleDateString(),
      check_out: new Date(bookingData.bookingDateOut).toLocaleDateString(),
      guests: bookingData.bookingGuests,
      cost: bookingData.Price,
      total: bookingData.totalPrice * bookingData.nights,
      phone: parseInt(bookingData.bookingNumber),
      guest_id: "",
    };

    try {
      await addDoc(collection(booking, "Booking"), {
        "Full Name": bookingData.bookingName,
        Email: bookingData.bookingEmail,
        Phone: bookingData.bookingNumber,
        Guests: bookingData.bookingGuests,
        Arrived: false,
        Cost: bookingData.totalPrice * bookingData.nights,
        "Check In": Timestamp.fromDate(new Date(bookingData.bookingDateIn)),
        "Check Out": Timestamp.fromDate(new Date(bookingData.bookingDateOut)),
        "Room Number": 0,
        "Room Type": bookingData.room_name.split(" ")[0],
        Source: "Online",
        Archive: false,
      });
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      onClose();
    } catch (err) {
      console.error(err);
      setPopupStatus("error");
    }
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-10 flex flex-col items-center gap-6 max-w-sm w-full mx-4 shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-800">Complete Payment</h2>
        <p className="text-gray-500 text-lg">
          Total:{" "}
          <span className="font-semibold text-[#6bba33] text-lg">
            ${amount} {currency}
          </span>
        </p>

        <div className="w-full">
          <PayPalScriptProvider
            options={{
              "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
              currency,
              intent: "capture",
              components: "buttons",
            }}
          >
            <PayPalButtons
              style={{
                layout: "vertical",
                color: "gold",
                shape: "rect",
                label: "pay",
                height: 45,
              }}
              fundingSource="paypal"
              createOrder={(data, actions) =>
                actions.order.create({
                  purchase_units: [
                    {
                      amount: { value: amount, currency_code: currency },
                    },
                  ],
                })
              }
              onApprove={async (data, actions) => {
                await actions.order.capture();
                await updateDatabase();
              }}
              onCancel={onClose}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
}

export default PayementPopup;
