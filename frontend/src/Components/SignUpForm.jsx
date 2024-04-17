import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerService } from "../utils/services";

const SignUpForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        try {
            const { user, message } = await registerService(username, password);
            console.log(message, user);
        } catch (err) {
            console.log(err);
        }
        alert('Registration successful! Log in to access your account')
    };

    return (
        <div className="d-flex row col-6">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmitRegister}>
                <label htmlFor="username" className="form-label">Username</label>
                <input
                    id="sign-up-username"
                    type="text"
                    className="form-control mb-3"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    id="sign-up-password"
                    type="password"
                    className="form-control mb-2"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
