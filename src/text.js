import React from 'react'

export const text = () => {
  return (
    <>
      <div className="bg-green-300 flex-col h-screen w-screen flex justify-center items-center">
        <h1 className="font-bold text-2xl bg-orange-300 rounded-md hover:scale-105  p-2">
          Password Generator
        </h1>
        <div className="bg-white  rounded-xl shadow-lg p-2 m-2  h-4/6 w-2/5">
          <div className="flex items-center flex-col justify-center p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-lock"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
            </svg>
            <span className="border-solid border-2 rounded-md border-black text-center bg-red-200  p-1 m-3    w-14">
              XXXX
            </span>
            <h1 className="text-lg text-blue-400 font-semibold">
              PASSWORD GENERATOR
            </h1>
            <h3 className="text-blue-800">
              Create strong and secure password to keep your acoount safe
              online.
            </h3>
          </div>
          {/* <div className="flex justify-center">
            <input className="bg-slate-200 border-solid border-2 border-sky-500 rounded-md p-1  w-1/2" />
            <div className="w-10 bg-slate-500">
              <svg
              
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-file-bar-graph-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-2 11.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5m-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z" />
              
              </svg>
              Copy
            </div>
          </div> */}
          <div className="flex justify-center">
            <input className="bg-slate-200 border-solid border-2 border-sky-500 rounded-md p-1 w-1/2"
             />
            <div className="ml-3 w-16 gap-1 p-1 bg-cyan-400 rounded-md flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-file-bar-graph-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-2 11.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5m-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z" />
              </svg>
              {""}
            <button className="font-semibold">Copy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
