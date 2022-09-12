import { useState, useEffect } from "react";
import { StyledClock } from "./styled"

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
    <StyledClock>
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
    </StyledClock>
  );
};

export default Clock;