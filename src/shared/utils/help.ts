export const isNew = (createdAt: string | Date, days = 30): boolean => {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const diffTime = now.getTime() - createdDate.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24); // milliseconds → days
  return diffDays <= days;
};
