import React from "react";
import EditableInput from "./inputs/EditableInput";

function TextInput({paramName, placeHolder, img, editable, setValue, visible}) {
    return visible ?
        editable ?
            <EditableInput label={paramName} onChange={setValue} value={placeHolder}/> :
            <div className="order__content">
                <div className="container__fasource">
                    <div className="svg__content">
                        {img}
                    </div>
                    <div className="">
                        <p className="title__menu">{paramName}</p>
                        <p className="title__text">{placeHolder}</p>
                    </div>
                </div>
            </div> :
        <div></div>
        ;
}

export default TextInput;