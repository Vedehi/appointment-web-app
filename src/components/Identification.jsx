let Identification = () =>
    {
        return(
            <div>
                <h2>Identification and Verification</h2>
    
            <div className="mb-3">
        <select className="form-select" required aria-label="select example">
          <option value="">Identification Document</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div className="invalid-feedback">Example invalid select feedback</div>
      </div>
    
    <div className="mb-3">
      <label for="formGroupExampleInput" className="form-label">Identification Number</label>
      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Ex:64875"></input>
    </div>
    
    
    
      <div className="mb-3">
      <label for="formGroupExampleInput" className="form-label">Scanned Copy of Identification Document</label>
        <input type="file" className="form-control" aria-label="file example" required></input>
        <div className="invalid-feedback">Example invalid form file feedback</div>
      </div>
    
    
    
            </div>
        )
    }
    export default Identification;