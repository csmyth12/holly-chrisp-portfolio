import SillyConor from '@/images/sillyconor.jpeg'
import SwagConor from '@/images/swagconor.jpeg'
import AnotherSillyConor from '@/images/anothersillyconor.jpeg'
import { Carousel } from './Carousel'

export const Projects = () => (
    <section id='projects' className='p-8 h-full'>
        <h2 className='text-2xl mx-4 mb-4'>Projects</h2>
        <p>
            There's not much shpiel needed here, just take a look at Holly's work and let it speak for itself:
        </p>
        <div className='flex flex-row justify-center m-4'>
            <Carousel>
                <img src={'../images/sillyconor.jpeg'} alt='Silly Conor' height={300} width={190} />
                <img src={'../images/swagconor.jpeg'} alt='Swag Conor' height={300} width={190} />
                <img src={'../images/anothersillyconor.jpeg'} alt='Another Silly Conor' height={300} width={190} />  
            </Carousel>
        </div>
    </section>
)  
