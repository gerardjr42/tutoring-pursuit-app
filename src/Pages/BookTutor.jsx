
import TutorProfileCard from "../components/TutorProfileCard";
import { useUsers } from "../context/UsersContext";

export default function BootTutor({ data }) {
  const { tutors } = useUsers()
  

  return (
    <main className="flex flex-wrap justify-around mx-8">
      {data.map((tutor) => {
        return <TutorProfileCard tutor={tutor} key={tutor.userId} />;
      })}
    </main>
  );
}
