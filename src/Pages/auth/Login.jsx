import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../components/UI/Alert";
import { useAuth } from "../../context/AuthContext";
import { useUsers} from "../../context/UsersContext";

export default function Login() {
  const { login } = useAuth();
  const { userData,setLoggedinUserData} = useUsers({});
  



  const [currentUser, setCurrentUser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertProps, setAlertProps] = useState({
    msg: "",
    isSuccess: null,
  });
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await login(email, password);
      setLoggedinUserData(email)
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      setAlertProps({ msg: error.message, isSuccess: false });
      toggleAlert();
    } finally {
      setIsLoading(false);
    }
  }
  function toggleAlert() {
    setShowAlert(!showAlert);
  }

  return (
    <div className="lg:px-8v flex min-h-full flex-col justify-center px-6 py-12">
      <div className="bg-zinc-50 p-4 sm:mx-auto sm:w-full sm:max-w-sm">
        {showAlert && (
          <Alert
            msg={alertProps.msg}
            isSuccess={alertProps.isSuccess}
            onToggleAlert={toggleAlert}
          />
        )}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  value={email || ""}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  value={password || ""}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=" block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? <span>loading...</span> : <span> Sign in</span>}
              </button>
            </div>
            <div className="text-center text-sm">
              <Link
                to="/forgot-password"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div>
          </form>

          <p className="mt-10  text-center text-sm text-gray-500">
            Not a member?
            <Link
              to="/signup"
              className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
