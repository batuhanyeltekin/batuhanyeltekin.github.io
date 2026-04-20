import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa6';
import classNames from 'classnames';

const Sidebar = () => {
  const profileDetails = {
    name: "Batuhan Yeltekin",
    avatar: "/assets/images/batuhan.png",
    bio: "Batuhan Yeltekin is a rising junior at Columbia University studying Computer Science and Economics.",
    location: "New York, NY",
    email: "batuhan.duru.yeltekin@gmail.com"
  };

  return (
    <aside className="sidebar">
      <div className="profile-card">
        <img src={profileDetails.avatar} alt="Batuhan Yeltekin Profile" className="avatar" />
        <h2 style={{ borderBottom: 'none', margin: '0 0 0.5rem 0', padding: 0 }}>{profileDetails.name}</h2>
        <p className="bio-text" style={{ fontSize: '0.9rem' }}>{profileDetails.bio}</p>
        <p className="bio-text" style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>📍 {profileDetails.location}</p>
        
        <div className="social-links">
          <a href="https://github.com/batuhanyeltekin" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/batuhanyeltekin/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/fotoyeltekin/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram size={20} />
          </a>
          <a href={`mailto:${profileDetails.email}`} className="social-icon">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      <nav className="nav-menu">
        <NavLink 
          to="/" 
          className={({ isActive }) => classNames('nav-link', { active: isActive })}
          end
        >
          Home
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => classNames('nav-link', { active: isActive })}
        >
          Projects
        </NavLink>
        <NavLink 
          to="/resume" 
          className={({ isActive }) => classNames('nav-link', { active: isActive })}
        >
          Resume
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
