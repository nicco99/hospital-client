import React from "react";

function Footer() {
  return (
    <div className="w-full sm:flex bottom-0 bg-blue-100">
      <div className="sm:w-2/5">
        <h1 className="m-4 text-xl text-blue-600">SPRING FIELD</h1>
        <p className="text-gray-500 p-3">
          At Spring Field, we are proud to offer a range of healthcare
          services that are designed to meet the unique needs of our patients.
          Our hospital is equipped with state-of-the-art facilities and staffed
          by highly trained healthcare professionals who are dedicated to
          providing exceptional care. We specialize in dental, ear, and eye
          services, and our goal is to help our patients maintain good health
          and well-being.
        </p>
       
      </div>
      <div className="sm:w-1/5 flex flex-col items-center p-5">
        <h1 className="text-blue-600">Menus</h1>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <div className="m-3">
         <h1>contact details</h1>
         <ul>
          <li>email</li>
         </ul>
        </div>
      </div>
      <div className="sm:w-2/5 flex flex-col items-center justify-center">
        <label className="m-2" htmlFor="email">Email</label>
        <input name="email" id="email" className="border rounded-md sm:h-10 sm:w-64" />
        <button className="p-2 m-2 px-5 text-red-500 outline outline-1 sm:w-60 rounded-sm hover:bg-red-500 hover:text-white">Subscribe</button>
      </div>
    </div>
  );
}

export default Footer;
