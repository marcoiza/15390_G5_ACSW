export function calculatePercentageOfHours(
  activityHours: number,
  contractHours: number
) {
  if (contractHours === 0) return 0
  const rounded = Number(((activityHours * 100) / contractHours).toFixed(2))
  return rounded
}
