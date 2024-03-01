import { FieldValues, FormState } from 'react-hook-form'

export function BtnSubmit(props: {
  readonly textBtn: string
  readonly formState: FormState<FieldValues>
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
