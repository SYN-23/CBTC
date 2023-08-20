import React from 'react';

const MidPage = () => {
    const picture=[
        {
          id:0,
          "image":"image-1.gif", 
          "text":"What's New" 
        },
        {
            id:0,
            "image":"image-2.gif",
            "text":"Find a café near you"  
          },
          {
            id:0,
            "image":"image-3.gif",
            "text":"Shop Now"   
          }
    ]
    return (
        <div className=' '>
        
          <div className='flex mb-2 '>
           {
            picture.map((pic)=>(
              <div key={pic.id}>
                <img src={pic.image}></img>
                <div className=' -mt-16 text-center'>
                <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">{pic.text}</button>
                </div>
              </div>
            ))
           } 
          </div>

        <div className='flex justify-center items-center'>
          <div className=' absolute z-20'>
           
            <img src='logo-1.png ' ></img>
          </div>
        
        <div className='blur-[4px]   '>
        <img src='body-1.jpg' ></img> 
        </div>

        </div>
        </div>
        
       
    );
}

export default MidPage;
