import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="py-6 px-4 flex items-center justify-between text-sm">
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/alexmnet/" target="_blank">
          <SiLinkedin className="w-5 h-5 text-gray-400 hover:text-gray-500" />
        </a>
        <a href="https://github.com/AlexMNet" target="_blank">
          <SiGithub className="w-5 h-5 text-gray-400 hover:text-gray-500" />
        </a>
        <a href="https://github.com/AlexMNet" target="_blank">
          <SiInstagram className="w-5 h-5 text-gray-400 hover:text-gray-500" />
        </a>
      </div>
      <div>&copy; {new Date().getFullYear()} Family Feast DB</div>
    </footer>
  );
};
export default Footer;
