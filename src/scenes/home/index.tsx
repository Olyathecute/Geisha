import {} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import HomePageTitle from '@/assets/HomePageTitle.svg'
import HomePageLogo from '@/assets/HomePageLogo.svg'
import HomePageImg from '@/assets/HomePageImg.png'
import HomePageImgSecond from '@/assets/HomePageImgSecond.png'
import Flower1 from '@/assets/flower1.svg'
import Flower2 from '@/assets/flower2.svg'
import Flower3 from '@/assets/flower3.svg'
import Flower4 from '@/assets/flower4.svg'
import Flower5 from '@/assets/flower5.svg'

type Props = {
  isAboveMediaScreen: boolean
  setSelectedPage: (value: SelectedPage) => void
}

function Home({ isAboveMediaScreen, setSelectedPage }: Props) {
  return (
    <>
      <section id={SelectedPage.Home} className='gap-16 bg-blue-3 py-10 md:h-full md:pb-0'>
        <motion.div
          className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          <div className='mt-32 mb-10 md:basis-3/5'>
            <motion.div
              className='md:-mt-40 mb-10'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <div className='mb-10'>
                <img alt='home-page-title' src={isAboveMediaScreen ? HomePageTitle : HomePageLogo} />
              </div>
              <p className='text-md md:text-start'>
                In the harsh world of samurai there must be a place and time for sublime pleasures, which is why
                messengers from the “world of flowers” were needed.
              </p>
            </motion.div>
            <div className='flex items-center gap-10'>
              <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              <AnchorLink
                className='text-sm font-bold text-white-1 underline hover:text-white-3'
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                Learn More
              </AnchorLink>
            </div>
          </div>
          <div className='flex basis-2/5 justify-center md:ml-10 md:mt-40 md:justify-end'>
            <img alt='home-page-img' src={isAboveMediaScreen ? HomePageImg : HomePageImgSecond} />
          </div>
        </motion.div>
        {isAboveMediaScreen && (
          <div className='h-[150px] w-full bg-blue-3 py-20'>
            <div className='flex justify-around w-full'>
              <img alt='flower' src={Flower1} className='w-20 h-20' />
              <img alt='flower' src={Flower2} className='w-20 h-20' />
              <img alt='flower' src={Flower3} className='w-20 h-20' />
              <img alt='flower' src={Flower4} className='w-20 h-20' />
              <img alt='flower' src={Flower5} className='w-20 h-20' />
            </div>
          </div>
        )}
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default Home
