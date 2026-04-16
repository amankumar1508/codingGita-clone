import React from 'react'
import Navbar from '../components/Navbar'

export default function Profile() {
    return (
        <div className="min-h-screen pt-20 bg-neutral-950 text-white">
            <Navbar />
            <div className="border-2 border-black h-400 flex  justify-center i ">
                <div className="  w-5xl p-2.5 ">
                     <div className=" border-2 h-20 flex justify-between p-1 ">
                           <div className="">
                             <p  className=' text-2xl  ' >Profile</p>
                             <p className='text-gray-400 font-mono ' >View and update your personal information</p>                           </div>
                           <div className="  p-4 border-2 flex gap-2">
                                <button className=' bg-blue-700 p-0.5  rounded-md ' >Reset Password</button>
                                  <button>Edit</button>
                           </div>
                     </div>
                     <div className=" border-2 h-90 p-1 flex justify-between ">
                           <div className=" border-2 bg-slate-900 border-gray-600 w-90 rounded-md flex justify-center gap-5 items-center flex-col ">
                               <div className=" h-30 w-31 rounded-full  text-center flex justify-around items-center  bg-blue-900  text-2xl ">AK</div>
                               
                               <div className=" gap-5 flex flex-col">
                                <div className="text-center">
                                <p className=' text-2xl ' >AMAN KUMAR</p>
                              <p className=' text-center'>student</p>
                              <p>SUxCG 714 • 108500</p>
                            </div>
                              <div className=" flex gap-5  ">
                                <div className="  w-29 bg-gray-900 font-semibold text-center rounded-md hover:bg-gray-600 ">Edit Profile</div>
                                <div className="   w-29 text-center rounded-md bg-blue-800 hover:bg-blue-500 ">Reset Password</div>
                              </div>
                               </div>
                                
                           </div>

                           <div className=" border-2 w-151 rounded-md">
                           
                           </div>
                     </div>
                     <div className=" border-2 h-159 w-251"></div>
                     <div className=""></div>
                </div>
            </div>
        </div>
    )
}
