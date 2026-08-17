import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import GeneralInfo from './components/GeneralInfo/generalInfo.jsx'
import PracticalExperience from './components/PracticalExperience/practicalExp.jsx'
import Preview from './components/preview.jsx'
import './App.css'

function App() {
  const [previewEnabled, setPreviewEnabled] = useState(false);

  const toggleSetPreviewable = function() {
    setPreviewEnabled(!previewEnabled);
  }

  return (
    <>
    <GeneralInfo previewEnabled={previewEnabled}/>
    <PracticalExperience previewEnabled={previewEnabled} />
    <Preview toggleEdit={toggleSetPreviewable} />
    </>
  )
}

export default App
