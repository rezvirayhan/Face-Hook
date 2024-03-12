import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
    const { auth } = useAuth()
    console.log(auth);
    return (
        <div>
            <p>Home Pages</p>
            <Link to='/me'>GO To Profile Pges....</Link>
        </div>
    );
};

export default Home;