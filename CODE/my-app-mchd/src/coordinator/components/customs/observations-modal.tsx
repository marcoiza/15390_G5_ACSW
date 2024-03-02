import { putRejectedMatrix } from '@/src/utils/providers/coordinator/pdf-matrix'
import { putObservation } from '@/src/utils/providers/coordinator/observation'
import { useRouter, useSearchParams } from 'next/navigation'
import ModalTemplate from '@/src/components/modal-template'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BtnSubmit } from '@/src/components/btn-submit'

type Inputs = {
  TCAMATRICES_OBSERVACION: string
}

export default function ObservationsModal() {
  const searchParams = useSearchParams()
  const idMatrix = Number(searchParams.get('idMatrix'))
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    putRejectedMatrix(idMatrix)
      .then(() => {
        putObservation(idMatrix, data)
          .then(() => {
            alert('Matriz Rechazada')
            router.push('/dashboard/received/matrices')
          })
          .catch((error) => alert(error))
      })
      .catch((error) => alert(error))
  }

  return (
    <ModalTemplate
      textTitle="OBSERVACIONES"
      textButton="Rechazar Matriz"
      btnLayout="btn-white"
    >
      <form
        className="flex flex-col justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          className="border border-green-800 rounded w-96 h-64 p-1 mb-3"
          placeholder="Escriba aquí sus observaciones"
          {...register('TCAMATRICES_OBSERVACION', { required: true })}
        />
        {formState.errors.TCAMATRICES_OBSERVACION && (
          <span>This field is required</span>
        )}
        <BtnSubmit textBtn="Rechazar Matriz" formState={formState} />
      </form>
    </ModalTemplate>
  )
}
