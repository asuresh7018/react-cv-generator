import SingleEntry from "../singleEntry.jsx";

function GeneralInfo({previewEnabled}) {
    return <>
    <SingleEntry previewEnabled={previewEnabled} fieldName="Name" />
    <SingleEntry previewEnabled={previewEnabled} fieldName="Email" />
    <SingleEntry previewEnabled={previewEnabled} fieldName="Phone" />
    </>;
}

export default GeneralInfo;