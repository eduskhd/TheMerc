import Hero from '@/components/home/Hero'
import QuickInfo from '@/components/home/QuickInfo'
import Welcome from '@/components/home/Welcome'
import FoodDrink from '@/components/home/FoodDrink'
import DakotaJoe from '@/components/home/DakotaJoe'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import SocialFollow from '@/components/home/SocialFollow'
import VisitCTA from '@/components/home/VisitCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickInfo />
      <Welcome />
      <FoodDrink />
      <DakotaJoe />
      <UpcomingEvents />
      <SocialFollow />
      <VisitCTA />
    </>
  )
}
