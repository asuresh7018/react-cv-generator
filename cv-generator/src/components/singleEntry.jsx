import { useState } from "react";

function SingleEntry( {previewEnabled, fieldName, hideFieldNameOnPreview} ) {
    const [name, setName] = useState({text: "", isEditable: true});
    const displayButtons = (previewEnabled === true ? {display: "none"} : {});

    const handleUpdateName = function() {
        const formValue = document.querySelector("#FieldInput-"+fieldName).value;
        const newName = {...name, text: formValue, isEditable: false};
        setName(newName);
    }

    const allowEdit = function() {
        const newName = {...name, isEditable: true};
        setName(newName);
    }

    if (name.isEditable) {
    return <div id={"div-" + fieldName}>
        <label htmlFor={fieldName} id={"FieldName-"+fieldName}>{fieldName === "" ? "" : fieldName + ": "}</label>
        <textarea type="text" name={fieldName} id={"FieldInput-"+fieldName} defaultValue={name.text} />
        <button id={"submit"+fieldName} style={displayButtons} onClick={handleUpdateName}>Submit</button>
    </div>;
    }
    else {
        return <div className="nameDiv">
            {hideFieldNameOnPreview ? "": <div id={"FieldName-"+fieldName}>{fieldName === "" ? "" : fieldName + ": "}</div>}
            <div id={"FieldValue"+fieldName}>{name.text}</div>
            <button id="edit" style={displayButtons} onClick={allowEdit}>Edit</button>
        </div>;
    }
}

export default SingleEntry;