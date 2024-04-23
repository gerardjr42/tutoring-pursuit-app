import { useAuth } from "../context/AuthContext";
import { useUsers } from "../context/UsersContext";
export default function Profile() {
  const { user, } = useAuth();
  const { createUser, } = useUsers();// createUser function ready to use, just pass the new user obj.



  return (
    <div>
      <h1 className="text-white">Home</h1>;
      {user && <p className="text-white">User: {user.email}</p>}
    </div>
  );
}
