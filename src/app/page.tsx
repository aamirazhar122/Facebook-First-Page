import Image from 'next/image'
import logo from 'public/Logo.svg'
export default function Home() {
  return (
<div className=' flex flex-col md:flex-row justify-center items-center 
 bg-gray-200 h-screen'>

{/* Right side */}

<div className='text-3xl w-full md:w-1/2 px-10 mt-4 md:mt-0 '>
<Image 
src={logo} 
width={350} height={350} 
alt=" logo"

/>

<p className='text-3xl ml-8 -mt-3'>Connect with friends and 
the world around you on Facebook</p>
</div>

{/* Left side */}

<div className=' my-2 bg-white flex flex-col rounded-xl p-10 w-full md:w-1/2 max-w-md '>
<div>
<input className=' my-2 border border-1 border-gray-200 rounded-md h-10 w-full p-3 ' type='text' 
placeholder='Email address or Phone number'/>
<input className=' my-2 border border-1 border-gray-200 rounded-md h-10  w-full p-3' type='password' 
placeholder='Password'/>
</div>
<button className=' my-2 py-2 bg-blue-600 border font-bold text-xl
 text-white rounded-md w-full hover:bg-blue-700'>Login</button>

<div className='cursor-pointer flex justify-center mt-4
 text-blue-500 hover:underline'>Forgot password?</div>

<span >
  <hr className='mt-4' />
</span>
<div className='flex justify-center'>
<button className='bg-green-600 border rounded-md font-bold text-white
 w-fit my-2 py-2 mx-auto px-2  hover:bg-green-700'>Create New Account</button>
</div>
</div>
</div>    
  )
};
