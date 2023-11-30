import {} from 'react'
import { SelectedPage, BenefitType } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Benefit from './Benefit'
import Geisha from '@/assets/BenefitsImg.jpeg'
import ActionButton from '@/shared/ActionButton'
import {
  benefitMainTitle,
  benefitMainTitleText,
  benefitSecondTitle,
  benefitSecondTitleText1,
  benefitSecondTitleText2,
  benefits,
  buttons,
} from '@/shared/data'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
}

function Benefits({ setSelectedPage }: Props) {
  return (
    <section id={SelectedPage.Benefits} className='mx-auto min-h-full w-5/6 py-10 text-blue-3'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <div className='md:my-5 md:w-3/'>
          <HText>{benefitMainTitle}</HText>
          <p className='my-5'>{benefitMainTitleText}</p>
        </div>

        <motion.div
          className='mt-5 items-center justify-between gap-8 flex xs:flex-col md:flex-row'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              text={benefit.text}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        <div className='my-10 item-center justify-between gap-10 md:flex'>
          <img alt='geisha' src={Geisha} className='mx-auto h-96 rounded-md' />
          <div className='mt-10 md:mt-0'>
            <HText>
              {benefitSecondTitle.first}
              <span className='text-red-1'>{benefitSecondTitle.second}</span>
              {benefitSecondTitle.third}
            </HText>
            <p className='my-5'>{benefitSecondTitleText1}</p>
            <p className='my-5'>{benefitSecondTitleText2}</p>
            <div className='my-7'>
              <ActionButton setSelectedPage={setSelectedPage}>{buttons.joinNow}</ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
