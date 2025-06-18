import React, { useEffect, useState } from "react";

function GiftList() {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/gifts")
      .then((res) => res.json())
      .then((data) => setGifts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul>
      {gifts.map((gift) => (
        <li key={gift.id}>
          {gift.model} — {gift.symbol} — владелец: {gift.owner_name}
        </li>
      ))}
    </ul>
  );
}

export default GiftList;
