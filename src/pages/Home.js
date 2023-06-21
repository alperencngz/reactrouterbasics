import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <h1>Homepage Welcome</h1>
            <p>
                Go to <Link to="/products">Products</Link>.
            </p>
        </>
    )
}

export default HomePage;