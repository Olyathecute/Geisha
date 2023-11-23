import { useEffect, useState } from 'react'
import Navbar from '@/scenes/navbar'
import Home from '@/scenes/home'
import Benefits from '@/scenes/benefits'
import { SelectedPage } from './shared/types'
import useMediaQuery from './hooks/useMediaQuery'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const isAboveMediaScreen = useMediaQuery('(min-width: 1060px)')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='app bg-blue-3'>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
        isAboveMediaScreen={isAboveMediaScreen}
      />
      <Home setSelectedPage={setSelectedPage} isAboveMediaScreen={isAboveMediaScreen} />
      <Benefits setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
