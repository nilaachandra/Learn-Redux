import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-section">
            <h2 className="text-lg font-semibold mb-4">About XYZ Shop</h2>
            <p className="text-sm">XYZ Shop is your one-stop destination for all your shopping needs. We offer a wide range of products at affordable prices.</p>
          </div>
          <div className="footer-section">
            <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Products</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <p className="text-sm">123 XYZ Street<br/>City, State 12345<br/>Email: info@xyzshop.com<br/>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} XYZ Shop. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
