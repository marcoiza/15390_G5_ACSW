import Image from 'next/image'
import { FieldValues, FormState } from 'react-hook-form'

export function BtnSubmit(props: {
  readonly textBtn: string
  readonly formState: FormState<FieldValues>
  readonly btnColor?: string
}) {
  return (
    <button
      className={props.btnColor ?? 'btn-success'}
      type="submit"
      disabled={props.formState.isSubmitted}
    >
      {props.textBtn}
    </button>
  )
}

export function ImgBtnSubmit(props: {
  readonly pathImg: string
  readonly formState: FormState<FieldValues>
  readonly width: number
  readonly height: number
}) {
  return (
    <button type="submit" disabled={props.formState.isSubmitted}>
      <Image
        src={props.pathImg}
        alt="image btn"
        width={props.width}
        height={props.height}
      />
    </button>
  )
}
