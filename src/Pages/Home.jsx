import { useAuth } from "../context/AuthContext";
export default function Home() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-white">Home</h1>;
      {user && <p className="text-white">User: {user.email}</p>}
    </div>
  );
}
