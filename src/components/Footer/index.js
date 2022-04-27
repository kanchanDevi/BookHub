import {FaGoogle, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="contact-us-container">
    <div>
      <FaGoogle className="contact-us-icon" />
      <FaTwitter className="contact-us-icon" />
      <FaInstagram className="contact-us-icon" />
      <FaYoutube className="contact-us-icon" />
    </div>
    <p className="contact-us-heading">Contact Us</p>
  </div>
)

export default Footer
