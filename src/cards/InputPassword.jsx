import React from "react";
import '../App.css';


function InputPassword({handleFunc, inputKey}) {
    return (
        <div className="display__input">
            <input type="password" onChange={(e)=>handleFunc(inputKey, e.target.value)} />
        </div>
    );
}
export default InputPassword;