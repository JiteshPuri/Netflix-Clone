import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }; 


  return (
    <div className="relative inline-block w-full text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-start  pl-16 px-4 py-2 w-full text-sm hover:bg-gray-800 font-medium border-b-2 border-t-2 border-[#181a26]"
        
          onClick={toggleDropdown}
          
        >
          GENRES 
          {/* <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
              clipRule="evenodd"
            />
          </svg> */}
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right z-10 left-[102%] top-[-10px] absolute w-full right-0 shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
          onMouseLeave={toggleDropdown}
          
          
          
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-red-600 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
              onClick={() => {
                // Handle click event for first option
              }}
            
              
            
            >
              ROMANCE
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-red-600 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
              onClick={() => {
                // Handle click event for second option
              }}
             
            >
              HORROR
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-red-600 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
              onClick={() => {
                // Handle click event for third option
              }}
              
            >
              THRILLER
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
