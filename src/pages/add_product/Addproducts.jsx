import React from 'react'
import "./add_product.css"
export default function Addproducts() {
  return (
    <>
    <div className='addproductbtn'>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><span class="material-symbols-outlined">
add
</span>
</button>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Name:</label>
              <input type="text" class="form-control" id="recipient-name"/>
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Price:</label>
              <input type="text" class="form-control" id="recipient-name"/>
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Image:</label>
              <input type="file" class="form-control" id="recipient-name"/>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Add Product</button>
        </div>
      </div>
    </div>
  </div>
    </>


  )
}