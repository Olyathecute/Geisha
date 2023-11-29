import Slider from 'react-slick'
import { SlideType } from '@/shared/types'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
  slides: Array<SlideType>
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
}

const textTransition = 'opacity-0 transition duration-500 group-hover:opacity-100'

function SimpleSlider({ slides }: Props) {
  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.title} className='relative w-[300px] h-[300px] p-1 sm:p-5 group'>
          <img
            alt='class'
            src={slide.img}
            className='w-full h-full object-cover rounded-md brightness-100 transition duration-500 group-hover:brightness-25'
          />
          <div className='absolute flex inset-0 items-center justify-center'>
            <div className='text-center px-10'>
              <h1 className={`text-2xl py-5 ${textTransition}`}>{slide.title}</h1>
              <p className={`hidden m:inline ${textTransition}`}>{slide.text}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default SimpleSlider
