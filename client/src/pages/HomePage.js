import React, { useState, useEffect } from "react";

const MainPage = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const logoutUser = async () => {
      const response = await fetch("http://127.0.0.1:5000/logout", {
        method: "POST",
      });
      const res = await response.json();
      setIsSignedIn(res.is_authenticated);
      console.log(res);
    };

    useEffect(() => {
      const checkUser = async () => {
        // const response = await fetch("http://127.0.0.1:5000/is_authenticated");
        // const res = await response.json();
        // setIsSignedIn(res.is_authenticated);
        setIsSignedIn(true);
        console.log(isSignedIn);
      };
      checkUser();
    }, []);

    return (
        <div>
        <h1>Test</h1>
        <p>1234567890</p>
        <div className="button-span">
          {isSignedIn ? ( 
            <div>
              <button onClick={logoutUser}>loggout</button>
            </div>
          ): (
            <div>
              <div>
                <a className="button is-primary is-large" href="/login">Login</a>
              </div>
              <a className="button" href="/register">Register</a>
            </div>  
          )}
        </div>
      </div>
    );
};

export default MainPage;