import React from 'react'

function Content() {
  return (
    <>
    <div className="container">
    <div id='one' className="one text-center text-white  ">Plan Your Holidays </div>
    <div id='two' className="two text-center">FIND TOUR PACKAGES TO SUIT YOUR TRAVEL GOALS.</div>
 <nav className="navbar ">
  <div className="container-fluid d-flex justify-content-center py-2">
    <form className="d-flex justify-content-center" role="search">
      <input className="form-control size me-2" type="search" placeholder="Search Here" aria-label="Search" />
      <button className="btn btn-outline-danger " type="submit">Search</button>
    </form>
  </div>
</nav>

<div id='padd' className="container padd">
  <div className="row">
    <div className="col-md-4 col-sm-6 text-white d-flex justify-content-center align-items-center gap-5">
      <div className="sign"> <i className="fa-regular fa-thumbs-up" /></div>
      <div className="exp">
        <div className="first pab">Run by Experts</div>
        <div className="second">A well organized tourism company that handles travel experience with great teamwork</div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6 text-white d-flex align-items-center gap-5">
      <div className="sign"> <i className="fa-regular fa-gem" /></div>
      <div className="exp">
        <div className="first pab">20 Years of Experience</div>
        <div className="second">Leader in tourism market being responsible socially as well as environmentally</div>
      </div>
    </div>
    <div className="col-md-4 col-sm-12 text-white d-flex align-items-center gap-5">
      <div className="sign"><i className="fa-regular fa-clock" /></div>
      <div className="exp">
        <div className="first pab">24/7 Customer Service</div>
        <div className="second">Efficient, attentive, punctual &amp; caring customer service representatives are at your service 24/7</div>
      </div>
    </div>
  </div>
</div>
</div>



    </>
  )
}

export default Content