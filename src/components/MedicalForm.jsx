
let MedicalForm = () =>
{
    return (
        <div className="med-info">
            <h2>Medical Information</h2>

            <label for="exampleFormControlInput1" className="form-label">Primary care physician</label>
            <select className="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">Dr.Strange</option>
  <option value="2">Dr.Unknown</option>
  <option value="3">Dr.Juli</option>
</select>

<form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label , editss">Insurance Provider</label>
    <input placeholder="ex:Apollo" className="form-control" id="inputEmail4"></input>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Insurance Policy Number</label>
    <input placeholder="ex:"SDFGI326542739 className="form-control" id="inputPassword4"></input>
  </div>
  </form>

  <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Allergies(if any)</label>
    <input placeholder="ex:peanuts,etc" className="form-control" id="inputEmail4"></input>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Current Medications</label>
    <input placeholder="Mention names of the medicines" className="form-control" id="inputPassword4"></input>
  </div>
  </form>

  <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Family Medical History(if Relevant)</label>
    <input placeholder="" className="form-control" id="inputEmail4"></input>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Past medical history</label>
    <input  className="form-control" id="inputPassword4"></input>
  </div>
  </form>

        </div>
    )
}
export default MedicalForm;