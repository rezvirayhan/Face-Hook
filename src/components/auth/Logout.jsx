import { useNavigate } from "react-router-dom";
import LogoutImages from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/useAuth";

const Logout = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth()
    const handleLogout = () => {
        setAuth({})
        navigate("/login");

    }

    return (
        <button className="icon-btn" onClick={handleLogout}>
            <img src={LogoutImages} alt="Logout" />
        </button>
    );
};

export default Logout;