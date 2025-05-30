import { NewsCarousel } from '../components/ui/Carrucel'
import {TutorialsSection} from '../components/blog/TutorialSeccion/TutorialSeccion'
import {ProjectsSection} from '@/components/blog/ProjecctSeccion/ProjectSeccion'
import { ChallengesSection } from '@/components/Challenge/ChallengesSeccion'

export default function Home() {
  return (
    <main >
      <NewsCarousel className="mt-10" />
      <TutorialsSection />
      <ProjectsSection />
      <ChallengesSection />
    </main >
  )
}