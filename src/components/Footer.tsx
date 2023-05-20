import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../App.css';
export const Footer = () => {
  return (
    <section className="my-section">
      <div className="my-section-item">
        <a href="https://www.facebook.com/votre-page-facebook">
          <FaFacebook style={{ borderRadius: 25, background: 'white', color: 'blue', fontSize: 50 }} />
        </a>
        <a href="https://www.instagram.com/votre-page-instagram">
          <FaInstagram style={{ borderRadius: 25, background: 'white', color: 'red', fontSize: 50 }} />
        </a>
        <a href="https://www.linkedin.com/votre-page-linkedin">
          <FaLinkedin style={{ borderRadius: 25, background: 'white', color: 'blue', fontSize: 50 }} />
        </a>
        <a href="https://www.github.com/votre-page-github">
          <FaGithub style={{ borderRadius: 25, background: 'white', color: 'black', fontSize: 50 }} />
        </a>
      </div>
    </section>
  )
} 