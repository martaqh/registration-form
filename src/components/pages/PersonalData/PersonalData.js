import PageTitle from "../../PageTitle/PageTitle";
import PageSubtitle from "../../PageSubtitle/PageSubtitle";
import FormCard from "../../FormCard/FormCard";
import InputField from "../../InputField/InputField";
import ValidationMessage from "../../ValidationMessage/ValidationMessage";
import ButtonsSection from "../../ButtonsSection/ButtonsSection";
//import Checkbox from "../../Checkbox/Checkbox";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserData } from '../../../redux/userDataRedux';
import { useNavigate } from 'react-router';
import PrivacyPolicyCheck from "../../PrivacyPolicyCheck/PrivacyPolicyCheck";

const RegistrationPersonalData = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState()

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(birthDate)

    const userPersonalData = {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
    }

    const dateOfBirth = new Date(birthDate);
    const monthDifference = Date.now() - dateOfBirth.getTime();
    const ageInDateFormat = new Date(monthDifference); 
    const year = ageInDateFormat.getUTCFullYear();
    const age = Math.abs(year - 1970);

    console.log('age:', age)

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addUserData(userPersonalData));
        setFirstName('');
        setLastName('');
        navigate("/success");
        
    }
    return (
        <main>
            <PageTitle>Great!</PageTitle>
            <PageSubtitle>Now your name</PageSubtitle>
            <FormCard>
                <form onSubmit={handleSubmit}>
                    <InputField
                        label="First name"
                        type="text"
                        placeholder="e.g. Jessica"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <InputField
                        label="Last name"
                        type="text"
                        placeholder="e.g. Walton"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                    <InputField
                        label="Date of birth"
                        type="date"
                        placeholder="DD/MM/YYYY"
                        value={birthDate}
                        onChange={e => setBirthDate(e.target.value)}
                    ></InputField>
                    <ValidationMessage
                        className={age >= 18 ? "valid" : null}
                    >
                        You should be minimum 18 years old
                    </ValidationMessage>
                    <PrivacyPolicyCheck></PrivacyPolicyCheck>
                    <ButtonsSection href="/success" onClick={handleSubmit}></ButtonsSection>
                </form>
            </FormCard>
            
        </main>
    )
}

export default RegistrationPersonalData;