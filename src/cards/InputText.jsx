import React, {useState} from "react";
import '../App.css';


function InputText({placeholder, onChange}) {
    const [value, setValue] = useState("");
    return (
        <div className="display__input">
            <input onChange={onChange}
                   type="text" name="" placeholder={placeholder} />
        </div>
    );
}


export default InputText;