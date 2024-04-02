import React from 'react';
import contact from '../assets/contact.jpeg';
import packageImg from '../assets/package.jpeg';
import download from '../assets/download.jpeg';
import calender from '../assets/calender.jpeg';
import N1 from '../assets/N1.jpg'
import Contenc from './Contenc';
import Home from './Home'

const Sponser = () => {
  return (
    <div className='w-full h-full bg-[#280b0b] py-16 px-4'>
          <div className='flex'>
    <img className='h-[600px]' src={N1} alt="" srcset="" />
<Contenc/>
    </div>
        <div className='max-w-[1240px] mx-auto grid '>
        <div className='absolute inset-0 flex items-center justify-center'>

       

       </div>
       
        <div className='w-full py-[5rem] px-1 bg-[#D5F5E3]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
  
          <div className='w-full shadow-xl   bg-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300' >
              <img className='w-10 mx-auto mt-[-3rem]  bg-purple-100 p-1' src={contact} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Contact us
</h2>
              <p className='text-center text-sm '>Email us at sponsors@collegeevents.com  to learn more about our sponsorship opportunities

</p>
              
              
          </div>

          <div className='w-full shadow-xl  bg-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-10 mx-auto mt-[-3rem]  bg-purple-100 p-1' src={packageImg} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Select a package
</h2>
              <p className='text-center text-sm '>
Choose from our selection of sponsorship packages or create a custom plan that meets your specific needs
</p>
              
              
          </div>


          <div className='w-full shadow-xl  bg-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-12 mx-auto mt-[-2rem] bg-purple-100 p-1' src={download} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>customize your sponsership
</h2>
              <p className='text-center text-sm'>
Add your logo to our website, host a company info session, or sponsor a student club event - the possibilities are endless</p>
              
              
          </div>    <div className='w-full shadow-xl  bg-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-10 mx-auto mt-[-2rem] bg-purple-100 p-1' src={calender} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Start sponsoring events
</h2>
              <p className='text-center text-sm'>


Join us at our next event and start connecting with students today!
s</p>
              
             
          </div>
      </div>
    </div>
    </div>
    <div>
    <h1 className='text-5xl text-center'>HOME</h1>
<Home />
      </div> 

    </div>
    
  );
};

export default Sponser;