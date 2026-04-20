const Home = () => {
  const images = [
    "/assets/images/8.PNG",
    "/assets/images/IMG_2940.png",
    "/assets/images/IMG_3075.png",
    "/assets/images/IMG_4104.png",
    "/assets/images/IMG_8953.jpg",
    "/assets/images/IMG_9427.png"
  ];

  return (
    <div className="page-transition">
      <h1>Hello! 👋</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
        Great to see you here! I am Batu, a rising third-year student at Columbia University studying Computer Science and Economics. My interests lie in the intersection of artificial intelligence/machine learning methods, financial analysis, and natural language processing. Please feel free to look around my website!
      </p>
      
      <p>
        My original website, <a href="https://batuhanyeltekin.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}}>batuhanyeltekin.com</a> is undergoing major reconstruction as I am currently working on migrating the website from a Wordpress model to a MERN stack. This shall do for now.
      </p>

      <div className="gallery">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery snapshot ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
