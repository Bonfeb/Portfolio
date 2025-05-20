import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const twitter = import.meta.env.VITE_TWITTER;
  const facebook = import.meta.env.VITE_FACEBOOK;
  const github = import.meta.env.VITE_GITHUB;
  const linkedin = import.meta.env.VITE_LINKEDIN;

  return (
    <footer className="mt-0 py-8 bg-black text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Personal</h2>
        
        <p className="text-sm italic mb-8">
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.
        </p>
        
        <div className="flex justify-center space-x-3">
        <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition-colors duration-300 p-2 rounded-full flex items-center justify-center h-10 w-10"
          >
            <FaGithub size={18} className="text-black" />
          </a>

          <a 
            href={twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition-colors duration-300 p-2 rounded-full flex items-center justify-center h-10 w-10"
          >
            <FaXTwitter size={18} className="text-black" />
          </a>
          
          <a 
            href={facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition-colors duration-300 p-2 rounded-full flex items-center justify-center h-10 w-10"
          >
            <FaFacebook size={18} className="text-black" />
          </a>
          
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition-colors duration-300 p-2 rounded-full flex items-center justify-center h-10 w-10"
          >
            <FaLinkedin size={18} className="text-black" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;