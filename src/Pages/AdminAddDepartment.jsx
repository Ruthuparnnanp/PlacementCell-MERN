import { TextField } from "@mui/material";
import React from 'react';
import createIcon from "../../public/plus-square.svg";

function AdminAddDepartment() {
    return (
        <>
            {/* <!-- component --> */}
            <div className="antialiased font-sans h-screen overflow-y-auto  bg-gray-50">
              <div className="container pt-4 mx-auto px-4 sm:px-8">
               {/* Add departments */}
               <div className="flex items-center mb-3 flex-col">
                  <span className=" pt-0 bg-rose-100 inline-block py-1 text-rose-500 px-5 rounded-full text-xl">ADD</span>
                  <p className="text-3xl text-red-400  mt-2 font-bold">DEPARTMENT</p>
    
                  <div className="add w-full mt-5 flex-col sm:flex-row flex gap-2">
                  <TextField id="outlined-basic" label="Enter department" sx={{flexGrow:1}} variant="outlined" />
                    <button className="px-6 flex justify-center h-12 sm:h-auto items-center py-2 hover:scale-95 hover:bg-green-500 bg-green-400 rounded font-semibold" type="submit" >ADD DEPARTMENT
                      <img className="w-6 h-6 ml-2" src={createIcon} alt="" /> </button>
                  </div>
    
                </div>
      
      <hr className="mt-10"/>
    
                {/* departments */}
                <div className="py-8">
                    <h2 className="text-2xl text-center font-semibold leading-tight">
                      Departments
                    </h2>
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4  overflow-x-auto">
                    <div className="inline-block min-w-full shadow mr-4 rounded-lg overflow-x-auto">
                      <table className="min-w-full leading-normal">
                        <thead className="font-bold">
                          <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs  text-gray-600 uppercase tracking-wider">
                              SI NO
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs  text-gray-600 uppercase tracking-wider">
                              Department
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs  text-gray-600 uppercase tracking-wider">
                              Created at
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs  text-gray-600 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                             1
                            </td>
                            <td className="px-5  border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                MERN
                              </p>
                            </td>
                            <td className="px-5  border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Jan 21, 2020
                              </p>
                            </td>
                            <td className="px-5    border-b border-gray-200 bg-white text-sm">
                              <div className="flex gap-1">
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-600 leading-tight">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 bg-green-200 opacity-50  rounded"
                                ></span>
                                <span className="relative">Edit</span>
                              </span>
                              <span className="relative inline-block px-3 py-1 font-semibold text-red-600 leading-tight">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 bg-rose-200 opacity-50 rounded"
                                ></span>
                                <span className="relative">Delete</span>
                              </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
      );
}

export default AdminAddDepartment