import { useState, useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { booking } from "../firebase";
import emailjs from "@emailjs/browser";

function PayementPopup({ status, onClose, bookingData }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!done) return;
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [done]);

  if (!status) return null;

  const amount = bookingData?.total?.toFixed(2) ?? "0.00";
  const currency = bookingData?.currency ?? "USD";

  const updateDatabase = async () => {
    const emailParams = {
      email: bookingData.email,
      full_name: bookingData.name,
      room_type: bookingData.roomType,
      check_in: new Date(bookingData.checkIn).toLocaleDateString(),
      check_out: new Date(bookingData.checkOut).toLocaleDateString(),
      guests: bookingData.guests,
      cost: bookingData.cost,
      total: bookingData.total,
      phone: parseInt(bookingData.phone),
      guest_id: "",
    };
    try {
      await addDoc(collection(booking, "Booking"), {
        "Full Name": bookingData.name,
        Email: bookingData.email,
        Phone: bookingData.phone,
        Guests: bookingData.guests,
        Arrived: false,
        Cost: bookingData.total,
        "Check In": Timestamp.fromDate(new Date(bookingData.checkIn)),
        "Check Out": Timestamp.fromDate(new Date(bookingData.checkOut)),
        "Room Number": 0,
        "Room Type": bookingData.roomType?.split(" ")[0] ?? "",
        Source: "Online",
        Archive: false,
      });
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setDone(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-10 flex flex-col items-center gap-6 max-w-sm w-full mx-4 shadow-2xl">
        {done ? (
          <>
            <div className="text-5xl">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Thank You for Booking!
            </h2>
            <p className="text-gray-500 text-center">
              Your reservation is confirmed. A confirmation email has been sent to{" "}
              <span className="font-semibold">{bookingData.email}</span>.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800">Complete Payment</h2>
            <p className="text-gray-500 text-lg">
              Total:{" "}
              <span className="font-semibold text-[#6bba33] text-lg">
                ${amount} {currency}
              </span>
            </p>
            <div className="w-full">
              <PayPalButtons
                style={{ layout: "vertical", color: "gold", shape: "rect", label: "pay", height: 45 }}
                fundingSource="paypal"
                createOrder={(data, actions) =>
                  actions.order.create({
                    purchase_units: [{ amount: { value: amount, currency_code: currency } }],
                  })
                }
                onApprove={async (data, actions) => {
                  try {
                    const captureResult = await actions.order.capture();
                    if (captureResult.status === "COMPLETED") {
                      await updateDatabase();
                    }
                  } catch (err) {
                    console.error("Capture failed:", err);
                  }
                }}
                onCancel={onClose}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PayementPopup;