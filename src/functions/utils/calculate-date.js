function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function calculateDate(amount, unit, direction) {
  const currentDate = new Date();

  if (direction === "future") {
    switch (unit) {
      case "day":
        currentDate.setDate(currentDate.getDate() + amount);
        break;
      case "month":
        currentDate.setMonth(currentDate.getMonth() + amount);
        break;
      case "year":
        currentDate.setFullYear(currentDate.getFullYear() + amount);
        break;
      default:
        console.error("Invalid unit. Use 'day', 'month', or 'year'.");
        return null;
    }
  } else if (direction === "past") {
    switch (unit) {
      case "day":
        currentDate.setDate(currentDate.getDate() - amount);
        break;
      case "month":
        currentDate.setMonth(currentDate.getMonth() - amount);
        break;
      case "year":
        currentDate.setFullYear(currentDate.getFullYear() - amount);
        break;
      default:
        console.error("Invalid unit. Use 'day', 'month', or 'year'.");
        return null;
    }
  } else {
    console.error("Invalid direction. Use 'future' or 'past'.");
    return null;
  }

  return formatDate(currentDate);
}

export default calculateDate;

// Example usage:
// const result = calculateDate(30, "month", "future");
// console.log(result);
