type SectionProps = {
    title: string
}

export const SectionTitle = (props: SectionProps) => {
  return (
    <div>
        <h2>{props.title}</h2>
    </div>
  )
}
