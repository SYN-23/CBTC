import React from 'react';

const Navbar = () => {
    const navbar=[
        {
            "id": 0,
            "name":"Cafe Menu",
        },
        {
            "id": 1,
            "name":"E-shop",
        },
        {
            "id":2,
            "name":"Order Online",
        },
        {
            "id":3,
            "name":"Café Finder/ Café Locator",
        },
        {
            "id":4,
            "name":"Mobile App/CCD Mobile App",
        },
    ]
    return (
        <div className='flex justify-between py-2.5 px-10 sticky top-0 z-50 bg-slate-50'>
            <div className='flex justify-center gap-x-20 '>
              <div>
                <img src='logo.png'></img>
              </div>
              <div className='flex gap-x-8 my-4 text-red-500 cursor-pointer'>
                {
                navbar.map((nav)=>(
                  <h5 key={nav.id}>{nav.name}</h5>
                ))
                }
              </div>
            </div>
            <div className='flex gap-x-8 my-4'>
            <h5 className="fa-solid fa-magnifying-glass text-red-500"></h5>
            <h5 className="fa-regular fa-bell text-red-500"></h5>
            <h5 className="fa-regular fa-user text-red-500"></h5>
            </div>
        </div>
    );
}

export default Navbar;
