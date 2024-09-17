import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import "./login-style.css"

const LoginComponent = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const initialValues = auth.user;//{ username: "", email: "", password: "" };
    const [formValues, setFormvalues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormvalues({ ...formValues, [name]: value });
        
    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            auth.logIn(formValues);
            navigate("/home");
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        }
        else if (values.password.length > 10) {
            errors.password = "Password cannot exceeds more than 10 characters";
        }
        return errors;
    }
    return (
        <div className='box'>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Login</h1>
                </div>
                <div>
                    <input type="text" name="username"
                        placeholder='Username' value={formValues.username}
                        onChange={handleChange} />
                </div>
                <p>{formErrors.username}</p>
                <div>
                    <input type="text" name="email"
                        placeholder='email' value={formValues.email}
                        onChange={handleChange} />
                </div>
                <p>{formErrors.email}</p>
                <div>
                    <input type="password" name="password"
                        placeholder='password' value={formValues.password}
                        onChange={handleChange} />
                </div>
                <p>{formErrors.password}</p>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>

    )


}
export default LoginComponent;