import { About } from './About/About'
import { Contact } from './Contact'
import { Header } from './Header'
import { Section } from './Section'

export const Page = () => {
    return (
        <div className='h-screen w-full overflow-y-scroll snap-mandatory snap-y' id='page'>
            <Section color='bg-default' id='header'>
                <Header />
            </Section>
            <Section color='bg-secondary' id='contact' textColor='text-white'>
                <About />
            </Section>
            <Section color='bg-default' id='contact'>
                <Contact />
            </Section>
        </div>
    )
}