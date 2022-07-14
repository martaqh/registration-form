import PageTitle from '../../common/PageTitle/PageTitle';
import PageSubtitle from "../../common/PageSubtitle/PageSubtitle";
import FormCard from "../../views/FormCard/FormCard";
import InputField from '../../common/InputField/InputField';
import ValidationMessage from '../../common/ValidationMessage/ValidationMessage';
import ButtonsSection from '../../common/ButtonsSection/ButtonsSection';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserData } from '../../../redux/userDataRedux';
import { useNavigate } from 'react-router';
import { useEffect } from "react";


const EmailAndPassword = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [noEmail, setNoEmail] = useState(false);
    const [noPassword, setNoPassword] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLoginData = {
        email: email,
        password: password,
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (email.length <=0) {
            setNoEmail(true);
        } else if (password.length <=0) {
            setNoPassword(true);
        } else {
            dispatch(addUserData(userLoginData));
            setEmail('');
            setPassword('');
            navigate("/registration-final");
        } 
    }

    return (
        <main>
            <PageTitle>Ahoy you!</PageTitle>
            <PageSubtitle>Care to register?</PageSubtitle>
            <FormCard>
                <form onSubmit={handleSubmit}>
                    <InputField
                        label="E-mail"
                        type="email"
                        placeholder="Something ending with monterail.com"
                        className={noEmail ? "notValid" : null}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <InputField
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        className={noPassword ? "notValid" : null}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <ValidationMessage
                        className={password.length <= 0 ? null : (password.length >= 8 ? "valid" : "notValid")}
                    >
                        At least 8 characters
                    </ValidationMessage>
                    <ValidationMessage
                        className={/[a-zA-Z]/.test(password) ? "valid" : null}
                    >
                        At least one letter
                    </ValidationMessage>
                    <ValidationMessage
                        className={/\(|\)|\d{1}/.test(password) ? "valid" : null}
                    >
                        At least one digit
                    </ValidationMessage>
                    <ButtonsSection href="/registration-final" onClick={handleSubmit}/>
                </form>   
            </FormCard>
        </main>
    )
}

export default EmailAndPassword;