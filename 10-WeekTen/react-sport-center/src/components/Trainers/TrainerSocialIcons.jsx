// components/Trainers/TrainerSocialIcons.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const TrainerSocialIcons = ({ socials }) => (
  <div className="trainer-icons">
    <a href="#">
      <FaFacebook />
    </a>
    <a href="#">
      <FaTwitter />
    </a>
    <a href="#">
      <FaInstagram />
    </a>
  </div>
);

export default TrainerSocialIcons;
