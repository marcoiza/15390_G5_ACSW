export async function putApprovedMatrix(idMatrix: number) {
  try {
    const res = await fetch('/api/matrices/pdf/approve/' + idMatrix, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}

export async function putRejectedMatrix(idMatrix: number) {
  try {
    const res = await fetch('/api/matrices/pdf/reject/' + idMatrix, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}
