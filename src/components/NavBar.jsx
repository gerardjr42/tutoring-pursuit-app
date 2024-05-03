import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { Fragment, forwardRef } from "react";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "What is Pursuit Tutoring?", to: "/about", isActive: false },
  { name: "Book Tutor", to: "/tutoring", isActive: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const { currentUser, logout } = useAuth();
  const isLoggedIn = currentUser != null;
  const navigate = useNavigate();

  async function signOut() {
    try {
      logout();
      navigate("/login");
    } catch (error) {
      //handle error
    }
  }

  return (
    <Disclosure
      as="nav"
      className="border-b-2 border-b-purple-950 bg-slate-950 "
    >
      {({ open }) => (
        <>
          <div className=" px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center ">
                  <CustomLink to="/">
                    <img
                      className="mt-[-5px] h-8 w-auto"
                      src="/public/assets/images/PLogoWhite.png"
                      alt="Pursuit Logo"
                    />
                  </CustomLink>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <CustomLink
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium",
                        )}
                        aria-current={item.isActive ? "page" : undefined}
                      >
                        {item.name}
                      </CustomLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    {isLoggedIn ? (
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="#"
                          // Image of user goes here, have to link it to user's image from profile form
                          alt=""
                        />
                      </Menu.Button>
                    ) : (
                      <Menu.Button className="rounded border-none bg-none px-4 py-1 text-white">
                        Log In
                      </Menu.Button>
                    )}
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    {isLoggedIn ? (
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ isActive }) => (
                            <CustomLink
                              to="/profile"
                              className={classNames(
                                isActive ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300",
                              )}
                            >
                              Your Profile
                            </CustomLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ isActive }) => (
                            <CustomLink
                              to="/settings"
                              className={classNames(
                                isActive ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300",
                              )}
                            >
                              Settings
                            </CustomLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ isActive }) => (
                            <CustomLink
                              to="/development"
                              className={classNames(
                                isActive ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300",
                              )}
                            >
                              Development
                            </CustomLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ isActive }) => (
                            <CustomLink
                              to="/"
                              onClick={signOut}
                              className={classNames(
                                isActive ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300",
                              )}
                            >
                              Sign out
                            </CustomLink>
                            // Make Signout toggle between Login / Signout
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    ) : (
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ isActive }) => (
                            <CustomLink
                              to="/login"
                              className={classNames(
                                isActive ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300",
                              )}
                            >
                              Sign In
                            </CustomLink>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    )}
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  to={item.to}
                  className={classNames(
                    item.isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                  aria-current={item.isActive ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const CustomLink = forwardRef(({ to, children, ...props }, ref) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={`${isActive ? "active" : ""} nav-links list-none`} ref={ref}>
      <Link className="" to={to} {...props}>
        {children}
      </Link>
    </li>
  );
});
CustomLink.displayName = "CustomLink"; // Add displayName property

CustomLink.propTypes = {
  to: PropTypes.string.isRequired, // Ensure 'to' prop is a required string
  children: PropTypes.node.isRequired, // Ensure 'children' prop is a required node
};
