import SingleEntry from "../singleEntry.jsx";

function GeneralInfo({previewEnabled}) {
    return <>
    <div className="header">
    <SingleEntry previewEnabled={previewEnabled} fieldName="Email" />
    <SingleEntry previewEnabled={previewEnabled} fieldName="Phone" />
    </div>
    </>;
}

export default GeneralInfo;