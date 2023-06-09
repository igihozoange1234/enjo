

import React from 'react'
import { FaHandshake } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';
import { FaSearch } from 'react-icons/fa';


const Navbar = ()=> {
  return (
    <nav>
      <div className="max-w-6xl mx-auto px-6 py-4 bg-pink-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
          
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
  <FaHandshake className="text-black w-6 h-6" />
</div>
            <span className="ml-2 text-gray-800 text-lg font-semibold">NAVIGATOR <br />onboarding</span>
               
            <select className=" bg-gray-200 shadow rounded-full ml-2 ">
    <option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
</select>


                  <div className="flex items-center border rounded-md p-2 ml-2">
      <input
        type="text"
        placeholder="Search"
        className="w-12  mr-2"
      />
      <FaSearch className="w-4 h-4 text-gray-500" />
    </div>
                
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex md:items-center md:ml-6">
              <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">About </a>
              <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              
              <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Current</a>
              <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <a href="#" className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-black"><button >Term</button></a>
              
            
            </div>
            
          </div>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
