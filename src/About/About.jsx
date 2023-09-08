import React, { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'About';
  }, [])
  
  return <>
    <div className="about">
      <div className="container">
          <h1 className='fw-bolder text-center'>ABOUT COMPONENT</h1>
          <div className='d-flex justify-content-center align-items-center mb-3'>
            <div className='line me-3 bg-white'></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className='line ms-3 bg-white'></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className='p-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6">
              <p className='p-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
    </div>
  </>
}
