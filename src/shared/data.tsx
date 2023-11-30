import Geisha1 from '@/assets/geisha1.jpeg'
import Geisha2 from '@/assets/geisha2.jpeg'
import Geisha3 from '@/assets/geisha3.jpeg'
import Geisha4 from '@/assets/geisha4.jpeg'
import Geisha5 from '@/assets/geisha5.jpeg'
import Geisha6 from '@/assets/geisha6.jpeg'
import Flower1 from '@/assets/flower1.svg'
import Flower2 from '@/assets/flower2.svg'
import Flower3 from '@/assets/flower3.svg'
import Flower4 from '@/assets/flower4.svg'
import Flower5 from '@/assets/flower5.svg'
import { SparklesIcon, RectangleGroupIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { SlideType, BenefitType } from './types'

export const flowers = [Flower1, Flower2, Flower3, Flower4, Flower5]

export const slides: Array<SlideType> = [
  {
    title: 'Curabitur vitae',
    text: 'Lorem ipsum dolor tempor incid consectetur adipiscing elit idunt ut labore et dolore magna aliqua. Keu habitant morbi tristique senectus et.',
    img: Geisha1,
  },
  {
    title: 'Lacus sed viverra',
    text: ' Rhoncus mattis rhoncus urna neque viverra justo nec sapien pellentesque habitant morbi ultrices dui.',
    img: Geisha2,
  },
  {
    title: 'Ridiculus',
    text: 'Vitae olestie acemper feugiat nibh sed pulvinar sapien pellentesque turpis in eu habitant morbi tristique senectus et.',
    img: Geisha3,
  },
  {
    title: 'Montes nascetur',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eugiat in ante metus dictum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: Geisha4,
  },
  {
    title: 'Parturient',
    text: 'Feugiat in ante metus dictum. Elementum tempus egestas faucibus turpis in eu mi. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. ',
    img: Geisha5,
  },
  {
    title: 'Neque volutpat',
    text: 'Massa sapien faucibus et molestie acemper feugiat nibh sed pulvinar. Nisi sit amet volutpat consequat lacus.',
    img: Geisha6,
  },
]

export const benefits: Array<BenefitType> = [
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

export const errorMessages = {
  name: {
    required: 'Input your Name',
    maxLength: 'Max length is 50 characters',
  },
  email: {
    required: 'Input your Email',
    pattern: 'Your Email is incorrect',
  },
  message: {
    required: 'Input your Message',
    maxLength: 'Max length is 2000 characters',
  },
}

export const benefitText1: string =
  'Id interdum velit laoreet id donec ultrices tincidunt. Dictum non consectetur a erat nam at. Arcu dictum varius duis at consectetur lorem donec massa sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere vitae ultricies leo integer.'

export const benefitText2: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet. Tristique magna sit amet purus. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Eu feugiat pretium nibh ipsum. Egestas pretium aenean pharetra magna.'

export const ourClassesText: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi sit amet volutpat consequat lacus sed viverra tellus in hac habitasse platea. Ut sem nulla pharetra diam. Proin sed libero enim sed elementum tempus egestas faucibus turpis in eu mi.'

export const contactUsText: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis commodo odio aenean sed adipiscing diam. Lobortis mattis aliquam faucibus purus in. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Eget lorem dolor sed viverra   ipsum. Urna cursus eget nunc scelerisque viverra mauris. Vel fringilla est ullamcorper eget nulla.'
