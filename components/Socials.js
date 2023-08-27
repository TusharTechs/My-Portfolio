// links
import Link from "next/link";

// icons
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTwitterLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.instagram.com/tusharaggarwal995/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link href={"https://www.facebook.com/tushar.aggarwal.391082"} className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/tushar-agarwal-2580971b3/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://github.com/TusharTechs"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
