export const calculateExperience = (): number => {
  const startDate = new Date('2021-01-01');
  const currentDate = new Date();
  
  const diffInYears = (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  
  // Round to one decimal place
  return Math.round(diffInYears * 10) / 10;
};