import { FunctionComponent } from 'react'

export interface JobProps {
    title: string,
    position: string,
    location: string,
    timeline: string
}

export const Job: FunctionComponent<JobProps> = ({title, position, location, timeline}) => (
    <div className='flex flex-col items-left my-2'>
        <h3 className='uppercase text-xl'>{title}</h3>
        <p className='text-lightish-red'>{position}</p>
        <p>{location}</p>
        <p>{timeline}</p>
    </div>
)