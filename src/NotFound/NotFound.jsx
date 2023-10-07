import React, { useEffect } from 'react'

export default function NotFound() {

    useEffect(() => {
        document.title = '404';
    }, [])


    return <>
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <h1 className='fw-bolder s-text'>404 page not found!</h1>
        </div>
    </>
}
