import { useState } from "react";

function PracticalExperience() {
    const experienceArray = [];
    const [experience, setExperience] = useState(experienceArray);

    function displayExperience(exp) {
        if (exp.isEditable) {
            return <div key={exp.key}>
                <label htmlFor="title" id={"expTitle-" + exp.key}>Position Name: </label>
                <input type="text" name="title" id={"expTitleInput-" + exp.key} defaultValue={exp.title} />
                <label htmlFor="dates" id={"expDates-" + exp.key}>Position Dates: </label>
                <input type="text" name="dates" id={"expDatesInput-" + exp.key} defaultValue={exp.dates} />
                <label htmlFor="description" id={"expText-" + exp.key}>Description: </label>
                <input type="text" name="description" id={"expTextInput-" + exp.key} defaultValue={exp.text} />
                <button onClick={() => {updateExperience(exp.key)}}>Submit</button>
                </div>;
        }
        else {
            return <div key={exp.key}>
                <div className="experienceTitle"><h3>{exp.title}</h3></div>
                <div className="experienceDates">{exp.dates}</div>
                <div className="experienceText">{exp.text}</div>
                <button onClick={() => {handleAllowEdit(exp.key)}}>Edit</button>
                </div>;
        }
    }

    function updateExperience(key) {
        const title = document.querySelector("#expTitleInput-" + key).value;
        const dates = document.querySelector("#expDatesInput-" + key).value;
        const text = document.querySelector("#expTextInput-" + key).value;
        setExperience(experience.map((exp) => exp.key === key ? {key: key, isEditable: false, title: title, dates: dates, text: text} : exp));
    }

    function handleAllowEdit(key) {
        setExperience(experience.map((exp) => exp.key === key ? {...exp, isEditable: true} : exp));
    }

    function addExperience() {
        const newItem = {key: crypto.randomUUID(), isEditable: true};
        setExperience([...experience, newItem]);
        console.log(experience);
    }

    if (experience.length === 0) {
        return <>
        <button onClick={addExperience}>Add Work Experience</button>
        No experience added yet
        </>
    }

    return <>
    <button onClick={addExperience}>Add Work Experience</button>
    {experience.map((exp) => displayExperience(exp))}
    </>;
}

export default PracticalExperience;