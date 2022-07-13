import PageTitle from '../../PageTitle/PageTitle';
import PageSubtitle from "../../PageSubtitle/PageSubtitle";
import FormCard from "../../FormCard/FormCard";
import InputField from '../../InputField/InputField';
import ValidationMessage from '../../ValidationMessage/ValidationMessage';
import ButtonsSection from '../../ButtonsSection/ButtonsSection';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserData } from '../../../redux/userDataRedux';
import { useNavigate } from 'react-router';


const EmailAndPassword = () => {

    
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLoginData = {
        email: email,
        password: password,
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addUserData(userLoginData));
        setEmail('');
        setPassword('');
        navigate("/registration-final");
        
    }
    console.log(email, password);
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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <InputField
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <ValidationMessage className="valid">At least 8 characters</ValidationMessage>
                    <ValidationMessage>At least one letter</ValidationMessage>
                    <ValidationMessage>At least one digit</ValidationMessage>
                    <ButtonsSection href="/registration-final" onClick={handleSubmit}/>
                </form>   
            </FormCard>
        </main>
    )
}

export default EmailAndPassword;