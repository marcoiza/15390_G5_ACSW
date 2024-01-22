import { getMandatoryActivities } from '@/app/actions'

export default async function ActivitiesList() {
  const mandatoryActivities = await getMandatoryActivities()
  return (
    <div>
      <h2 className="text-3xl font-bold px-10 py-5">Actividades</h2>
      <div className="flex flex-col items-center">
        {mandatoryActivities.map((activity) => (
          <p key={activity.TCAACTIVIDADES_CODIGO}>
            {activity.TCAACTIVIDADES_DESCRIPCION}
          </p>
        ))}
      </div>
    </div>
  )
}
