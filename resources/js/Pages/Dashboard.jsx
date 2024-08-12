import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const Dashboard = () => {
  // Sample data for the cards
  const data = {
    banks: 54,
    pendingReviews: 23,
    totalBlogs: 82,
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <div className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          {/* Dashboard Title */}
          <h1 className="text-2xl font-bold mb-4">Overview</h1>
          <p className='mb-4'>This is where you can display your dashboard content.</p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Banks Card */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold mb-2">Banks</h3>
              <p className="text-4xl font-bold">{data.banks}</p>
            </div>

            {/* Pending Reviews Card */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold mb-2">Pending Reviews</h3>
              <p className="text-4xl font-bold">{data.pendingReviews}</p>
            </div>

            {/* Total Blogs Card */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold mb-2">Total Blogs</h3>
              <p className="text-4xl font-bold">{data.totalBlogs}</p>
            </div>
          </div>

          {/* Your other dashboard content goes here */}

          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;