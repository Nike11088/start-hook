import React from "react";
import CardWrapper from "../../common/Card";

const WithFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth") === "token";

    const handleLogin = () => {
        console.log("handleLogin");
        localStorage.setItem("auth", "token");
    };
    const handleLogout = () => {
        console.log("handleLogout");
        localStorage.removeItem("auth");
    };

    return (
        <CardWrapper>
            <Component
                onLogin={handleLogin}
                onLogOut={handleLogout}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default WithFunctions;
