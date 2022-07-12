import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import Message from "../../Message/Message";
import PageTitle from "../../PageTitle/PageTitle";

const Success = props => {
    return (
        <main>
            <PageTitle type="success">Good job {props.name}!</PageTitle>
            <Message />
            <ButtonPrimary type="single" href="/">Go to homepage</ButtonPrimary>
        </main>
        
    )
}

export default Success;