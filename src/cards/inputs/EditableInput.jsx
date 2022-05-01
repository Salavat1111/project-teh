import React from "react";

function EditableInput({label, onChange, value}) {
    return <div className="block__setting-input">
        <p>{label}</p>
        <input onChange={onChange} value={value} />
    </div>
}
export default EditableInput;