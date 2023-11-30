import { motion } from 'framer-motion'
import Slider from './SimpleSlider'
import HText from '@/shared/HText'
import { SelectedPage } from '@/shared/types'
import { ourClassesText1, ourClassesText2, ourClassesTitle, slides } from '@/shared/data'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const listStyle = 'list-disc py-1'

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id={SelectedPage.OurClasses} className='w-full bg-blue-3 py-10'>
      <motion.div
        className='mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <div>
          <HText>{ourClassesTitle}</HText>
          <p className='py-5'>{ourClassesText1}</p>
        </div>
        <Slider slides={slides} />
        <div>
          <p className='py-5'>{ourClassesText2.main}</p>
          <ul className='px-4'>
            <li className={listStyle}>{ourClassesText2.paragraph1}</li>
            <li className={listStyle}>{ourClassesText2.paragraph2}</li>
            <li className={listStyle}>{ourClassesText2.paragraph3}</li>
            <li className={listStyle}>{ourClassesText2.paragraph4}</li>
            <li className={listStyle}>{ourClassesText2.paragraph5}</li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses
