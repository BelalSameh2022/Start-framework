import React, { useEffect } from 'react'
import image1 from '../images/port1.png'
import image2 from '../images/port2.png'
import image3 from '../images/port3.png'

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, [])

  return <>
    <div className="portfolio">
      <div className="container">
        <div className="portfolio-header text-center">
          <h1 className='fw-bolder s-text'>PORTFOLIO COMPONENT</h1>
          <div className='d-flex justify-content-center align-items-center mb-4'>
            <div className='line me-3 s-bg'></div>
            <i className="fa-solid fa-star s-text"></i>
            <div className='line ms-3 s-bg'></div>
          </div>
        </div>
        <div className="portfolio-body">
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="item rounded" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <img src={image1} alt="PORTFOLIO COMPONENT" className='w-100 rounded' />
                <div className="layer h-100 w-100 rounded">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="item rounded" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <img src={image2} alt="PORTFOLIO COMPONENT" className='w-100 rounded' />
                <div className="layer h-100 w-100 rounded">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="item rounded" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                <img src={image3} alt="PORTFOLIO COMPONENT" className='w-100 rounded' />
                <div className="layer h-100 w-100 rounded">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="item rounded" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <img src={image1} alt="PORTFOLIO COMPONENT" className='w-100 rounded' />
                <div className="layer h-100 w-100 rounded">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="item rounded" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <img src={image2} alt="PORTFOLIO COMPONENT" className='w-100 rounded' />
                <div className="layer h-100 w-100 rounded">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="item rounded" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                <img src={image3} alt="PORTFOLIO COMPONENT" className='w-100 rounded' />
                <div className="layer h-100 w-100 rounded">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Modals */}
    <div className="modal fade bg-primary bg-opacity-25" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-0">
            <img src={image1} alt="PORTFOLIO COMPONENT" className='w-100 rounded' />
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade bg-primary bg-opacity-25" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-0">
            <img src={image2} alt="PORTFOLIO COMPONENT" className='w-100 rounded' />
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade bg-primary bg-opacity-25" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-0">
            <img src={image3} alt="PORTFOLIO COMPONENT" className='w-100 rounded' />
          </div>
        </div>
      </div>
    </div>
  </>
}
