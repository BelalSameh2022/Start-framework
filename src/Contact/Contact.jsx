import React, { useEffect } from 'react'

export default function Contact() {

  let userName;
  let userAge;
  let userEmail;
  let userPassword;
  let lblName;
  let lblAge;
  let lblEmail;
  let lblPassword;

  useEffect(() => {

    document.title = 'Contact';

    userName = document.getElementById("name");
    userAge = document.getElementById("age");
    userEmail = document.getElementById("email");
    userPassword = document.getElementById("password");
    lblName = document.querySelector(".lbl-name");
    lblAge = document.querySelector(".lbl-age");
    lblEmail = document.querySelector(".lbl-email");
    lblPassword = document.querySelector(".lbl-password");

    // userName.addEventListener("input", () => {
    //   (userName.value === '') ? hideLabel() : showLabel();
    // });
    // userAge.addEventListener("input", () => {
    //   (userAge.value === '') ? hideLabel() : showLabel();
    // });
    // userEmail.addEventListener("input", () => {
    //   (userEmail.value === '') ? hideLabel() : showLabel();
    // });
    // userPassword.addEventListener("input", () => {
    //   (userPassword.value === '') ? hideLabel() : showLabel();
    // });

    inputAffected(userName, lblName);
    inputAffected(userAge, lblAge);
    inputAffected(userEmail, lblEmail);
    inputAffected(userPassword, lblPassword);

  }, [])

  function inputAffected(type, label) {
    type.addEventListener("input", function () {
      (type.value.length > 0) ? showLabel(label) : hideLabel(label);
    })
  }


  function showLabel(label) {
    label.classList.replace("hide", "show")
  }

  function hideLabel(label) {
    label.classList.replace("show", "hide")
  }

  function clearInputs() {
    userName.value = '';
    userAge.value = '';
    userEmail.value = '';
    userPassword.value = '';
    hideLabel(lblName);
    hideLabel(lblAge);
    hideLabel(lblEmail);
    hideLabel(lblPassword);
  }


  return <>
    <div className="contact">
      <div className="container">
        <div className="contact-header text-center">
          <h1 className='fw-bolder s-text'>CONTACT COMPONENT</h1>
          <div className='d-flex justify-content-center align-items-center mb-4'>
            <div className='line me-3 s-bg'></div>
            <i className="fa-solid fa-star s-text"></i>
            <div className='line ms-3 s-bg'></div>
          </div>
          <div className="contact-body mb-5">
            <form action="" className='w-50 p-3 mx-auto d-flex flex-wrap gap-2'>
              <label htmlFor="name" className='m-text lbl-name hide'>Name:</label>
              <input id='name' type="text" placeholder='Name' className='outline-0 border-0 border-bottom w-100 p-3 rounded' />

              <label htmlFor="age" className='m-text lbl-age hide'>Age:</label>
              <input id='age' type="number" placeholder='Age' className='outline-0 border-0 border-bottom w-100 p-3 rounded' />

              <label htmlFor="email" className='m-text lbl-email hide'>Email:</label>
              <input id='email' type="email" placeholder='Email' className='outline-0 border-0 border-bottom w-100 p-3 rounded' />

              <label htmlFor="password" className='m-text lbl-password hide'>Password:</label>
              <input id='password' type="password" placeholder='Password' className='outline-0 border-0 border-bottom w-100 p-3 rounded' />

              <button onClick={clearInputs} type='button' className='btn btn-main align-self-start mt-2'>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}
