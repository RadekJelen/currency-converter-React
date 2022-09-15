import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled"

const Clock = () => {
  const currentDate = useCurrentDate();

  return (
    <StyledClock>
      Dzisiaj jest
      {" "}
      {currentDate.toLocaleString(undefined, {
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