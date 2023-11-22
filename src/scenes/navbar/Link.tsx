import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Background, SelectedPage } from '@/shared/types'

type Props = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
  background: Background
}

function Link({ page, selectedPage, setSelectedPage, background }: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage
  const backgroundBlue = `${
    selectedPage === lowerCasePage ? 'text-orange-2' : ''
  } transition duration-500 hover:text-orange-1`
  const backgroundOrange = `${
    selectedPage === lowerCasePage ? 'text-white-1' : 'text-blue-3'
  } transition duration-500 hover:text-blue-2`

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={background === Background.Blue ? backgroundBlue : backgroundOrange}
    >
      {page}
    </AnchorLink>
  )
}

export default Link
