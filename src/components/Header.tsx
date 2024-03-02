import smiley from '@/images/holly-smiley.jpeg'
import luna from '@/images/lunaparkhol.jpeg'
import Image from 'next/image'

export const Header = () => (
    <div className='flex flex-row items-center justify-between scroll-page'>
        <Image src={smiley} alt='Holly in a toilet' width={225} height={300} />
        <h1 className='text-center text-7xl'>
            Holly Chrisp
        </h1>
        <Image src={luna} alt='Holly outside luna park'  width={225} height={400}/>
    </div>
)
