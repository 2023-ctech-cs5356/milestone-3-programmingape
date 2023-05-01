import { useEffect, useState } from 'react';

const LogoutPage = () => {
    
    const logoutUser = async () => {
        const response = await fetch("http://127.0.0.1:5000/logout");
        const res = await response.json();
        console.log(res);
    };
    useEffect(() => {
        logoutUser();
    }, []);

    return <div>Logging out</div>;
};

export default LogoutPage;
