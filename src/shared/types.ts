export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export enum Background {
  Orange = 'orange',
  Blue = 'blue',
}

export type BenefitType = {
  icon: JSX.Element
  title: string
  text: string
}

export type SlideType = {
  title: string
  text: string
  img: string
}
