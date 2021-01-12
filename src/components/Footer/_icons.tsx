import {
  IoLogoLinkedin,
  FaGithub,
  RiGitlabFill,
} from "react-icons/all";

const iconsSize = 30;

interface ILinksProps {
  url: string;
  icon?: object;
}

const Links: React.FC<ILinksProps> = ({ url, icon }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
};

export const icons = [
  <Links
    url="https://www.linkedin.com/in/s%C3%A9rgioj%C3%BAnior/"
    icon={<IoLogoLinkedin size={iconsSize} />}
  />,
  <Links
    url="https://github.com/sergiosacj"
    icon={<FaGithub size={iconsSize} />}
  />,
  <Links
    url="https://salsa.debian.org/sergiosacj-guest"
    icon={<RiGitlabFill size={iconsSize} />}
  />,
];
