import PageTitle from "../../common/PageTitle/PageTitle";
import PageSubtitle from "../../common/PageSubtitle/PageSubtitle";
import FormCard from "../../views/FormCard/FormCard";
import InputField from "../../common/InputField/InputField";
import ValidationMessage from "../../common/ValidationMessage/ValidationMessage";
import ButtonsSection from '../../common/ButtonsSection/ButtonsSection';
import CheckboxAccept from "../../common/CheckboxAccept/CheckboxAccept";
import Container from "../../common/Container/Container";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserData } from '../../../redux/userDataRedux';
import { useNavigate } from 'react-router';
import { useEffect } from "react";

const PersonalData = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState();
    const [noFisrtName, setNoFisrName] = useState(false);
    const [noLastName, setNoLastName] = useState(false);
    const [noBirthDate, setNoBirthDate] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(birthDate)

    const userPersonalData = {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        privacyPolicyAccepted: isAccepted,
    }

    const dateOfBirth = new Date(birthDate);
    const monthDifference = Date.now() - dateOfBirth.getTime();
    const ageInDateFormat = new Date(monthDifference); 
    const year = ageInDateFormat.getUTCFullYear();
    const age = Math.abs(year - 1970);

    console.log('age:', age)

    const handleSubmit = e => {
        e.preventDefault();
        if (firstName.length <=0) {
            setNoFisrName(true);
            console.log(noFisrtName);
        } else if (lastName.length <=0) {
            setNoLastName(true);
            console.log(noLastName);
        } else if (birthDate === undefined) {
            setNoBirthDate(true);
            console.log(noBirthDate);
        } else if (isAccepted === false) {
            alert("Please accept our Privacy Policy")
        } else {

            dispatch(addUserData(userPersonalData));
            setFirstName('');
            setLastName('');
            setBirthDate();
            navigate("/success");
        }
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
                        className={noFisrtName ? "notValid" : null}
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <InputField
                        label="Last name"
                        type="text"
                        placeholder="e.g. Walton"
                        className={noLastName ? "notValid" : null}
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                    <InputField
                        label="Date of birth"
                        type="date"
                        placeholder="DD/MM/YYYY"
                        className={noBirthDate ? "notValid" : null}
                        value={birthDate}
                        onChange={e => setBirthDate(e.target.value)}
                    ></InputField>
                    <ValidationMessage
                        className={age >= 18 ? "valid" : null}
                    >
                        You should be minimum 18 years old
                    </ValidationMessage>
                    <CheckboxAccept onChange={e => setIsAccepted(e.target.value)}></CheckboxAccept>
                    <ButtonsSection href="/success" onClick={handleSubmit}></ButtonsSection>
                </form>
            </FormCard> 
        </main>
    )
}

export default PersonalData;