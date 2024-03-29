import "./App.css";
import Button from "./Components/Button";
import Interests from "./Components/Interests";
import Project from "./Components/Project";
import Section from "./Components/Section";

function App() {
  return (
    <div>
      <div className="">
        <div className="home-navbar home-navbar-links">
          <div className="links">
            <ul>
              <li>
                <a href="#about-me">About Me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#interests">Interests</a>
              </li>
            </ul>
          </div>
          <div className="logo-navbar">
            <a href="mailto: cook.ev@northeastern.edu">
              <svg
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.34375 0.653809C1.0498 0.653809 0 1.70446 0 2.99945C0 3.73734 0.34668 4.43126 0.9375 4.87596L11.5625 12.8511C12.1191 13.2665 12.8809 13.2665 13.4375 12.8511L24.0625 4.87596C24.6533 4.43126 25 3.73734 25 2.99945C25 1.70446 23.9502 0.653809 22.6562 0.653809H2.34375ZM0 6.12696V16.2914C0 18.0164 1.40137 19.4189 3.125 19.4189H21.875C23.5986 19.4189 25 18.0164 25 16.2914V6.12696L14.375 14.1021C13.2617 14.9378 11.7383 14.9378 10.625 14.1021L0 6.12696Z"
                  fill="#F2FFFD"
                />
              </svg>
            </a>
            <a
              href="https://github.com/evankcook"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2143 0.690918H2.78571C1.24777 0.690918 0 1.87586 0 3.33637V22.7364C0 24.1969 1.24777 25.3818 2.78571 25.3818H23.2143C24.7522 25.3818 26 24.1969 26 22.7364V3.33637C26 1.87586 24.7522 0.690918 23.2143 0.690918ZM16.0933 21.838C15.6058 21.9207 15.4259 21.6341 15.4259 21.3971C15.4259 21.0995 15.4375 19.5784 15.4375 18.3493C15.4375 17.4896 15.1357 16.9439 14.7817 16.6573C16.929 16.4314 19.1924 16.1503 19.1924 12.6285C19.1924 11.6255 18.8152 11.1239 18.2 10.4791C18.2987 10.2421 18.6295 9.26661 18.1013 7.99899C17.2946 7.762 15.4491 8.98553 15.4491 8.98553C14.683 8.7816 13.8531 8.67689 13.0348 8.67689C12.2165 8.67689 11.3866 8.7816 10.6205 8.98553C10.6205 8.98553 8.775 7.762 7.9683 7.99899C7.44018 9.26109 7.76518 10.2366 7.86964 10.4791C7.25446 11.1239 6.96429 11.6255 6.96429 12.6285C6.96429 16.1338 9.12902 16.4314 11.2763 16.6573C10.9978 16.8943 10.7482 17.3022 10.6612 17.8864C10.1098 18.1234 8.69955 18.5312 7.85804 17.1203C7.32991 16.2495 6.37812 16.1779 6.37812 16.1779C5.43795 16.1668 6.31429 16.74 6.31429 16.74C6.94107 17.0156 7.38214 18.0738 7.38214 18.0738C7.94509 19.7106 10.6379 19.1595 10.6379 19.1595C10.6379 19.9256 10.6496 21.1712 10.6496 21.3971C10.6496 21.6341 10.4754 21.9207 9.98214 21.838C6.15179 20.62 3.47054 17.1589 3.47054 13.1135C3.47054 8.0541 7.54464 4.21268 12.8723 4.21268C18.2 4.21268 22.5179 8.0541 22.5179 13.1135C22.5237 17.1589 19.9237 20.6255 16.0933 21.838ZM10.4 18.4706C10.2897 18.4926 10.1853 18.4485 10.1737 18.3769C10.1621 18.2942 10.2375 18.2226 10.3478 18.2005C10.458 18.1895 10.5625 18.2336 10.5741 18.3052C10.5915 18.3769 10.5161 18.4485 10.4 18.4706ZM9.84866 18.421C9.84866 18.4926 9.76161 18.5533 9.64554 18.5533C9.51786 18.5643 9.4308 18.5037 9.4308 18.421C9.4308 18.3493 9.51786 18.2887 9.63393 18.2887C9.7442 18.2777 9.84866 18.3383 9.84866 18.421ZM9.05357 18.3604C9.03036 18.432 8.91429 18.4651 8.81562 18.432C8.70536 18.41 8.62991 18.3273 8.65313 18.2556C8.67634 18.184 8.79241 18.1509 8.89107 18.173C9.00714 18.206 9.08259 18.2887 9.05357 18.3604ZM8.33973 18.0627C8.2875 18.1234 8.17723 18.1123 8.09018 18.0297C8.00312 17.958 7.97991 17.8533 8.03795 17.8037C8.09018 17.7431 8.20045 17.7541 8.2875 17.8368C8.36295 17.9084 8.39196 18.0187 8.33973 18.0627ZM7.81161 17.5612C7.75938 17.5943 7.66071 17.5612 7.59687 17.4785C7.53304 17.3959 7.53304 17.3022 7.59687 17.2636C7.66071 17.214 7.75938 17.2526 7.81161 17.3352C7.87545 17.4179 7.87545 17.5171 7.81161 17.5612V17.5612ZM7.43438 17.0266C7.38214 17.0762 7.29509 17.0487 7.23125 16.9935C7.16741 16.9219 7.1558 16.8392 7.20804 16.8006C7.26027 16.751 7.34732 16.7786 7.41116 16.8337C7.475 16.9054 7.48661 16.988 7.43438 17.0266ZM7.04554 16.6188C7.02232 16.6684 6.94687 16.6794 6.88304 16.6408C6.80759 16.6077 6.77277 16.5471 6.79598 16.4975C6.8192 16.4644 6.88304 16.4479 6.95848 16.4755C7.03393 16.5141 7.06875 16.5747 7.04554 16.6188Z"
                  fill="#F2FFFD"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/evankcook/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2143 0.690918H1.78013C0.797991 0.690918 0 1.49007 0 2.47109V23.6017C0 24.5827 0.797991 25.3818 1.78013 25.3818H23.2143C24.1964 25.3818 25 24.5827 25 23.6017V2.47109C25 1.49007 24.1964 0.690918 23.2143 0.690918ZM7.5558 21.8546H3.85045V10.0713H7.56138V21.8546H7.5558ZM5.70312 8.46195C4.51451 8.46195 3.55469 7.50848 3.55469 6.34007C3.55469 5.17166 4.51451 4.21819 5.70312 4.21819C6.88616 4.21819 7.85156 5.17166 7.85156 6.34007C7.85156 7.51399 6.89174 8.46195 5.70312 8.46195ZM21.4453 21.8546H17.74V16.1227C17.74 14.7559 17.7121 12.9978 15.8147 12.9978C13.8839 12.9978 13.5882 14.4859 13.5882 16.0235V21.8546H9.88281V10.0713H13.4375V11.6806H13.4877C13.9844 10.7547 15.1953 9.77916 16.9978 9.77916C20.7478 9.77916 21.4453 12.2207 21.4453 15.3952V21.8546Z"
                  fill="#F2FFFD"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="home-resume">
        <p>Hello, My name is</p>
        <h1>Evan Kosei Cook</h1>
        <h3>
          Computer science and business student at Northeastern University
        </h3>
        <p className="resume-text"></p>
        <Button
          link="./Resume_ Evan Kosei Cook_6_20.pdf"
          text="Check out my resume"
        />
      </div>
      <Section id="about-me" title="About Me">
        <div className="content-container">
          <p className="about-me-text">About me to be added soon!</p>
          <img
            src="images/personal-photo.svg"
            alt="Evan Kosei Cook"
            id="personal-photo"
          />
        </div>
      </Section>
      <Section id="projects" title="Projects">
        <Project
          imgPath="images/lecturelink.png"
          alt="LectureLink"
          title="LectureLink"
          description="LectureLink is a presentation clicker with an integrated polling system, designed to help professors measure their students' engagement and participation during lectures. With just a click, professors can send a prompt that asks for level of understanding to students' devices, allowing them to give real-time feedback. This interactive approach to teaching and learning not only enhances comprehension but also encourages participation and collaboration in the classroom."
          link="https://github.com/LectureLink/LectureLink"
          isImageLeft={true}
        />
        <Project
          imgPath="images/mealpal.png"
          alt="MealPal"
          title="MealPal"
          description="In this project, I built a web application to facilitate the recipe search process. The app utilizes the Spoonacular API for recipe querying. The front end was built using React, Javascript, HTML, and CSS. User verification and food preference storage was built using Firebase."
          link="https://github.com/evankcook/FoodPlannerProject"
          isImageLeft={false}
        />
        <Project
          imgPath="images/personal-website.png"
          alt="Personal Website"
          title="Personal Website"
          description="Surprise! You're interacting with this project as you read this. I hope you are enjoying it! This website was created using JavaScript, CSS, and HTML with React as the framework. It is still a work in progress as I hope to add more projects in the future!"
          link="https://github.com/evankcook/PersonalWebsite"
          isImageLeft={true}
        />
        <Project
          imgPath="images/photoeditorproject.png"
          alt="Photo Editor project"
          title="Photo Editor Project"
          description="During the duration of this project, another student and I created a photo editor application that provided support for 17 features. It could process commands through a GUI, 'text-mode', and scripting. This project was completed using Java and the Swing toolkit. The project was made following the principles of object-oriented design and MVC architecture."
          link="https://youtu.be/ARFNPOQmuC8"
          isImageLeft={false}
        />
      </Section>
      <Section id="experience" title="Experience">
        <div className="coming-soon">
          <h1>Coming soon...</h1>
        </div>
      </Section>
      <Section id="interests" title="Interests">
        <Interests
          title="Music Composition and Performance"
          description="Music, especially of the classical genre, has fascinated me from a young age. Taking up the violin at the age of 3 and piano at the age of 11, I grew to appreciate the discipline that the gradual but crucially consistent practice of the two instruments imparted on me. In my middle school years, I found a new interest in Western music theory and classical composition. Western music theory allowed me to break down, analyze, and appreciate the elegance in the complexity of works such as the fugues of Bach and preludes of Rachmaninoff. Such music contains multiple lines that are independent in their melodic contour. Yet, together, the lines provide a beautiful harmonic connectedness. I believe this quality can be seen in the 'Art' of computer science and software engineering. The task of breaking down a complex codebase into its individual working parts intrigues the musician in me. Yet, similar to my musical evolution, I now take a role as the 'composer' writing my own applications, hopefully, for the world to enjoy. The link below will take you to a piece I composed in my senior year of high school: Prelude in G Minor. Please enjoy :)"
          link="https://www.youtube.com/watch?v=JrmnGUC1id0"
        />
        <Interests
          title="An Avid Art Appreciatician"
          description="Although I lack the talent to produce, I am an avid admirer of the visual arts. If I am not spending a free day at the symphony or cheering on my Minnesota Vikings, you may find me at a local art museum checking out the new exhibit in town. In this artistic realm, I am most drawn to Russian Expressionist Art, especially the works of Vassily Kandinsky. The link below will take you to a design project in which I brought a few works of Kandinsky to life through a subtly-choreographed animation of the first of Scriabin's Deux Poemes."
          link="https://youtu.be/H--IakmRnNU"
        />
      </Section>
      <div className="footer">
        <a
          href="https://www.linkedin.com/in/evankcook/"
          target="_blank"
          rel="noreferrer"
        >
          Built by Evan Cook
        </a>
      </div>
    </div>
  );
}

export default App;
