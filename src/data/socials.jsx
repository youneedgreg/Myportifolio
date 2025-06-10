import {
    FaLinkedin,
    FaGithub,
    // FaSpotify,
    FaFacebook,
    // FaInstagram,
    FaFacebookMessenger,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import { MdGamepad } from "react-icons/md";

const SOCIALS = [
    {
        description: "Instagram",
        url: "https://instagram.com/youneedgreg",
        text: "Gregory Temwa Odete",
        icon: <FaInstagram size={20} color="#1877F2" className="" />,
    },
    {
        description: "LinkedIn",
        url: "https://www.linkedin.com/in/youneedgreg/",
        text: "Gregory Temwa Odete",
        icon: <FaLinkedin size={20} color="#0077b5" className="" />,
    },
    {
        description: "GitHub",
        url: "https://github.com/youneedgreg",
        text: "@youneedgreg",
        icon: <FaGithub size={20} className="" />,
    },
];

export default SOCIALS;
