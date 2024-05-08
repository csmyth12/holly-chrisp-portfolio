import Image from 'next/image'
import Title from '../images/Portfolio-title.png'

export const Header = () => (
    <div className='flex flex-col items-center justify-center min-h-full min-w-full'>
        <h1>
            <Image src={Title} alt='Holly Chrisp Portfolio' height={1000} width={1000} />
        </h1>
    </div>
)
