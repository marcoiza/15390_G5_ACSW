export default function SectionContainer(props: {
  readonly children: React.ReactNode
  readonly title: string
}) {
  return (
    <div className="">
      <h3 className="text-3xl font-bold mx-10 pt-8">{props.title}</h3>
      <hr className="h-px mx-10 my-4 border-0 bg-black" />
      <div className="mx-auto w-3/4">{props.children}</div>
    </div>
  )
}
