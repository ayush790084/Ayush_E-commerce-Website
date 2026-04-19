
import { useState } from "react";
import { Link } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close=()=>{
    setOpen(false)
  }

  return (
    <header className=" fixed bg-white text-black shadow-md  top-0 left-0 w-full z-50 border-none">
      <nav className="max-w-7xl h-24 mx-auto px-6 py-4 flex items-center justify-between ">

   
        <h1 className="text-2xl font-bold text-black">Dukan</h1>

   
        <ul className="hidden md:flex items-center gap-8 text-2xl font-medium outline-none">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/shop" >Shop</Link></li>
           <li><Link to="/about">About</Link></li>
          <li><Link to="/contact" >Contact</Link></li>
              <li><Link to="/cart" > <FaCartArrowDown /></Link></li>
            
        </ul>

   
 <button
  className={`md:hidden text-3xl ${open ? "text-black" : "text-black"}`}
  onClick={() => setOpen(!open)}
>
  {open ? "x" : "☰"}
</button>

      </nav>

    
      {open && (
        <div className="md:hidden bg-gray-800 text-white  shadow-md animate-fadeIn">
          <ul className="px-6 py-4 flex flex-col items-center h-screen gap-4 text-lg font-medium ">
            <li><Link to="/" className="text-3xl  " onClick={close}>Home</Link></li>
             <li><Link to="/shop"  className="text-3xl " onClick={close}>Shop</Link></li>
            <li><Link to="/about" className="text-3xl "  onClick={close}>About</Link></li>
            <li><Link to="/contact" className="text-3xl" onClick={close}>Contact</Link></li>
               <li><Link to="/cart" className="text-3xl" onClick={close}><FaCartArrowDown /></Link></li>
          </ul>
        </div>
      )
    }
    </header>
  );
}
