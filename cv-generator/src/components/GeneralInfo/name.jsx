import { useState } from "react";

function Name() {
    const [name, setName] = useState({text: "", isEditable: true});

    const handleUpdateName = function() {
        const formValue = document.querySelector("#nameFieldInput").value;
        const newName = {...name, text: formValue, isEditable: false};
        setName(newName);
    }

    const allowEdit = function() {
        const newName = {...name, isEditable: true};
        setName(newName);
    }

    if (name.isEditable) {
    return <div id="nameDiv">
        <label htmlFor="name" id="nameFieldName">Name: </label>
        <input type="text" name="name" id="nameFieldInput" defaultValue={name.text} />
        <button id="submitName" onClick={handleUpdateName}>Submit</button>
    </div>;
    }
    else {
        return <div id="nameDiv">
            <div id="nameFieldName">Name: </div>
            <div id="nameFieldValue">{name.text}</div>
            <button id="editName" onClick={allowEdit}>Edit</button>
        </div>;
    }
}

export default Name;