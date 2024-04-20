import PropTypes from "prop-types";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { user, logout } = useAuth();
  const isLoggedIn = user != null;

  return (
    <nav className="flex list-none items-stretch justify-between gap-8 bg-[#333] px-4 text-white">
      <CustomLink to="/">
        <span className="text-[2rem]">Pursuit Tutoring</span>
      </CustomLink>
      <ul className="m-0 flex gap-4 p-0">
        <CustomLink to="/about">What is Pursuit</CustomLink>
        <CustomLink to="/tutoring">Book Tutor</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
        <CustomLink to="/settings">Account Settings</CustomLink>
        {isLoggedIn ? (
          <CustomLink to="/" onClick={logout}>
            Logout
          </CustomLink>
        ) : (
          <CustomLink to="/login">Login</CustomLink>
        )}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li
      className={`${isActive ? "active" : ""} nav-links hover:bg-[#777] active:bg-[#555]`}
    >
      <Link
        className="flex h-full items-center p-1 text-inherit no-underline"
        to={to}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}
CustomLink.propTypes = {
  to: PropTypes.string.isRequired, // Ensure 'to' prop is a required string
  children: PropTypes.node.isRequired, // Ensure 'children' prop is a required node
};
export default NavBar;
