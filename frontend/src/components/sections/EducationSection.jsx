import React from 'react';
import './EducationSection.css';

const EducationSection = () => {
  const programmingLanguages = [
    "1982 Spectrum BASIC", "1985 BBC BASIC", "1986 Assembler", "1986 FORTRAN",
    "1987 Amstrad BASIC", "1988 VAX VMS BASIC", "1988 ADA", "1989 Lisp",
    "1990 Prolog", "1991 Strand88", "1993 MS AccessDB", "1994 VBA",
    "1995 Visual Basic", "1997 Progress 4GL", "1998 C++", "1999 SQL Server/T-SQL",
    "2000 Oracle/PLSQL", "2000 Javascript", "2000 HTML", "2000 CSS",
    "2003 C#/.Net", "2008 Silverlight/WPF/XAML", "2012 Ruby & Ruby On Rails", "2012 PostgresSQL",
    "2013 AngularJS", "2014 GoLang", "2015 Python", "2016 EmberJS",
    "2016 Angular", "2016 Typescript", "2017 Powershell", "2018 ReactJs, NextJs",
    "2019 Firebase, NodeJs, Lambdas", "2020 GatsbyJs", "2021 HyperLedger Fabric", "2022 Nx Repo",
    "2023 Move/SUI blockchain", "2024 RemixJS"
  ];

  const educationItems = [
    {
      degree: "MA (Distinction)",
      school: "UCA",
      description: "Graduating with Distinction in 2010 I completed my part-time MA degree - it only took 5 years! (but to be fair, I was busy building my own company at the same time).",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg"
    },
    {
      degree: "BSc (Hons)",
      school: "Cranfield/RMCS", 
      description: "Graduating 2nd in my class, with 3 scholarships and a National Award, I am eternally grateful to my professors who pushed me to reach for the stars.",
      image: "https://images.unsplash.com/photo-1566803739329-908e2b57fc39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwdGVjaHxlbnwwfHx8fDE3NTczNDgyMDZ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      degree: "Artificial Intelligence",
      school: "edX / UC Berkeley",
      description: "I am fascinated by AI and built my first neural network on a 64 processor transputer platform in 1991...and I am still learning how computers learn.",
      image: "https://images.pexels.com/photos/33798614/pexels-photo-33798614.jpeg"
    },
    {
      degree: "Founders Institute",
      school: "Amsterdam",
      description: "It is Jan 2019 and I am excited to have been accepted to join the Founders Institute and start work on building yet another new company!",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtYXRyaXglMjBjb2RlfGVufDB8fHx8MTc1NzM0ODIxN3ww&ixlib=rb-4.1.0&q=85"
    }
  ];

  return (
    <section className="education-section section">
      <div className="parallax-bg" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg)'
      }}></div>
      <div className="matrix-overlay"></div>
      <div className="container">
        <div className="education-content">
          <h2>PROGRAMMING & SOFTWARE KNOWLEDGE...</h2>
          <p className="education-subtitle">I THINK I HAVE FORGOTTEN MORE THAN I KNOW :(</p>
          <p className="learning-text">I am a life-long learner and am currently learning my 36th programming language/framework/database. Yikes, I sometimes wonder why did I choose this career!?</p>
          
          <div className="languages-grid">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className="language-item">
                <span className="number">{index + 1}.</span>
                <span className="language">{lang}</span>
              </div>
            ))}
          </div>

          <div className="additional-tech">
            <p>I also have experience with Azure, AWS, Heroku, Redis, RabbitMQ, Docker.</p>
          </div>

          <h2>EDUCATIONAL HIGHLIGHTS</h2>
          <div className="education-grid">
            {educationItems.map((item, index) => (
              <div key={index} className="education-card">
                <div className="education-image">
                  <img src={item.image} alt={item.degree} />
                </div>
                <div className="education-info">
                  <h3>{item.degree}</h3>
                  <h4>{item.school}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;