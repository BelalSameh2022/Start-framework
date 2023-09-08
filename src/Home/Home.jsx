import React, { useEffect } from 'react'
import homeImg from '../images/avataaars.svg'

export default function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, [])

    return <>
        <div className="home">
            <div className="text-center">
                <img src={homeImg} alt="START FRAMEWORK" className='mb-5' />
                <h1 className='fw-bolder'>START FRAMEWORK</h1>
                <div className='d-flex justify-content-center align-items-center mb-3'>
                    <div className='line me-3 bg-white'></div>
                    <i className="fa-solid fa-star text-white"></i>
                    <div className='line ms-3 bg-white'></div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </>
}
