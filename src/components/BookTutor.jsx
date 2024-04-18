import "./BookTutor.css"
import TutorProfileCard from "./TutorProfileCard.jsx"

export default function BootTutor ({tutors}) {
  return (

    <main>
      {tutors.map(tutor => <TutorProfileCard />)}
    </main>

  )
}