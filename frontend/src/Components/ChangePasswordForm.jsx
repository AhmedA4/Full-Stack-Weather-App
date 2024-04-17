import { useState } from "react";
import { changePasswordService } from "../utils/services";

const ChangePasswordForm = () => {
    const [username, setUsername] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmNewPassword) {
            console.log("New password doesn't match");
            alert("New password doesn't match")
            return;
        }

        try {
            const response = await changePasswordService(username, oldPassword, newPassword);
            console.log("Password changed successfully", response);
            alert("Password changed successfully");
        } catch (err) {
            console.log("Error changing password:", err);
        }
    };

    return (
        <>
            <div className="d-flex row">
                <h2 className="">Change Password</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username" className="form-label">Username</label>
                    <input 
                        id="change-password-username"
                        type="text"
                        className="form-control mb-3" 
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="old-password" className="form-label">Old Password</label>
                    <input 
                        id="change-password-old-password"
                        type="password" 
                        className="form-control mb-3" 
                        placeholder="Old Password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <label htmlFor="new-password" className="form-label">New Password</label>
                    <input 
                        id="change-password-new-password"
                        type="password" 
                        className="form-control mb-3" 
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <label htmlFor="confirm-new-password" className="form-label">Confirm New Password</label>
                    <input 
                        id="change-password-confirm-new-password"
                        type="password" 
                        className="form-control mb-3" 
                        placeholder="Confirm New Password"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary mt-3">Change Password</button>
                </form>
            </div>
        </>
    );
}

export default ChangePasswordForm;