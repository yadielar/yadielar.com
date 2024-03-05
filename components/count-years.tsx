type CountYearsProps = {
  from: number;
};

export function CountYears({ from: yearInPast }: CountYearsProps) {
  const yearToday = new Date().getFullYear();
  const years = yearToday - yearInPast;
  return <>{years}</>;
}
