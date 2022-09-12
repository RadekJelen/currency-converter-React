import "./style.css"
import { useState, useEffect } from "react";

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="clock">
      Dzisiaj jest
      {" "}
      {currentDate.toLocaleString( undefined, {
      weekday: "long", 
      day: "numeric", 
      month: "long", 
      hour: "numeric", 
      minute: "numeric", 
      second: "numeric" 
    })}
    </p>
  );
};

export default Clock;