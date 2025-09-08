import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const activities = [
    "Stamp Collecting", "Coin Collecting", "Miniature Painting", "Origami", "Calligraphy", 
    "Bird Watching", "Photography", "Dungeons & Dragons", "Table Top Wargaming", "Swimming",
    "High Diving", "Scuba Diving", "Snowboarding", "Charity Fundraising", "Organising Black Tie Charity Balls",
    "Cooking", "Debating", "Roller Hockey", "Soccer", "Rugby", "Swimming", "Sprinting (U13 County 110m Hurdles)",
    "Fencing", "Karate", "Ju-Jitsu", "Basketball", "Magazine Editing", "Writing (Poetry, Essays. Short Stories)",
    "Proofreading", "Squash", "Sports Coaching", "Amateur Acting", "Brewing Beer (epic fail)", "Board Games",
    "Chess", "Go", "Travel", "Archery", "Shooting", "Hydroponics", "Reading", "Sailing", "Guitar", "Piano",
    "Naturism", "Camping", "Mountain Biking", "Kite-Surfing", "Surfing", "Volleyball", "Video Games", "Volunteering"
  ];

  return (
    <section className="testimonials-section section">
      <div className="parallax-bg" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1701099153587-6f28b448ff0e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxtYXRyaXglMjBiaW5hcnklMjBjb2RlfGVufDB8fHx8MTc1NzM0ODE5OXww&ixlib=rb-4.1.0&q=85)'
      }}></div>
      <div className="matrix-overlay"></div>
      <div className="container">
        <div className="testimonials-content">
          <h2>SOME TESTIMONIALS FROM THE DAYS BEFORE LINKEDIN</h2>
          
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg" alt="Teaching Reference" />
              </div>
              <div className="testimonial-content-text">
                <h3>From my teaching career</h3>
                <p>I had "a calling" to teach, and started at age 17 in my free time as a volunteer teaching children with special needs. For the next ten years teaching was the major focus of my career. Although I love to teach, you rarely get to develop awesome software, which I love more, and so I decided to move on. However, the experience left me with an enormous respect for teachers everywhere. Education is at the heart of the type of future we are building for humanity.</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src="https://images.unsplash.com/photo-1566803739329-908e2b57fc39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwdGVjaHxlbnwwfHx8fDE3NTczNDgyMDZ8MA&ixlib=rb-4.1.0&q=85" alt="First Job Reference" />
              </div>
              <div className="testimonial-content-text">
                <h3>From my 1st job after leaving teaching</h3>
                <p>Once teaching was 'out of my system' it was time to move on and work in the burgeoning IT sector as a developer and consultant.</p>
              </div>
            </div>
          </div>

          <div className="teaching-highlight">
            <div className="teaching-content">
              <div className="teaching-text">
                <h3>~ I STILL LOVE TO TEACH ~</h3>
                <p>There is an educational revolution taking place. Schools are still running on a Victorian Model, but all that is set to change. We are just seeing the beginning of a worldwide learning revolution.</p>
                <a href="#" className="mentor-button">I CAN BE YOUR MENTOR</a>
              </div>
              <div className="codementor-image">
                <img src="https://images.pexels.com/photos/33798614/pexels-photo-33798614.jpeg" alt="CodeMentor Profile" />
              </div>
            </div>
          </div>

          <div className="life-section">
            <div className="life-content">
              <div className="life-image">
                <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtYXRyaXglMjBjb2RlfGVufDB8fHx8MTc1NzM0ODIxN3ww&ixlib=rb-4.1.0&q=85" alt="Life activities" />
                <p className="image-caption">← This is my twin catching some rays in Brazil before heading out for some surfing on that epic beach.</p>
              </div>
              <div className="life-text">
                <h3>~ LIFE IS SHORT ~ BUT I AM A RESTLESS SOUL, ALWAYS DOING SOMETHING...</h3>
                <div className="activities-grid">
                  {activities.map((activity, index) => (
                    <span key={index} className="activity-item">{activity}</span>
                  ))}
                </div>
                <p className="final-note">And finally, one time I flew a stunt plane!</p>
              </div>
            </div>
          </div>

          <div className="remote-work">
            <div className="remote-content">
              <div className="upwork-image">
                <img src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg" alt="Upwork Profile" />
              </div>
              <div className="remote-text">
                <h3>~ I CAN WORK FULLY REMOTE AND STILL DELIVER ~</h3>
                <p>I am equally happy working fully remote or in an office.</p>
                <p><strong>But I have had enough of long commutes!</strong></p>
                <a href="#" className="hire-button">WANT TO HIRE ME?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;