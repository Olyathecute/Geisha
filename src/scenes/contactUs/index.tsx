import { SelectedPage } from '@/shared/types'
import ContactUsImg from '@/assets/ContactUsImg.jpeg'
import HText from '@/shared/HText'
import { motion } from 'framer-motion'
import { contactUsText, errorMessages } from '@/shared/data'
import { useForm } from 'react-hook-form'
import Input from './Input'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

function ContactUs({ setSelectedPage }: Props) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async (event: any) => {
    const isValid = await trigger()

    if (!isValid) {
      event.preventDefault()
    }
  }

  return (
    <section id={SelectedPage.ContactUs} className='mx-auto w-5/6 py-10 text-blue-3'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        <div>
          <HText>
            <span className='text-red-1'>JOIN NOW</span> TO GET IN SHARE
          </HText>
          <p className='py-5'>{contactUsText}</p>
        </div>
        <div className='mt-5 justify-between gap-8 md:flex md:h-[340px]'>
          <form target='_blank' onSubmit={onSubmit} method='POST' action='http://formsubmit.co/wyg28309@nezid.com'>
            <Input
              inputName='name'
              inputType='input'
              registerSettings={{ required: true, maxLength: 50 }}
              errorMessages={errorMessages}
              register={register}
              errors={errors}
            />
            <Input
              inputName='email'
              inputType='input'
              registerSettings={{ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }}
              errorMessages={errorMessages}
              register={register}
              errors={errors}
            />
            <Input
              inputName='message'
              inputType='textarea'
              registerSettings={{ required: true, maxLength: 2000 }}
              errorMessages={errorMessages}
              register={register}
              errors={errors}
            />

            <button
              type='submit'
              className='mt-5 rounded-md bg-blue-3 text-white-1 px-20 py-4 transition duration hover:bg-blue-2'
            >
              SUBMIT
            </button>
          </form>
          <div className='h-56 w-auto mt-10 md:h-full md:w-3/5 md:mt-0'>
            <img alt='contact_us_page_img' src={ContactUsImg} className='rounded-md w-full h-full object-cover' />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs
