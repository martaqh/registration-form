import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import Message from "../../Message/Message";
import PageTitle from "../../PageTitle/PageTitle";
import { getEmail, getFirstName } from "../../../redux/userDataRedux";
import { useSelector } from "react-redux";

const Success = props => {

    const firstName = useSelector(state => getFirstName(state));
    const email = useSelector(state => getEmail(state));
    console.log(firstName);
    console.log(email)

    return (
        <main>
            <PageTitle type="success">Good job {firstName}!</PageTitle>
            <Message userEmail={email} />
            <ButtonPrimary type="single" href="/">Go to homepage</ButtonPrimary>
        </main>
        
    )
}

export default Success;