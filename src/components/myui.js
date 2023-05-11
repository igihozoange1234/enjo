function Navbar() {
  return (
    <div  className="bg-gray-50 min-h-screen">
      <nav >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-8 bg-gray-500"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8hyiukXpOnX8a5N6KhpfBIMh0kSGZpdtUncPe5RlG02SZY0uM"
                  alt="Workflow"/>
                
                  
              </div>
              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
                >
                  Calendar
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a>
              </div>

                </div>
               </div> 
               </nav>
               </div>
             
               
  )
  }
  export default Navbar;




import React from "react";
import'./navbar.css'
import { Routes,Route } from "react-router-dom";

const Navbar =() => {
  

  const images = [
    "https://source.unsplash.com/random/200x200",
    "https://source.unsplash.com/random/200x200",
    "https://source.unsplash.com/random/200x200",
   
  ];
  return (
    

  <div className="grid md:grid-rows-2 ">
  <nav className="flex flex-wrap justify-end">


      <ul className="flex flex-row">
           
  
      <div className="flex flex-wrap  justify-start pl-24">
      <div className=" ml-6">

      <img className="h-15 w-12  pt-6 "
                  src= "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8hyiukXpOnX8a5N6KhpfBIMh0kSGZpdtUncPe5RlG02SZY0uM"
                  alt="Workflow"/>   
      </div>

      <div className=" pt-6 pl-1 text-blue-700">
        <h1>NAVIGATOR <br />onboarding</h1>
      </div>
      <div className="pt-6 pl-2" >
      <select className=" bg-gray-200 rounded-full">
    <option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
</select>
      </div>
      <div >
      <img className="h-13 w-10 pl-2 pt-6"
                  src="data:image/png;base64,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"
                  alt="Workflow"/>
                
      </div>
     </div>

        <li className="mr-6">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Home
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            About us
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Services
          </a>

          </li>
        <li className="mr-6">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Current
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Contact
          </a>
        </li>

        <li className="mr-6">
          <a href="#" className="text-gray-500 hover:text-gray-900 bg-gray-200" >
            Term
          </a>
        </li>
      </ul>
    </nav>
  </div>
  
  );
}

export default Navbar;


