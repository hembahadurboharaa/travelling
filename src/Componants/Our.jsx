import React from 'react'

function Our() {
  return (
    <div className="container py-5">
    <div className="fs-1 fw-bold text-warning text-center pb-5">OUR SPECIALITIES</div>
    <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 pb-2">
            <div className="premium-hover">
                <div className="image-container">
                    <img src="https://www.plannepal.com/assets/img/our-specialities/tour-banner-special.jpg?ver=1465419636"  alt="Tour in Nepal" />
                    <div className="overlay" />
                    <div className="content">
                        <div className="fs-5 fw-bold text-warning">TOUR IN NEPAL</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6 pb-2">
            <div className="premium-hover">
                <div className="image-container">
                    <img src="https://www.plannepal.com/assets/img/our-specialities/trekking-banner-special.jpg?ver=1465419556" alt="Trekking in Nepal" />
                    <div className="overlay" />
                    <div className="content">
                        <div className="fs-5 fw-bold text-warning">TREKKING IN NEPAL</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6 pb-2">
            <div className="premium-hover">
                <div className="image-container">
                    <img src="https://www.plannepal.com/assets/img/our-specialities/flight-book.jpg?ver=1465419604" alt="Flight Booking" />
                    <div className="overlay" />
                    <div className="content">
                        <div className="fs-5 fw-bold text-warning">FLIGHT BOOKING</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    
  )
}

export default Our