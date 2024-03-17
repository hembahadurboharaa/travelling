import React from 'react'

function Find() {
  return (
    <>
<div className="container-fluid fii">
  <div className="container">
  <div className="row">
    <div className="col-12 col-lg-3 text-center mb-3 mb-lg-0 fs-3 fw-bold text-warning">FIND YOUR TRIP :</div>
    <div className="col-12 col-lg-7">
      <div className="d-flex flex-column flex-sm-row justify-content-between gap-3">
        <select className="form-select mb-3 mb-sm-0 fw-semibold" aria-label="Default select example">
          <option className="text-center fw-semibold" selected> Select Destination</option>
          <option className="text-center" value={1}>Nepal</option>
          <option className="text-center" value={2}>Tibet</option>
          <option className="text-center" value={3}>Bhutan</option>
          <option className="text-center" value={4}>India</option>
          <option className="text-center" value={5}>Pakistan</option>
        </select>
        <select className="form-select mb-3 mb-sm-0 fw-semibold" aria-label="Default select example">
          <option className="text-center fw-semibold" selected> Select Activity</option>
          <option className="text-center" value={1}>Trekking</option>
          <option className="text-center" value={2}>Tour</option>
          <option className="text-center" value={3}>Expedition</option>
          <option className="text-center" value={4}>Peak Climbing</option>
          <option className="text-center" value={5}>Jungle Safari</option>
          <option className="text-center" value={6}>Rafting</option>
          <option className="text-center" value={7}>Mountain Flight</option>
          <option className="text-center" value={8}>Mountain Biking</option>
          <option className="text-center" value={9}>Helicopter Tour</option>
          <option className="text-center" value={10}>Day Trip</option>
          <option className="text-center" value={11}>Others</option>
        </select>
        <select className="form-select mb-3 mb-sm-0 fw-semibold" aria-label="Default select example">
          <option className="text-center fw-semibold" selected> Select Duration</option>
          <option className="text-center" value={1}>1 Day</option>
          <option className="text-center" value={2}>2-4 Days</option>
          <option className="text-center" value={3}>5-10 Days</option>
          <option className="text-center" value={4}>11-15 Days</option>
          <option className="text-center" value={5}>16-20 Days</option>
          <option className="text-center" value={6}>21-30 Days</option>
          <option className="text-center" value={7}>More than 30 Days</option>
        </select>
      </div>
    </div>
    <div className="col-12 col-lg-2 text-center">
      <button type="button" className="btn btn-outline-danger">Search</button>
    </div>
  </div>
</div>
</div>

    </>
  )
}

export default Find