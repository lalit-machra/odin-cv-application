import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { default as GeneralInfo } from './components/generalInfo'
import { default as EducationExp } from './components/educationExp'
import { default as PracticalExp } from './components/practicalExp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <GeneralInfo /> */}
    {/* <EducationExp /> */}
    <PracticalExp />
  </StrictMode>
)