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





  /** @type {import('tailwindcss').Config} */
export default {
  purge:[],
  target:'relaxed',
  prefix:'',
  important:'false',
  separator:'',
  
  theme: {

    screens:{
      sm:'640 px',
      md:'768px',
      lg:'1024',
      xl:'1280',
    },
    colors:{
      transparent:'transparent',
      current:'currentcolor',
      black:'#000',

      white:'#fff',
      gray:{
        100:'#f7fafc',
        200:'#edf2f7',
        300:'#e2e8f0',
        400:'#cbd5e0',
        500:'#a0aec0',
        600:'#718096',
        700:'#4a5568',
        800:'#2d3748',
        900:'#1a202c',

      }
    }
    
  },
  variants: {},
  plugins: [],
};



<div className="bg-gray-100">
    <div className=" grid md:grid-cols-3  container pt-36 relative">

<div className="grid sm:grid-rows-2"><img src="https://picsum.photos/id/238/400/400" alt="" className="rounded-full w-10 h-10 " />
<img src="https://picsum.photos/id/238/400/400" alt=""className=" rounded-full w-10 h-10 " /></div>

<div className="w-80 p-6 bg-white rounded-lg shadow pt-6 py-12">
        
       
        <p className="text-center text-gray-700 text-sm ">
        When I arrived in Germany, I felt like my first day in kindergarten. 
      I didn't know anyone, nor did I know what to do. The Navigator onboarding team
       not only arranged my appointments, they even took me there. From my appointment
        with the reception center to looking for an apartment or applying for health insurance. 
        I didn't have to worry about anything. They had very good knowledge of what was required for
         my new start in Hamburg. I was able to focus on my new job while they took care of everything else.
         <p className="text-center text-lg font-bold mb-2">Healing Paragraph</p>
        </p>
      </div>
      <div className="grid sm:grid-rows-2"><img src="https://picsum.photos/id/238/400/400" alt="" className="w-10 h-10 rounded-full " />
<img src="https://picsum.photos/id/238/400/400" alt=""className="w-10 h-10 rounded-full " /></div>

</div>

    </div>
  
        