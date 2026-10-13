function About() {
  return (
    <div className="page-content">
      <div className="section-header">
        <h1>About SOS School</h1>
        <p>Discover our vision, values and the community that helps every student thrive.</p>
      </div>

      <section>
        <h2>Our story</h2>
        <p>
          SOS School is a welcoming, future-focused learning community where students are encouraged to think creatively, lead confidently and grow with purpose. From early years to senior study, we blend academic excellence with wellbeing, creativity and real-world readiness.
        </p>
      </section>

      <section>
        <h2>What we value</h2>
        <div className="info-grid">
          <article className="info-card">
            <h3>Curiosity</h3>
            <p>We inspire students to ask questions, explore ideas and enjoy the process of learning.</p>
          </article>
          <article className="info-card">
            <h3>Belonging</h3>
            <p>Every student is known, supported and included in a caring, connected community.</p>
          </article>
          <article className="info-card">
            <h3>Excellence</h3>
            <p>We challenge students to aim high, pursue personal bests and grow into capable leaders.</p>
          </article>
        </div>
      </section>

      <section>
        <h2>Our campuses</h2>
        <div className="campus-grid">
          <article className="campus-card">
            <h3>Junior Campus</h3>
            <p>Early Learning through Year 6, with a nurturing and inquiry-rich environment.</p>
          </article>
          <article className="campus-card">
            <h3>Middle Campus</h3>
            <p>Years 7 to 10, with strong academic foundations and student voice.</p>
          </article>
          <article className="campus-card">
            <h3>Senior Campus</h3>
            <p>Years 11 and 12, with pathways to university, training and careers.</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default About;
