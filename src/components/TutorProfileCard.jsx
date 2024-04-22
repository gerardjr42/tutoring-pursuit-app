import "./TutorProfileCard.css";

export default function TutorProfileCard({ tutor }) {
  return (
    <section className=" custom-font relative mt-12 flex h-[350px] w-[500px] bg-gradient-to-b from-[#3C5681] to-[#1E293B] text-lg text-white">
      <div className="flex flex-row">
        <img
          src={tutor.img}
          alt="profile logo"
          className="ml-6 mt-6 h-36 w-36 border border-black object-cover"
        />
        <div className="ml-4 mt-10 flex flex-col ">
          <p className="mb-4"> {`${tutor.firstName} ${tutor.lastName}`}</p>
          <p>Tutoring:</p>
          <p>
            {tutor.skills.skill1} | {tutor.skills.skill2} |{" "}
            {tutor.skills.skill3}
          </p>
          <div className="ml-[-30px] mt-16">
            <p>Availability for this week:</p>
            <div className="ml-[-4rem] mt-2 flex flex-row">
              <span className="mr-4">Sun</span>
              <span className="mr-4">Mon</span>
              <span className="mr-4">Tues</span>
              <span className="mr-4">Wed</span>
              <span className="mr-4">Thurs</span>
              <span className="mr-4">Fri</span>
              <span className="mr-4">Sat</span>
            </div>
          </div>
        </div>
      </div>
      <button className="absolute bottom-0 right-0 m-4 rounded-md border border-black bg-white px-4 py-1 text-[#5046E6] hover:bg-[#a769de] hover:text-white">
        <a href={tutor.calendly} target="_blank">
        Book Tutor
        </a>
      </button>
    </section>
  );
}
