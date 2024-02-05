export function calculatePercentageOfHours(
  activityHours: number,
  contractHours: number
) {
  if (contractHours === 0) return 0
  return (activityHours * 100) / contractHours
}
