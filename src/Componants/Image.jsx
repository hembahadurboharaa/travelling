import React from 'react'

function Image() {
  return (
    <>
<div className="container">
  <div className="row pt-md-5">
    <div className="col-md-7">
      <img src="https://www.planholidays.com/wp-content/uploads/2017/12/blogguy.jpg?id=56" alt className="img-fluid" />
    </div>
    <div className="col-md-5 pt-md-5">
      <div className="fs-1 fw-bold pt-4">RECENT BLOG</div>
      <div className="con pt-4">
        <div className="fs-5 text-warning pt-2 pb-1 fw-semibold">Things to do while you are in Nepal</div>
        <div className="text-warning pb-2"><i className="fa-solid fa-calendar-days" /> MARCH 17, 2024</div>
        <p>Nepal is a multicultural and naturally beautiful country located between India and China. Nepal is well-known around the globe for the wide</p>
      </div>
      <div className="con pt-4">
        <div className="fs-5 text-warning pb-1 fw-semibold">Popular Day Tours In Nepal For Your Holidays</div>
        <div className="text-warning pb-2"><i className="fa-solid fa-calendar-days" /> MARCH 15, 2024</div>
        <p>Nepal is a country of Peace. It is a landlocked country. It is located between China and India. Nepal is one of</p>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Image