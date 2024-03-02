export async function putObservation(
  id: number,
  observation: { TCAMATRICES_OBSERVACION: string }
) {
  try {
    const res = await fetch(`/api/common/matrices/observations/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(observation),
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}
