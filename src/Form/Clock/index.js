import "./style.css"
import { useState, useEffect } from "react";

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
  }, []);

  return (
    <p className="clock">
      Dzisiaj jest
      {" "}
      {currentDate.toLocaleString(
        "pl-PL", { weekday: "long", day: "numeric", }
      )}
      &nbsp;
      {currentDate.toLocaleString(
        "pl-PL", { month: "long", }
      )}
      &nbsp;
      {currentDate.toLocaleString(
        "pl-PL", { hour: "numeric", minute: "numeric", second: "numeric" }
      )}
    </p>
  );
};

export default Clock;