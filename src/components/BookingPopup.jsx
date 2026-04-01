import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function BookingPopup({ status, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-10 flex flex-col items-center gap-6 max-w-sm w-full mx-4 shadow-2xl">
        {status === "loading" && (
          <>
            <div className="loading scale-125">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="text-xl font-semibold text-gray-700">
              Confirming your booking...
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <FontAwesomeIcon icon={faCircleCheck} className="text-5xl text-[#7BC24A]" />
            <p className="text-2xl font-bold text-gray-800">
              Booking Confirmed!
            </p>
            <p className="text-gray-500 text-center">
              A confirmation email has been sent to your inbox.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-2 rounded-lg border-2 border-[#7BC24A] custom-button text-lg"
            >
              Done
            </button>
          </>
        )}

        {status === "error" && (
          <>
            <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <p className="text-2xl font-bold text-gray-800">Booking Failed</p>
            <p className="text-gray-500 text-center">
              Something went wrong. Please try again.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-2 rounded-lg border-2 border-red-500 text-red-500 text-lg"
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default BookingPopup;
