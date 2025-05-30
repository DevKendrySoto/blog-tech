import { NewsCarousel } from '../components/ui/Carrucel'
import {TutorialsSection} from '../components/blog/TutorialSeccion/TutorialSeccion'

export default function Home() {
  return (
    <main >
      <NewsCarousel className="mt-10" />
      <TutorialsSection />
    </main >
  )
}