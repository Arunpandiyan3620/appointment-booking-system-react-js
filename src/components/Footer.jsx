import { footerLinks, logo } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-1 flex-col items-start">
          <a href="/">
            <img
              src={logo}
              alt="footerLogo"
              width={216}
              height={46}
              className="w-44 cursor-pointer"
            />
          </a>
          <p className="mt-6 text-base leading-7 text-gray-600 sm:max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-10 flex-wrap">
          {footerLinks.map((footerLinks, index) => (
            <div key={index}>
              <h4 className="text-[#4B5563] font-montserrat text-lg leading-normal font-medium mb-10">
                {footerLinks.title}
              </h4>
              <ul>
                {footerLinks.links.map((link, index) => (
                  <li
                    key={index}
                    className="mt-3 text-white-400 text-base leading-normal hover:text-gray-400 cursor-pointer"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-gray-600 text-base my-12">
        Copyright © 2024 GreatStack - All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
