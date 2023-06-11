import { useMemo, useState } from "react";
import User from "../context/UserContext";
import Name from "./Profile/Name";

function Profile() {
  const [user, setUser] = useState("Prashant");
  const [age, setAge] = useState(27);
  const value = useMemo(() => ({ user, setUser, age, setAge }));
  return (
    <>
      <User.Provider value={value}>
        Profile.js: {user} <br></br>
        <Name></Name>
      </User.Provider>
    </>
  );
}

export default Profile;
