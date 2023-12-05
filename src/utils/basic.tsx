// convert git api date into readable formate
// return date in toDateString formate
export const ToDateStr = (dateStr: string) => {
  const oldDate = new Date(dateStr);
  const newDate = oldDate.toDateString();
  return newDate;
};

export function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
