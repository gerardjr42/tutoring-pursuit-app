import { useEffect } from "react";

export default function Alert({ msg, isSuccess, onToggleAlert }) {
  console.log(msg);

  useEffect(() => {
    const timer = setTimeout(() => {
      onToggleAlert();
    }, 4500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const colors = isSuccess
    ? "border-green-400 bg-green-100 text-green-700"
    : " border-red-400 bg-red-100 text-red-700";
  return (
    <div
      className={`relative rounded border  px-4 py-3 ${colors}`}
      role="alert"
    >
      <span className="block sm:inline">{msg}</span>
      <span
        onClick={onToggleAlert}
        className="absolute bottom-0 right-0 top-0 cursor-pointer px-4 py-3"
      >
        X
      </span>
    </div>
  );
}
