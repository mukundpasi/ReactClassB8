import { useContext } from "react";
import User from "../../context/UserContext";
import Description from "./Description";

function Name() {
    const { user } = useContext(User);

    return (
        <>
            Name.js: {user}<br></br>
            <Description></Description>
        </>
    );
}

export default Name;
