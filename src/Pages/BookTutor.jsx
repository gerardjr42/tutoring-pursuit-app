
import TutorProfileCard from "../components/TutorProfileCard";
import { useUsers } from "../context/UsersContext";

export default function BootTutor({ data }) {
  const { tutors } = useUsers() // ready to use list of tutors
  console.log(tutors)
  

  return (
    <main className="flex flex-wrap justify-around mx-8 mt-14">
      {tutors.map((tutor) => {
        return <TutorProfileCard tutor={tutor} key={tutor.id} />;
      })}
    </main>
  );
}
