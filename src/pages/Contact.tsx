function Contact() {
  return (
    <div className="page-content">
      <div className="section-header">
        <h1>Contact</h1>
        <p>We’d love to help you learn more about life at SOS School.</p>
      </div>

      <section>
        <h2>Get in touch</h2>
        <div className="info-grid">
          <article className="info-card">
            <h3>General enquiries</h3>
            <p><a href="mailto:hello@sosschool.edu.au">hello@sosschool.edu.au</a></p>
            <p>(02) 5550 2400</p>
          </article>
          <article className="info-card">
            <h3>Visit our campus</h3>
            <p>123 Learning Avenue</p>
            <p>Sydney NSW 2000</p>
          </article>
          <article className="info-card">
            <h3>Admissions</h3>
            <p>Book a personalised tour</p>
            <p>Monday to Friday, 9:00am – 4:00pm</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Contact;
