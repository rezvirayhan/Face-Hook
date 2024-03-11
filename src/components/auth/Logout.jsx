import { useNavigate } from "react-router-dom";
import LogoutImages from "../../assets/icons/logout.svg";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");

    }

    return (
        <button className="icon-btn" onClick={handleLogout}>
            <img src={LogoutImages} alt="Logout" />
        </button>
    );
};

export default Logout;