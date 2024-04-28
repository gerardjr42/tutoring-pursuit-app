import { useAuth } from "../context/AuthContext";
import { useUsers } from "../context/UsersContext";
export default function Profile() {
  const { currentUser, } = useAuth();
  const { userData, updateProfile, } = useUsers();
/*
currentUser: provides authnentication info about current user
userData: provides data info about current user
updateProfile: use this function to "create new profile" and update profile. Pass collected info in an obj as param.

*/
  

  return (
    <div>
      <h1 className="text-white">Profile</h1>;
      <h1 className="text-white">has profile:{ userData.firstName}</h1>
      {currentUser && <p className="text-white">User: {currentUser.email}</p>}
    </div>
  );
}
