import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <div className="page-transition">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h1 style={{ margin: 0 }}>Experience</h1>
        <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="button" download>
          <Download size={18} />
          Download PDF
        </a>
      </div>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2>Education</h2>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.25rem' }}>Columbia University</h3>
          <p style={{ margin: 0, fontWeight: 500, color: 'var(--text-primary)' }}>Bachelor of Arts in Computer Science, minor in Economics</p>
          <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Expected Graduation: May 2027</p>
          
          <p style={{ margin: '0.5rem 0' }}><strong>Honors:</strong> John Jay Scholar, Dean's List, Summer Enhancement Fellow</p>
          <p style={{ margin: '0.5rem 0' }}><strong>Affiliations:</strong> Columbia Undergraduate Wealth Management Club, Columbia Data Science Society, Columbia Organization for Rising Entrepreneurs, Athletics Pep Band, Columbia Turkish Students</p>
        </div>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2>Professional Experience</h2>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.25rem' }}>KoçDigital <span style={{ fontWeight: 400, color: 'var(--text-secondary)' }}>- Project Assistant</span></h3>
          <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>[Date Range]</p>
          <ul>
            <li>Achievement 1</li>
            <li>Achievement 2</li>
            <li>Achievement 3</li>
          </ul>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.25rem' }}>[Company Name] <span style={{ fontWeight: 400, color: 'var(--text-secondary)' }}>- [Position]</span></h3>
          <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>[Date Range]</p>
          <ul>
            <li>Achievement 1</li>
            <li>Achievement 2</li>
            <li>Achievement 3</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem' }}>Programming Languages</h3>
            <ul>
              <li>Language 1</li>
              <li>Language 2</li>
              <li>Language 3</li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.1rem' }}>Technologies</h3>
            <ul>
              <li>Technology 1</li>
              <li>Technology 2</li>
              <li>Technology 3</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
