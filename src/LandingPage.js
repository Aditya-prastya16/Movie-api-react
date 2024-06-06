import React from 'react';

const LandingPage = ({ onEnter }) => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-between items-center">
      <div className="flex flex-col justify-center items-center flex-grow">
        <h1 className="text-5xl font-bold mb-8">Welcome to Nacchan Movie</h1>
        <p className="text-lg mb-8"> Just Punch The Enter Button Below To Enter -_-'</p>
        <button
          onClick={onEnter}
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Enter Button
        </button>
      </div>
      <footer className="pb-4">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Nacchan Movie Copyright |  &nbsp;
        <a className='text-blue-500 underline' href='https://www.instagram.com/aditya.prastyaa/' target='_blank' rel="noopener noreferrer" >
            aditya.prastyaa  
        </a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
