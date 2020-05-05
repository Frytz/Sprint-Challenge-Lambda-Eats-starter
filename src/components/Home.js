import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Pizza</h1>
            <h2>Create your own Pizza</h2>

            <h3>Click here to order</h3>

            <Link className="formLink" to={"/form"}>
                ORDER
      </Link>
        </div>
    );
};

export default Home;