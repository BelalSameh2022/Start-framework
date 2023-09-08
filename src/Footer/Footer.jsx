import React from 'react'

export default function Footer() {
    return <>
        <footer>
            <div className="footer-body">
                <div className="row">
                    <div className="col-md-4">
                        <div className="part text-center">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="part text-center">
                            <h3>AROUND THE WEB</h3>
                            <i className="fa-brands fa-facebook mx-1 icon"></i>
                            <i className="fa-brands fa-twitter mx-1 icon"></i>
                            <i className="fa-brands fa-linkedin mx-1 icon"></i>
                            <i className="fa-solid fa-globe mx-1 icon"></i>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="part text-center">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-end">
                <p>Copyright © Your Website 2021.</p>
            </div>
        </footer>
    </>
}
