import React from 'react';

function ProfileInfo() {
  const handleEdit = () => {
    // Define what happens when the edit button is clicked
    console.log('Edit button clicked');
  };

  return (
    <div className='bg-gray-300  container mx-auto p-6 rounded-md m-5 ml-3'>
      <div className='flex flex-col items-center gap-y-4'>
        <label className='text-2xl font-bold'>User Profile Dashboard</label>
        
        {/* Profile Image */}
        <div className='flex'>
        <div className='h-28 w-28 rounded-full overflow-hidden'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9o3iEjIeGn2CfVZZyO4KPM4bI3tg1cX1XN2Gn4XP4qXSieX_EUcpC1hdBuoHRD8rLbA&usqp=CAU"
            alt="UserImg"
            className='h-full w-full object-cover'
          />
        </div>
        <div className='mt-6 cursor-progress'>✏️</div>
        </div>
        
        {/* Full Name */}
        <h1 className='text-black font-semibold text-lg'>{'Tinku Bahadur'}</h1>
        <div className='mb-1 lg:mb-8 w-full'>
          <label className='block mb-2 text-lg md:text-xl lg:text-2xl font-medium text-gray-700'>
            Full Name
          </label>
          <div className='relative'>
            <input
              type="text"
              className='bg-gray-100 placeholder:text-gray-900 text-md md:text-lg lg:text-xl rounded-lg block placeholder:font-semibold w-full px-5 p-2.5 lg:p-4 focus:outline-none'
              placeholder="Tinku Bahdur"
              readOnly
            />
            <button
              type="button"
              className='absolute inset-y-0 right-0 flex items-center px-3 lg:px-4 bg-gray-100 rounded-r-md hover:bg-gray-200'
              onClick={handleEdit}
            >
              <i className='text-gray-600 lg:text-lg'>✏️</i>
            </button>
          </div>
        </div>
        <div className='mb-5 lg:mb-8 w-full'>
          <label className='block mb-2 text-lg md:text-xl lg:text-2xl font-medium text-gray-700'>
            Bio
          </label>
          <div className='relative'>
            <textarea
              className='bg-gray-100 placeholder:text-gray-900 text-md md:text-lg lg:text-xl rounded-lg block w-full p-2.5 lg:p-4 focus:outline-none resize-none overflow-none'
              placeholder="I'm Tinku, a web development enthusiast, constantly exploring new technologies and passionate about building intuitive and engaging websites."
              rows="4"
              readOnly
            ></textarea>
            <button
              type="button"
              className='absolute inset-y-0 right-0 flex items-center px-3 lg:px-4 bg-gray-100 rounded-r-md hover:bg-gray-200'
              onClick={handleEdit}
            >
              <i className='text-gray-600 lg:text-lg'>✏️</i>
            </button>
          </div>
          <div className='grid place-content-center mt-2'>
            <button className='rounded-md border text-white bg-green-500 hover:bg-green-600 px-3 text-lg mt-1'>Edit profile</button>
            <a className='text-blue-500 hover:text-blue-600 text-lg font-semibold underline cursor-pointer mt-2'>Change password ?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
