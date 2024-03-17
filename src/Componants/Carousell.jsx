import React from 'react'

function Carousell() {
  return (
    <>
    <div className="container pb-2 ">
    <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={3} aria-label="Slide 4" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img  src="https://www.plannepal.com/uploads/2016/12/standard/39ef6e51859b4ddc54f8a8bd5621882f.jpg" className="d-block w-100  rounded-4" alt="..." style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-white fs-1'>Nepal Holiday, Nepal Tour Package</h5>
        <p className='text-warning fs-5'>The Land of Himalayas offers you thrilling , inspiring trekking routes and mountaineering packages all over Nepal</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img  src="https://www.plannepal.com/uploads/2016/12/standard/64262d2147d4cc947548addb5bb1ee0f.jpg" className="d-block w-100  rounded-4" alt="..."style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-white fs-1'>Everest Base Camp Helicopter Tour with Landing.</h5>
        <p className='text-warning fs-5'>Everest Base Camp Helicopter Tour with Multiple Landing is one of the exciting day trip to highest mountain.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={3000}>
      <img  src="https://www.plannepal.com/uploads/2016/12/standard/d922009ec7e1d3d3755ac007ee963e56.jpg" className="d-block w-100 rounded-4" alt="..." style={{ width: '100%', height: '500px', objectFit: 'cover' }}/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-white fs-1'>Air Tickets - International & Domestic Flight</h5>
        <p className='text-warning fs-5'>Deals on both International and Domestic flight ticket. We assure you for the quality service on best Deals.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img   src="https://www.plannepal.com/uploads/2022/12/standard/ba71d2935e48626811eaa7f7c84f389c.jpg" className="d-block w-100  rounded-4" alt="..." style={{ width: '100%', height: '500px', objectFit: 'cover' }}/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-white fs-1'>Kathmandu to Lukla Flight</h5>
        <p className='text-warning fs-5'>Kathmandu to Lukla Flight through regular airlines flight or Helicopter Flight</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

    </>
  )
}

export default Carousell