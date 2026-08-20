import { useState } from "react";

function Education( {previewEnabled} ) {
    const [education, setEducation] = useState([]);

    const displayButtons = (previewEnabled === true ? {display: "none"} : {});

    function displayEducation(educ) {
        if (educ.isEditable) {
            return <div key={educ.key}>
                <label htmlFor="title" id={"educTitle-" + educ.key}>Name of qualification: </label>
                <input type="text" name="title" id={"educTitleInput-" + educ.key} defaultValue={educ.title} />
                <label htmlFor="dates" id={"educDates-" + educ.key}>Date and institute obtained: </label>
                <input type="text" name="dates" id={"educDatesInput-" + educ.key} defaultValue={educ.dates} />
                <button style={displayButtons} onClick={() => {updateEducation(educ.key)}}>Submit</button>
                </div>;
        }
        else {
            return <><div className="educationSection" key={educ.key}>
                <div className="educationTitle">{educ.title}</div>
                <div className="educationDates">{educ.dates}</div>
                </div>
                <button style={displayButtons} onClick={() => {handleAllowEdit(educ.key)}}>Edit</button>
                </>;
        }
    }

    function updateEducation(key) {
        const title = document.querySelector("#educTitleInput-" + key).value;
        const dates = document.querySelector("#educDatesInput-" + key).value;
        setEducation(education.map((educ) => educ.key === key ? {key: key, isEditable: false, title: title, dates: dates} : educ));
    }

    function handleAllowEdit(key) {
        setEducation(education.map((educ) => educ.key === key ? {...educ, isEditable: true} : educ));
    }

    function addEducation() {
        const newItem = {key: crypto.randomUUID(), isEditable: true};
        setEducation([...education, newItem]);
    }

    if (education.length === 0) {
        return <>
        <button style={displayButtons} onClick={addEducation}>Add Educational Qualification</button>
        <div>No qualifications added yet</div>
        </>
    }

    return <>
    <button style={displayButtons} onClick={addEducation}>Add Educational Qualification</button>
    {education.map((educ) => displayEducation(educ))}
    </>;
}

export default Education;