import { useAuth } from "../context/AuthContext";
export default function Home() {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1 className="text-white">Home</h1>;
      {currentUser && <p className="text-white">User: {currentUser.email}</p>}
    </div>
  );
}
