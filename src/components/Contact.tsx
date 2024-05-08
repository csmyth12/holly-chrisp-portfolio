import { Link } from './Link';
import { O } from './O';
//@ts-ignore
import { UilFileDownload } from '@iconscout/react-unicons'

export const Contact = () => (
    <div className='flex flex-col justify-evenly min-w-full min-h-full p-8'>
        <h3 className='text-4xl'>C<O/>NTACT</h3>
        <div className='flex flex-col items-start justify-center lg:pr-40'>
            <p className='text-lg my-2'>Email: <Link href='mailto:hollya123@outlook.co.uk'>hollya123@outlook.co.uk</Link></p>
            <p className='text-lg my-2'>Phone: <Link href='tel:00447398 040560'>+44 7398 040560</Link></p>
            <div className='flex flex-row items-center justify-center my-2'>
                <p className='text-lg mr-2'>Checkout my portfolio: </p>
                <a href='/HollyChrispPortfolio.zip' download='HollyChrispPortfolio.zip' className='text-indigo-700 hover:text-indigo-950'>
                    <UilFileDownload />
                </a>
            </div>
        </div>
    </div>
)
