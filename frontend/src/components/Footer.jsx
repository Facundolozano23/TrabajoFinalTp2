import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    background: 'linear-gradient(90deg, #1e3c72, #2a5298)', // Blue gradient
    padding: '20px 0',
    color: '#fff',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '0 15px',
  };

  const titleStyle = {
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: 'bold',
  };

  const linkListStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const linkItemStyle = {
    marginBottom: '10px',
  };

  const linkStyle = {
    color: '#ffd700', // Gold color for links
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const linkIconStyle = {
    marginRight: '8px',
  };

  const textStyle = {
    fontSize: '0.9rem',
    color: '#e0e0e0', // Light grey color for text
  };

  const copyrightStyle = {
    backgroundColor: '#1e3c72', // Darker blue for the copyright section
    padding: '10px 0',
    fontSize: '0.8rem',
    marginTop: '20px',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 300px', margin: '10px' }}>
            <h5 style={titleStyle}>About Us</h5>
            <p style={textStyle}>Bienvenido a el Juguete Rabioso! Somos una juguetería líder en el mercado, donde están los mejores precios y ofertas para comprar productos de la mejor calidad</p>
          </div>

          <div style={{ flex: '1 1 150px', margin: '10px' }}>
            <h5 style={titleStyle}>Links</h5>
            <ul style={linkListStyle}>
              <li style={linkItemStyle}><a style={linkStyle} href="/toy">Lista de Juguetes</a></li>
              <li style={linkItemStyle}><a style={linkStyle} href="/toy/create">Create Toy</a></li>
              <li style={linkItemStyle}><a style={linkStyle} href="/about">About Us</a></li>
              <li style={linkItemStyle}><a style={linkStyle} href="/contact">Contacto</a></li>
            </ul>
          </div>

          <div style={{ flex: '1 1 150px', margin: '10px' }}>
            <h5 style={titleStyle}>Seguinos en redes</h5>
            <ul style={linkListStyle}>
              <li style={linkItemStyle}><a style={linkStyle} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook style={linkIconStyle} /> Facebook</a></li>
              <li style={linkItemStyle}><a style={linkStyle} href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter style={linkIconStyle} /> Twitter</a></li>
              <li style={linkItemStyle}><a style={linkStyle} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram style={linkIconStyle} /> Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div style={copyrightStyle}>
        &copy; 2024 Facundo Lozano. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;