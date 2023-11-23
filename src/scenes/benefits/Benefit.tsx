import { SelectedPage } from '@/shared/types'
import {} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

type Props = {
  icon: JSX.Element
  title: string
  text: string
  setSelectedPage: (value: SelectedPage) => void
}

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

function Benefit({ icon, title, text, setSelectedPage }: Props) {
  return (
    <motion.div variants={childVariant} className='rounded-md border-2 border-blue-3 py-5 px-10 text-center'>
      <div className='mb-4 flex justify-center'>
        <div className='rounded-full border-2 border-blue-3 bg-white-2 p-4'>{icon}</div>
      </div>
      <h4 className='font-bold'>{title}</h4>
      <p className='my-3'>{text}</p>
      <AnchorLink
        className='text-sm font-bold text-blue-3 underline hover:text-white-3'
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  )
}

export default Benefit
