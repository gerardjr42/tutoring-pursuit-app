import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Alert from "../../components/UI/Alert";
export default function ForgotPassword() {
  const { resetPassword } = useAuth();

  const [email, setEmail] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertProps, setAlertProps] = useState({
    msg: "",
    isSuccess: null,
  });
  function toggleAlert() {
    setShowAlert(!showAlert);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await resetPassword(email);
      setAlertProps({
        msg: `Email sent successfully to ${email}`,
        isSuccess: true,
      });
      toggleAlert();
      setEmail("");
    } catch (error) {
      setAlertProps({ msg: error.message, isSuccess: false });
      toggleAlert();
    } finally {
      setIsLoading(false);
    }
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
          Password Recovery
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
              <button
                disabled={isLoading}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? (
                  <span>Loading...</span>
                ) : (
                  <span>Reset Password</span>
                )}
              </button>
            </div>
          </form>

          <p className="mt-10  text-center text-sm text-gray-500">
            Already have an account?
            <Link
              to="/login"
              className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
