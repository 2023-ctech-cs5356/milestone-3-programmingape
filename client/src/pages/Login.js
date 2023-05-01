

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:5000/login",{
            method: "POST",
            body: JSON.stringify({email: e.target.email.value, password: e.target.password.value}),
        }).then((res) => {
            return res.json();
        })

    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h3 align="center">Login</h3>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                placeholder="Enter password"
                />
            </div>
            <br />
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
        </>
    );
};

export default Login;