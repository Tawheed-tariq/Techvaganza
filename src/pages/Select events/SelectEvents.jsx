import React, { useState } from "react";
import Login from "./components/Login";
import Selection from "./components/Selection";

function SelectEvents() {
  const [userId, setUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleLogin = () => {
    if (userId.trim() !== "") {
      setIsLoggedIn(true);
    } else {
      alert("Please enter a valid User ID");
    }
  };

  const handleEventSelection = (event) => {
    if (!selectedEvents.includes(event)) {
      setSelectedEvents([...selectedEvents, event]);
    } else {
      setSelectedEvents(selectedEvents.filter((e) => e !== event));
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login handleLogin={handleLogin} setUserId={setUserId} userId={userId} />
      ) : (
        <Selection selectedEvents={selectedEvents} handleEventSelection={handleEventSelection} />
      )}
    </div>
  );
}

export default SelectEvents;
