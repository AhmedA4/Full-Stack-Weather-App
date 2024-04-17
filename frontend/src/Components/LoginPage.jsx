import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import backgroundImg from '../../public/assets/app-background/background-img-2.jpeg';
import SignInForm from "./SignInForm.jsx";
import SignUpForm from "./SignUpForm.jsx";

const LoginPage = ({ setCurrentUser }) => {
    return (
        <>
            <div className="d-flex flex-column justify-content-between align align-items-center vh-100" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
                <Navbar withoutSearchBar={true} />
                    <div className="d-flex row justify-content-between">
                        <SignInForm setCurrentUser={setCurrentUser} />
                        <SignUpForm />
                    </div>
                <Footer />
            </div>
        </>
    )
}

export default LoginPage;