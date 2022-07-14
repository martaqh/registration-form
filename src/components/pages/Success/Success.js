import ButtonPrimary from "../../common/ButtonPrimary/ButtonPrimary";
import Message from "../../views/Message/Message";
import PageTitle from "../../common/PageTitle/PageTitle";
import { getEmail, getFirstName } from "../../../redux/userDataRedux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Success = props => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

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