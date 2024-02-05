export const getTimeStartFormat = (time: string | null): string => {
  if (time === null) return ''
  const hour = time?.slice(0, 2)
  const minutes = time?.slice(2, 4)
  return `${hour}:${minutes}`
}

export const getTimeEndFormat = (time: string | null): string => {
  if (time === null) return ''
  const hour = time?.slice(5, 7)
  const minutes = time?.slice(7, 9)
  return `${hour}:${minutes}`
}

export const getTimeFormat = (timeStart: string, timeEnd: string): string => {
  timeStart = timeStart.slice(0, 2) + timeStart.slice(3, 5)
  timeEnd = timeEnd.slice(0, 2) + timeEnd.slice(3, 5)
  return `${timeStart}_${timeEnd}`
}
