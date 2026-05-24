export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="">Contact</a>
      </nav>

      {/* FIRST PAGE */}
      <section className="portfolio-page">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1>PORTFOLIO</h1>
      </section>

      {/* ABOUT PAGE */}
      <section className="hero" id="about">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="left">
          <img src="/PORTFOLIO/images/me.jpg" alt="profile" />
        </div>

        <div className="right">
          <h1>ABOUT ME</h1>
          <h3>Frontend Developer &amp; Startup Builder</h3>
          <p>
            I create modern and cinematic web experiences with
            clean UI, smooth layouts and minimal aesthetics.
            Passionate about frontend development, startup ideas
            and building visually impressive digital products.
          </p>
          <a href="#work" className="btn">View My Work</a>
        </div>
      </section>

      {/* PROJECT SECTION */}
      <section className="projects" id="work">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <h1>MY WORK</h1>

        <div className="project-container">
          <div className="card">
            <div className="project-images">
              <img src="/PORTFOLIO/images/ss1.png" alt="Revenuzy screenshot 1" />
              <img src="/PORTFOLIO/images/ss2.png" alt="Revenuzy screenshot 2" />
              <img src="/PORTFOLIO/images/ss3.png" alt="Revenuzy screenshot 3" />
            </div>
            <h2>Revenuzy</h2>
            <p>
              Revenue intelligence platform designed for creators
              and communities. Helps track engagement, analytics,
              audience activity and revenue growth with a modern UI.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="experience" id="experience">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <h1>EXPERIENCE</h1>

        <div className="timeline">
          <div className="timeline-box">
            <h2>Frontend Developer</h2>
            <h4>2025 - Present</h4>
            <p>
              Building modern startup interfaces, cinematic
              portfolio websites and creative frontend experiences
              using HTML, CSS and JavaScript.
            </p>
          </div>

          <div className="timeline-box">
            <h2>Startup Builder</h2>
            <h4>Frontiq &amp; Revenuzy</h4>
            <p>
              Working on AI startup concepts focused on frontend
              visualization, creator analytics and modern user
              experience systems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
