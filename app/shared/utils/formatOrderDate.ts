export const formatOrderDate = (dateString:string) => {
  const date = new Date(dateString);

  const now = new Date();

  // Remove time from both dates
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const dateOnly = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  if (dateOnly.getTime() === today.getTime()) {
    return "Today";
  }

  if (dateOnly.getTime() === yesterday.getTime()) {
    return "Yesterday";
  }

  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });
};