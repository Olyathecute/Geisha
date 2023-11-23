import {} from 'react'
import { SelectedPage, BenefitType } from '@/shared/types'
import { SparklesIcon, RectangleGroupIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Benefit from './Benefit'
import Geisha from '@/assets/BenefitsImg.jpeg'
import ActionButton from '@/shared/ActionButton'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const benefits: BenefitType[] = [
  {
    icon: <SparklesIcon className='h-8 w-8' />,
    title: 'Insider Information',
    text: 'Dfaucibus scelerisque donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum vitae nunc velis.',
  },
  {
    icon: <RectangleGroupIcon className='h-8 w-8' />,
    title: 'Variety of Workshops',
    text: 'Oacilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis.',
  },
  {
    icon: <UserGroupIcon className='h-8 w-8' />,
    title: 'Online community',
    text: 'Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursd.',
  },
]

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
          <HText>MORE THAN JUST A SOCIETY</HText>
          <p className='my-5'>
            For many centuries, the art of geishas was considered inaccessible to the average person. Today we invite
            you to plunge into this wonderful world of geishas and learn new things!
          </p>
        </div>

        <motion.div
          className='mt-5 items-center justify-between gap-8 flex xs:flex-col md:flex-row'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
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
              ENIM <span className='text-red-1'>LACUS</span> ALIQUET PORTTITOR
            </HText>

            <p className='my-5'>
              Id interdum velit laoreet id donec ultrices tincidunt. Dictum non consectetur a erat nam at. Arcu dictum
              varius duis at consectetur lorem donec massa sapien. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas
              maecenas pharetra convallis posuere vitae ultricies leo integer.
            </p>
            <p className='my-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet. Tristique magna sit amet
              purus. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Eu feugiat pretium nibh ipsum.
              Egestas pretium aenean pharetra magna.
            </p>

            <div className='my-7'>
              <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
