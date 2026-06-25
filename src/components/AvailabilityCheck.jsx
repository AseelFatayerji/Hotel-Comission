import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";

import { booking } from "../firebase";

export function useAvailability(checkin, checkout, rooms) {
  const [availableQty, setAvailableQty] = useState({});

  useEffect(() => {
    if (!checkin || !checkout || !rooms?.length) {
      const fallback = {};
      rooms?.forEach((r) => (fallback[r.id] = r.Quantity));
      setAvailableQty(fallback);
      return;
    }

    async function check() {
      const selectedCheckIn = new Date(checkin);
      const selectedCheckOut = new Date(checkout);

      const bookedCount = {};
      const snap = await getDocs(
        query(
          collection(booking, "Booking"),
          where("Check Out", ">", Timestamp.fromDate(selectedCheckIn)),
        ),
      );

      const overlapping = snap.docs
        .map((d) => d.data())
        .filter((b) => b["Check In"]?.toDate() < selectedCheckOut);

      for (const b of overlapping) {
        const type = b["Room Type"];
        if (type) bookedCount[type] = (bookedCount[type] ?? 0) + 1;
      }
      const result = {};
      for (const room of rooms) {
        const booked = bookedCount[room.id.split(" ")[0]] ?? 0;
        result[room.id] = Math.max(0, room.Quantity - booked);
      }
      setAvailableQty(result);
    }

    check().catch(console.error);
  }, [checkin, checkout, rooms]);

  return availableQty;
}
