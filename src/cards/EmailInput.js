import {FaEnvelope} from "react-icons/fa";
import TextInput from "./TextInput";

function EmailInput(props) {
    return <TextInput {...props} img={<FaEnvelope/>}/>;
}

export default EmailInput;