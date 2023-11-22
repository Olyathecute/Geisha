import { useState } from 'react'
import { Background, SelectedPage } from '@/shared/types'
import Link from './Link'
import ActionButton from '@/shared/ActionButton'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.svg'

type Props = {
  isTopOfPage: boolean
  isAboveMediaScreen: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const pages: string[] = ['Home', 'Benefits', 'Our Classes', 'Contact Us']

const Navbar = ({ isTopOfPage, isAboveMediaScreen, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const flexBetween = 'flex items-center justify-between'
  const navbarBackground = isTopOfPage ? '' : 'bg-blue-3'

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt='logo' />

            {isAboveMediaScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {pages.map((page, index) => (
                    <Link
                      key={index}
                      page={page}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      background={Background.Blue}
                    />
                  ))}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                </div>
              </div>
            ) : (
              <button className='rounded-full bg-orange-2 p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className='h-6 w-6 text-blue-3' />
              </button>
            )}
          </div>
        </div>
      </div>

      {!isAboveMediaScreen && isMenuToggled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-orange-2'>
          <div className='flex justify-end p-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className='h-6 w-6 text-blue-3' />
            </button>
          </div>
          <div className=' ml-[33%] flex flex-col gap-10 text-2xl'>
            {pages.map((page, index) => (
              <Link
                key={index}
                page={page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                background={Background.Orange}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
