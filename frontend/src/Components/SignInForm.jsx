import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../utils/services";

const SignInForm = ({ setCurrentUser }) => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
        const { user, token, message } = await loginService(username, password);
        console.log(message, user, token);

        localStorage.setItem('token', token);
        localStorage.setItem('favourites', JSON.stringify(user.favourites));
        localStorage.setItem('user', JSON.stringify(user));

        setCurrentUser(user);

        navigate('/home');
    } catch (err) {
        console.log(err);
        alert("Invalid login details!");
    }
};


    return (
        <>
            <div className="d-flex row col-6">
                <h2 className="">Log In</h2>
                <form onSubmit={handleSubmitLogin}>
                    <label htmlFor="username" className="form-label">Username</label>
                    <input 
                        id="log-in-username"
                        type="text"
                        className="form-control mb-3" 
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        id="sign-in-password" 
                        type="password" 
                        className="form-control mb-2" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary mt-3">Log In</button>
                </form>
            </div>
        </>
    )
}

export default SignInForm