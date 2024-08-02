// src/components/Footer.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white text-black  py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center  md:text-left">
            <h2 className="text-lg font-bold">Your Company</h2>
            <p className="text-black">
              Making the world a better place through innovation.
            </p>
            <p className="text-black">123 Main Street, City, Country</p>
            <p className="text-black">
              Email: contact@yourcompany.com | Phone: +123 456 7890
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left text-black">
            <p className="text-black">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#!" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#!" className="hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#!" className="hover:text-gray-400">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
