import { FieldValues, FormState } from 'react-hook-form'

export function SubmitBtn(props: {
  textBtn: string
  formState: FormState<FieldValues>
}) {
  return (
    <button
      className="btn-success"
      type="submit"
      disabled={props.formState.isSubmitted}
    >
      {props.textBtn}
    </button>
  )
}
