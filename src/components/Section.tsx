import { FunctionComponent, ReactNode } from "react"

export interface SectionProps {
    children: ReactNode,
    color?: string,
    textColor?: string,
    id: string
}

export const Section: FunctionComponent<SectionProps> = ({children, color, id, textColor }) => (
    <section className={`h-full w-full ${color} snap-center snap-always ${textColor} `} id={id}>
        {children}
    </section>
)