import { Link, useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    function navigateHandler() {
        navigate("products");
    }

    return (
        <>
            <h1>Homepage Welcome</h1>
            <p>
                Go to <Link to="products">Products</Link>.
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    )
}

export default HomePage;