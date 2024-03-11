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
      disabled={props.formState.isSubmitting}
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
  readonly alt: string
}) {
  return (
    <button type="submit" disabled={props.formState.isSubmitting}>
      <Image
        src={props.pathImg}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </button>
  )
}
