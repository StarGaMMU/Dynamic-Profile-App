import React, { useState, useEffect } from 'react';

const Header = () => {
  return (
    <div className="min-h-screen flex flex-col items-start justify-center bg-gray-100 relative">
      <div className="bg-white text-black py-2 px-4 rounded-lg border border-blue-300 inline-block absolute top-4 left-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <Options />
      {/* Rest of your content */}
    </div>
  );
};

const Options = () => {
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setShowOptions(true);
  }, []); // This runs only on initial render

  return (
    <div className="absolute top-12 left-4">
      <OptionBox title="My Profile" show={showOptions} />
      <OptionBox title="My Connections" show={showOptions} />
    </div>
  );
};

const OptionBox = ({ title, show }) => {
  return (
    <div className={`flex items-center mb-2 ${show ? 'block' : 'hidden'}`}>
      {show && (
        <a
          href="#"
          className="text-blue-500 text-lg mr-2"
        >
          &#62;
        </a>
      )}
      <div className={`bg-white text-black py-2 px-4 rounded-lg border border-blue-300 flex items-center w-48 ${show ? 'block' : 'hidden'}`}>
        <a
          href="#"
          className={`text-lg ${show ? 'hover:underline' : ''}`}
          style={{ marginLeft: '6px' }}
        >
          {title}
        </a>
      </div>
    </div>
  );
};

const Page = () => {
  return <Header />;
};

export default Page;
