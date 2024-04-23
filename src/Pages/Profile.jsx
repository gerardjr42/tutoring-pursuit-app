import { useAuth } from "../context/AuthContext";
import { useUsers } from "../context/UsersContext";
export default function Profile() {
  const { user, } = useAuth();
  const { updateProfile, } = useUsers();// updateProfile function ready to use, just pass the new user obj.

  function updateUserProfile() {
   
}

  return (
    <div>
      <h1 className="text-white">Profile</h1>;
    <button onClick={updateUserProfile} className="bg-white">Update Profile</button>
      {user && <p className="text-white">User: {user.email}</p>}
    </div>
  );
}
