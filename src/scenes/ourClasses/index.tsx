import HText from '@/shared/HText'
import Slider from './SimpleSlider'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { ourClassesText, slides } from '@/shared/data'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id={SelectedPage.OurClasses} className='w-full bg-blue-3 py-10'>
      <motion.div
        className='mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <div>
          <HText>OUR CLASSES</HText>
          <p className='py-5'>{ourClassesText}</p>
        </div>
        <Slider slides={slides} />
      </motion.div>
    </section>
  )
}

export default OurClasses
