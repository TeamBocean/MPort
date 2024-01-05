import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg dark:bg-gray-800 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Flowbite™. All Rights Reserved.
        </span>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://linkedin.com" className="text-blue-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white mx-2">
            <FaLinkedin size="1.5em" />
          </a>
          <a href="https://twitter.com" className="text-blue-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white mx-2">
            <FaTwitter size="1.5em" />
          </a>
          <a href="https://github.com" className="text-blue-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white mx-2">
            <FaGithub size="1.5em" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
