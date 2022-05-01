import React from "react";
import '../App.css';


function InputTimeDate({ placeholder, onChange, }) {
    return (
        <div className="input__time-date">
            <input type="text"
                onChange={onChange}
                name=""
                placeholder={placeholder} />
        </div>
    );
}


export default InputTimeDate;