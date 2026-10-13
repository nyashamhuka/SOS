function News() {
  return (
    <div className="page-content">
      <div className="section-header">
        <h1>News</h1>
        <p>Recent highlights, achievements and stories from the SOS School community.</p>
      </div>

      <section>
        <div className="featured-grid">
          <article className="featured-card">
            <h2>Science fair celebrates bold ideas</h2>
            <p>Students shared innovative projects and asked powerful questions across STEM, design and sustainability.</p>
          </article>
          <article className="featured-card">
            <h2>Arts showcase brings the campus together</h2>
            <p>Creative performances and exhibitions highlighted the talent, teamwork and confidence of our young artists.</p>
          </article>
          <article className="featured-card">
            <h2>New leadership opportunities for students</h2>
            <p>Our student leadership program is expanding with mentoring, service projects and ambassador roles.</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default News;
