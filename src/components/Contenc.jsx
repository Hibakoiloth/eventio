import React from 'react'
import './style.css'


const Contenc = () => {
  return (
    <div className="py-[200px] bg-[#D5F5E3]">

          <div>
      <h1 className='text-5xl text-center'>SPONSOR COLLEGE EVENTS</h1> <br />
      <p className='text-xl text-center'>Connect with students at the top colleges and universities in the world. Whether you're looking to hire interns, promote your brand, or engage with the next generation of talent, we have a solution for you.</p><br />
      <div className='translate-x-[250px]'>
      <input className='w-[500px] p-4 rounded bg-black text-white' type="Email" placeholder='Enter email your email' /> <button class="bg-black p-4 text-white hover:bg-[#58D68D] hover:text-black">
  Get Started
</button>
<br />
  <p className='py-2'> 
             We care about the protection of your data. Read our{' '} 
             <span className=' text-purple-400 '>Privacy Policy.</span> 
           </p> 

      </div>
    </div>
    </div>
  )
}

export default Contenc
