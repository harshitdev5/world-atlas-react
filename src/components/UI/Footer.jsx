import footerContact from "../../api/footerApi.json";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbMailPlus } from "react-icons/tb";

export default function Footer() {
  const footerIcon = {
    FaGithub: <FaGithub />,
    FaLinkedin: <FaLinkedin />,
    TbMailPlus: <TbMailPlus />
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((currData, index) => {
          const { icon, title, details, link } = currData;
          return (
            <div className="footer-contact" key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer" className="icon">
                {footerIcon[icon]}
              </a>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
