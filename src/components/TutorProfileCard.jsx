import "./TutorProfileCard.css"

export default function TutorProfileCard () {

  return (
      <div className="tutor">
        <div className="tutor__card">
          <div className="tutor__image">
            <img src="https://avatars.githubusercontent.com/u/56453063?v=4" alt="All Might" />
          </div>
          <div className="tutor__name">
            <div className="tutor__realName">
              Pursuit Tutor
            </div>
            <div className="tutor__job">
              <span>Tutoring:</span>
              <br/>
            </div>
            <div className="tutor__specialties">
              <span>Front-End</span> <span>|</span>
              <span>Back-End</span> <span>|</span>
              <span>DSA</span>
            </div>
          </div>
          <div className="tutor__calendly-link">
            <a href="#"><button>Calendly Link</button></a>
          </div>
        </div>
      </div>
  )
}