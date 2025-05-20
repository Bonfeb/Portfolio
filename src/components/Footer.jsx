import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const twitter = import.meta.env.VITE_TWITTER;
  const facebook = import.meta.env.VITE_FACEBOOK;
  const github = import.meta.env.VITE_GITHUB;
  const linkedin = import.meta.env.VITE_LINKEDIN;

  return (
    <footer className={`mt-0 py-6 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Bonfeb. All Rights Reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            {facebook && (
              <a 
                href={facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`hover:text-blue-500 transition-colors duration-300`}
              >
                <FaFacebook size={20} />
              </a>
            )}
            {twitter && (
              <a 
                href={twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`hover:text-blue-400 transition-colors duration-300`}
              >
                <FaTwitter size={20} />
              </a>
            )}
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`hover:text-blue-600 transition-colors duration-300`}
              >
                <FaLinkedin size={20} />
              </a>
            )}
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`hover:text-gray-500 transition-colors duration-300`}
              >
                <FaGithub size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;