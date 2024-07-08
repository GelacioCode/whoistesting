import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      © {new Date().getFullYear()} Site Lookup - All Rights Reserved
    </footer>
  );
};

export default Footer;