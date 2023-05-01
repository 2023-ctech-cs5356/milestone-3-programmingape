const SignupPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.firstName.value);
        fetch("http://127.0.0.1:5000/sign-up",{
            method: "POST",
            body: JSON.stringify({
                email: e.target.email.value, 
                firstName: e.target.firstName.value, 
                password1: e.target.password1.value,
                password2: e.target.password2.value,
            }),
        }).then((res) => {
            return res.json();
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h3 align="center">Sign Up</h3>
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
                    <label for="firstName">First Name</label>
                    <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter first name"
                    />
                </div>
                <div class="form-group">
                    <label for="password1">Password</label>
                    <input
                    type="password"
                    class="form-control"
                    id="password1"
                    name="password1"
                    placeholder="Enter password"
                    />
                </div>
                <div class="form-group">
                    <label for="password2">Password (Confirm)</label>
                    <input
                    type="password"
                    class="form-control"
                    id="password2"
                    name="password2"
                    placeholder="Confirm password"
                    />
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default SignupPage;