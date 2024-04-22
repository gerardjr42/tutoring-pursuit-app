import TutorProfileCard from "../components/TutorProfileCard";

export default function BootTutor({ data }) {
  return (
    <main className="flex flex-wrap justify-around mx-8">
      {data.map((tutor) => {
        return <TutorProfileCard tutor={tutor} key={tutor.userId} />;
      })}
    </main>
  );
}
