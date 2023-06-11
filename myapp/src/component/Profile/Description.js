import { useContext } from "react";
import User from "../../context/UserContext";

function Name() {
    const { user, setUser } = useContext(User);

    return (
        <>
            Description.js: {user}<br></br>
            <button onClick={() => setUser("New User")}>Set User</button>
        </>
    );
}

export default Name;
