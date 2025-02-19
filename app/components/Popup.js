import { useState } from "react";

function Popup() {
  const [isopen, Setisopen] = useState(false);

  return (
    <div className="w-full flex justify-end p-4">
      
      <button
        onClick={() => {Setisopen(true)}}
        className="fixed bottom-6 z-50 border-4 m-2 bg-black border-red-400 rounded-3xl px-4 motion-reduce:animate-bounce  py-2">!
      </button>

    
      {isopen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => Setisopen(false)}>
          
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80"
            onClick={(e) => e.stopPropagation()} 
          >
            <h1 className="text-xl text-blue-800 font-bold">Hi! How Can I Help You?</h1>
            <p className="text-gray-600 mt-2">You can get anything solved here.</p>
            <button
              onClick={() => Setisopen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
