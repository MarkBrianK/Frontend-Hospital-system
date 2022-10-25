import React from "react";

const Pharmacy = () => {
  return <div>Stock Issues Details


    <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip01" class="form-label">Patient name</label>
    <input type="text" class="form-control" id="validationTooltip01" value="Mark" required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip02" class="form-label">Inventory Item</label>
    <input type="text" class="form-control" id="validationTooltip02" value="Otto" required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  
  
  <div class="col-3">
    <button class="btn btn-primary" type="submit">Add item</button>
  </div>
  </div>
  {/* <div class="col-md-4 position-relative">
    <label for="validationTooltipUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
      <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required/>
      <div class="invalid-tooltip">
        Please choose a unique and valid username.
      </div>
    </div>
  </div> */}
  <div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">Item</label>
    <input type="text" class="form-control" id="validationTooltip03" required/>
    <div class="invalid-tooltip">
      Please provide a Item.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip04" class="form-label">Quantity</label>
    <input type="text" class="form-control" id="validationTooltip03" required/>
    {/* <select class="form-select" id="validationTooltip04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select> */}
    <div class="invalid-tooltip">
      Please provide a quantity.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label">Discount</label>
    <input type="text" class="form-control" id="validationTooltip05" required/>
    <div class="invalid-tooltip">
      Please provide a discount.
    </div>
  </div>

  <div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">Remarks</label>
    <input type="text" class="form-control" id="validationTooltip03" required/>
    <div class="invalid-tooltip">
      Please provide a Remark.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip04" class="form-label">Total amount</label>
    <input type="text" class="form-control" id="validationTooltip03" required/>
    {/* <select class="form-select" id="validationTooltip04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select> */}
    <div class="invalid-tooltip">
      Please provide a total amount.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label">Receipt no</label>
    <input type="text" class="form-control" id="validationTooltip05" required/>
    <div class="invalid-tooltip">
      Please provide a receipt no.
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Make payment</button>
  </div>
</form>
  </div>;

  
};

export default Pharmacy;
