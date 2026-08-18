import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import GeneralInfo from './components/GeneralInfo/generalInfo.jsx'
import PracticalExperience from './components/PracticalExperience/practicalExp.jsx'
import Preview from './components/preview.jsx'
import './App.css'
import SingleEntry from './components/singleEntry.jsx'
import Heading from './components/heading.jsx'
import Education from './components/Education/education.jsx'

function App() {
  const [previewEnabled, setPreviewEnabled] = useState(false);

  const toggleSetPreviewable = function() {
    setPreviewEnabled(!previewEnabled);
  }

  return (
    <>
    <GeneralInfo previewEnabled={previewEnabled}/>
    <SingleEntry previewEnabled={previewEnabled} fieldName="Name" />
    <div className="body">
      <Heading name="Summary Statement" />
      <SingleEntry previewEnabled={previewEnabled} fieldName="" />
      <Heading name="Practical Experience" />
      <PracticalExperience previewEnabled={previewEnabled} />
      <Heading name="Education" />
      <Education previewEnabled={previewEnabled} />
      <Preview toggleEdit={toggleSetPreviewable} />
    </div>
    </>
  )
}

export default App
