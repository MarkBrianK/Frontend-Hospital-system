import React from "react";

const Laboratory = () => {
  return (
    <>
      <form>
        <fieldset>
          <div class="form-group">
            <label for="exampleInputTextname" class="form-label mt-4">Test Name</label>
            <input type="textName" class="form-control" id="exampleInputTextname" />
          </div>

          <div class="form-group">
            <label for="exampleInputTextname" class="form-label mt-4">Cost Of Test</label>
            <input type="textName" class="form-control" id="exampleInputTextname" />
          </div>


          <div class="form-group">
            <label for="exampleTextarea" class="form-label mt-4">Description</label>
            <textarea class="form-control" id="exampleTextarea" rows="4"></textarea>
          </div>

          <button type="submit" class="btn btn-success">Create</button>
        </fieldset>
      </form>
    </>
  )
}

export default Laboratory;
