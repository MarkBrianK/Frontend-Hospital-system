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
            <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
          </div>
          
          <button type="submit" class="btn btn-success">Create</button>
        </fieldset>
      </form>


      <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">SI.NO</th>
      <th scope="col">Test Name</th>
      <th scope="col">Cost</th>
      <th scope="col">Description</th>
      <th scope="col">Manage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>CBC</td>
      <td>200</td>
      <td>Complete Blood Count</td>
      <button class="btn btn-success" type="submit">Edit</button>
      <button class="btn btn-success" type="submit">Delete</button>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Liver function test</td>
      <td>3000</td>
      <td>Reduce Alcohol Consumption</td>
      <button class="btn btn-success" type="submit">Edit</button>
      <button class="btn btn-success" type="submit">Delete</button>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>immunologic blood test</td>
      <td>600</td>
      <td>Inability of the body to produce immunoglobulins</td>
      <button class="btn btn-success" type="submit">Edit</button>
      <button class="btn btn-success" type="submit">Delete</button>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Laboratory;