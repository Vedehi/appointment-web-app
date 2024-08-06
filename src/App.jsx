import { useState } from 'react'
import './App.css'

import Head from './components/Head'
import PersonalForm from './components/PersonalForm'
import MedicalForm from './components/MedicalForm'
import Identification from './components/Identification'
import SubmitOne from './components/SubmitOne'
// import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Head></Head>
<img src="src/hcover.jpg" ></img>
    <h2>Personal Information</h2>


        <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label ">Full Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Full Name"></input>
</div>


    <PersonalForm></PersonalForm>
    <MedicalForm></MedicalForm>
    <Identification></Identification>
{/* consent  */}
    <div>
            <h2>Consent and Privacy</h2>
            <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
      <label className="form-check-label" for="invalidCheck2">
        I consent to recieve treatement for my health condition.
      </label>
    </div>
  </div>
  
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
      <label className="form-check-label" for="invalidCheck2">
      I consent to the use and disclosure of my health information for treatment purposes.

      </label>
    </div>
  </div>

  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
      <label className="form-check-label" for="invalidCheck2">
      l acknowledge that | have reviewed and agree to the privacy policy.
      </label>
    </div>
  </div>

  <div className="d-grid gap-2">
    <nav>
  <a href="/SubmitOne"><button className="btn btn-primary" type="button">Submit and continue</button></a>
  </nav>
  
</div>
        </div>
      
    </>
  )
}

export default App
