import React from 'react'
import Content from './Content'


function Topheader() {
  return (
    <>
    <div className="cont pt-1">
      
     
      <nav className="navbar na navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="/"><img className='logo' src="https://www.planholidays.com/wp-content/uploads/2017/12/newlogo.png" alt="" /></a>

    <button  className="navbar-toggler shadow-none border-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon text-light" />
    </button>


    <div className="sidebar offcanvas offcanvas-start " tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">


      <div className="offcanvas-header border-bottom">
        <h5  className="offcanvas-title text-primary  " id="offcanvasNavbarLabel"><img className='b' src="https://www.planholidays.com/wp-content/uploads/2017/12/newlogo.png" alt="" /></h5>
        <button  type="button" className="btn-close btn-close " data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>


      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end align-items-center gap-3  flex-grow-1       ">
          <li className="nav-item">
            <a id='hover' className="nav-link active" aria-current="page" href="#">HOME</a>
          </li>

          <li className="nav-item">
            <a id='hover' className="nav-link active" aria-current="page" href="#">ABOUT US</a>
          </li>


          

          <li class="nav-item dropdown">
          <a id='hover' class="nav-link active  dropdown-toggle justify-content-center align-items-center d-flex  " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            NEPAL
          </a>
          <ul class="dropdown-menu mt-3   ">
            <li><a class="dropdown-item drop" href="#">NEPAL EXPEDITION</a></li>
            <li><a class="dropdown-item drop" href="#">NEPAL PEAK CLIMBING</a></li>
            <li><a class="dropdown-item drop" href="#">NEPAL TREKKING</a></li>
            <li><a class="dropdown-item drop" href="#">TOUR IN NEPAL</a></li>
            <li><a class="dropdown-item drop" href="#">NEPAL JUNGLE SAFARI</a></li>
            <li><a class="dropdown-item drop" href="#">NEPAL RIVER RAFTING</a></li>
            <li><a class="dropdown-item drop" href="#">OTHER ACTIVITIES</a></li>
          </ul>
        </li>


          <li class="nav-item dropdown ">
          <a id='hover' class="nav-link dropdown-toggle   justify-content-center align-items-center d-flex " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            DESTINATION
          </a>
          <ul class="dropdown-menu mt-3  ">
            <li><a class="dropdown-item drop" href="#">NEPAL</a></li>
            <li><a class="dropdown-item drop" href="#">INDIA</a></li>
            <li><a class="dropdown-item drop" href="#">BHUTAN</a></li>
            <li><a class="dropdown-item drop" href="#">TIBET</a></li>
          </ul>
        </li>
        <li className="nav-item">
            <a id='hover' className="nav-link active" aria-current="page" href="#"> CSR</a>
          </li>

          <li className="nav-item">
            <a id='hover' className="nav-link active" aria-current="page" href="#">FAQS</a>
          </li>

          <li className="nav-item">
            <a id='hover' className="nav-link active" aria-current="page" href="#">TESTIMONIALS</a>
          </li>
          <li className="nav-item">
            <a id='hover' className="nav-link active" aria-current="page" href="#">BLOGS</a>
          </li>
          
          
        </ul>
        
      </div>
    </div>
  </div>
</nav>





<Content/>



      </div>
    </>
  )
}

export default Topheader