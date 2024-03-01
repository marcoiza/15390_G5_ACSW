import { writeFileSync } from 'fs'

export async function POST(request: Request): Promise<Response> {
  const blob = await request.blob()
  const namePdf = request.url.split('=')[1]
  blob.arrayBuffer().then((buffer) => {
    writeFileSync(
      `/home/kevin/Coding/15390_G5_ACSW/CODE/my-app-mchd/files/received/${namePdf}.pdf`,
      Buffer.from(buffer)
    )
  })
  return new Response()
}
