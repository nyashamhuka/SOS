import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=85"
          alt="Students learning together in a bright classroom"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow">A brighter future starts here</span>
          <h1>Where learning<br />feels alive.</h1>
          <p>
            SOS School helps every learner grow in confidence, curiosity and capability through exceptional teaching, strong community and a joyful place to belong.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="button button-primary">
              Book a Tour
            </Link>
            <Link to="/learning" className="hero-text-link">
              Discover learning <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <span className="hero-caption">Independent learning for curious minds</span>
      </section>

      <section className="quick-links">
        <article>
          <span className="quick-index">01 / Learn</span>
          <h2>Foundational excellence</h2>
          <p>Personalised teaching, strong literacy and numeracy, and a love of discovery from the earliest years.</p>
        </article>
        <article>
          <span className="quick-index">02 / Belong</span>
          <h2>Connected community</h2>
          <p>Students feel known, supported and challenged as part of a warm and vibrant school community.</p>
        </article>
        <article>
          <span className="quick-index">03 / Grow</span>
          <h2>Future-focused pathways</h2>
          <p>From co-curricular leadership to senior subjects and careers guidance, every step is purposeful.</p>
        </article>
      </section>

      <section className="campus-overview" id="campus-overview">
        <div className="section-header">
          <span className="eyebrow">Three stages, one community</span>
          <h2>Room to grow</h2>
          <p>Explore the spaces where our students learn, lead and thrive.</p>
        </div>
        <div className="campus-grid">
          <article className="campus-card">
            <h3>Junior Campus</h3>
            <p>Early Learning to Year 6</p>
            <Link to="/about">Explore junior years <span aria-hidden="true">↗</span></Link>
          </article>
          <article className="campus-card">
            <h3>Middle Campus</h3>
            <p>Years 7 to 10</p>
            <Link to="/about">Explore middle years <span aria-hidden="true">↗</span></Link>
          </article>
          <article className="campus-card">
            <h3>Senior Campus</h3>
            <p>Years 11 to 12</p>
            <Link to="/about">Explore senior pathways <span aria-hidden="true">↗</span></Link>
          </article>
        </div>
      </section>

      <section className="featured-content">
        <div className="section-header">
          <span className="eyebrow">From around our school</span>
          <h2>What’s happening</h2>
          <p>Latest stories, events and opportunities from across the SOS School community.</p>
        </div>
        <div className="featured-grid">
          <article className="featured-card">
            <h3>Celebrating student success</h3>
            <p>From arts performances to academic showcases, our students are achieving remarkable things.</p>
            <Link to="/news">Read the story <span aria-hidden="true">↗</span></Link>
          </article>
          <article className="featured-card">
            <h3>Upcoming campus events</h3>
            <p>Open days, performances and family workshops are all part of the SOS School experience.</p>
            <Link to="/news">See what’s on <span aria-hidden="true">↗</span></Link>
          </article>
          <article className="featured-card">
            <h3>Enrolment pathways</h3>
            <p>Find out how to begin your child’s journey with us and book a personalised campus visit.</p>
            <Link to="/enrol">Explore enrolment <span aria-hidden="true">↗</span></Link>
          </article>
        </div>
      </section>
    </>
  );
}

export default Home;
