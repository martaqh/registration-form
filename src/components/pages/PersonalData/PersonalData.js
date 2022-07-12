import PageTitle from "../../PageTitle/PageTitle";
import PageSubtitle from "../../PageSubtitle/PageSubtitle";
import FormCard from "../../FormCard/FormCard";
import InputField from "../../InputField/InputField";
import ValidationMessage from "../../ValidationMessage/ValidationMessage";
import ButtonsSection from "../../ButtonsSection/ButtonsSection";
import Checkbox from "../../Checkbox/Checkbox";

const RegistrationPersonalData = () => {
    return (
        <main>
            <PageTitle>Great!</PageTitle>
            <PageSubtitle>Now your name</PageSubtitle>
            <FormCard>
                <InputField label="First name" type="text" placeholder="e.g. Jessica"></InputField>
                <InputField label="Last name" type="text" placeholder="e.g. Walton"></InputField>
                <InputField label="Date of birth" type="date" placeholder="DD/MM/YYYY"></InputField>
                <ValidationMessage>You should be minimum 18 years old</ValidationMessage>
            
                <ButtonsSection href="/success"></ButtonsSection>
            </FormCard>
            
        </main>
    )
}

export default RegistrationPersonalData;