import SingleEntry from "../singleEntry.jsx";

function GeneralInfo({previewEnabled}) {
    return <>
    <div className="header">
    <div className="headerSection"><SingleEntry previewEnabled={previewEnabled} fieldName="Email" /></div>
    <div className="headerSection"><SingleEntry previewEnabled={previewEnabled} fieldName="Phone" /></div>
    </div>
    </>;
}

export default GeneralInfo;