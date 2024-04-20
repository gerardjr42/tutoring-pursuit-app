import './About.css'

export default function About() {

  return (
    <section className="about">
      <div className="what-is-card">
        <h2 className="what-is-header">What is Pursuit Tutoring?</h2>
        <h3 className="what-is-description">Share Skills. Learn Skills.</h3>
        <p>Pursuit Tutoring is your key to accessing the support you need to unlock you potential as budding developer. We are a platform that connects tutors and learners.</p>
      </div>
      <div>
        <h2>Why Pursuit Tutoring?</h2>
        <h3>Fostering Connections through Learning</h3>
        <p>As lifelong learners we use the resources at our fingertips to learn how to get things done. But as Pursuit Fellows and developers we have have the unique opportunity to develop connections through a mutual love of coding.</p>
        <p>While online resources and AI certainly do exist as powerful resources, being able to get targeted instruction on a skill / topic / concept from an experienced person allows for more efficient and impactful learning. In addition we saw an opportunity to help fellows leverage the power of relationships to foster targeted learning experiences.</p>
      </div>
      <div className="how-to-book">
        <h2 className="how-to-header">How To Book a Session</h2>
        <ol>
          <li>View the Tutors - click "Book Tutor" in the nav bar.</li>
          <li>Review Tutor profile card.</li>
          <li>See more info - click the <button type="button">"More Info"</button> button on tutor card</li>
          <li>Choose session time - click the <button type="button">"Book Tutor"</button> button on the profile card. Which will open up a new tab.</li>
          <li>Select a tutoring session length.</li>
          <li>Select from available start times.</li>
          <li>Enter your information.</li>
        </ol>
      </div>
    </section>
  )
}