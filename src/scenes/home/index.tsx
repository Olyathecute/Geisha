import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import HomePageTitle from '@/assets/HomePageTitle.svg'
import HomePageLogo from '@/assets/HomePageLogo.svg'
import HomePageImg from '@/assets/HomePageImg.png'
import HomePageImgSecond from '@/assets/HomePageImgSecond.png'
import { buttons, flowers, homeText } from '@/shared/data'

type Props = {
  isAboveMediaScreen: boolean
  setSelectedPage: (value: SelectedPage) => void
}

function Home({ isAboveMediaScreen, setSelectedPage }: Props) {
  return (
    <>
      <section id={SelectedPage.Home} className='gap-16 bg-blue-3 py-10 md:h-full'>
        <motion.div
          className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          <div className='mt-32 mb-10 md:basis-3/5'>
            <div className='md:-mt-40 mb-10'>
              <motion.div
                className='mb-10'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 3 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                <img alt='home-page-title' src={isAboveMediaScreen ? HomePageTitle : HomePageLogo} />
              </motion.div>
              <p className='text-md md:text-start'>{homeText}</p>
            </div>
            <div className='flex items-center gap-10'>
              <ActionButton setSelectedPage={setSelectedPage}>{buttons.joinNow}</ActionButton>
              <AnchorLink
                className='text-sm font-bold text-white-1 underline hover:text-white-3'
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                {buttons.learnMore}
              </AnchorLink>
            </div>
          </div>
          <div className='flex basis-2/5 justify-center md:ml-10 md:mt-40 md:justify-end'>
            <img alt='home-page-img' src={isAboveMediaScreen ? HomePageImg : HomePageImgSecond} />
          </div>
        </motion.div>
        {isAboveMediaScreen && (
          <div className='h-[100px] w-full bg-blue-3 p-3 mt-5'>
            <div className='flex justify-around w-full'>
              {flowers.map((flower) => (
                <img key={flower} alt='flower' src={flower} className='w-20 h-20' />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Home
