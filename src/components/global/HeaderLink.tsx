import { Link, useLocation } from "react-router-dom";
import { HeaderLinkProps } from "types/Header";

const HeaderLink = ({ text, path }: HeaderLinkProps) => {
  const location = useLocation();
  return (
    <li>
      <Link
        className={`p-2 rounded-md
        ${
          location.pathname === path
            ? "bg-blue-600 text-white underline underline-offset-4"
            : ""
        }`}
        to={path}
      >
        {text}
      </Link>
    </li>
  );
};

export default HeaderLink;
