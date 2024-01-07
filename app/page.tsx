import Image from 'next/image'
import img from '../public/img/Whatsapp.png'
export default function Home() {
  return (
    // <h1>my love</h1>
    <main className='bg-gradient-to-r from-sky-500 to-indigo-500 h-full'>

      <div className='flex justify-center text-6xl text-center text-white p-10'>
        <Image className='rounded-full ' src="/img/ucc.jpeg" width={100} height={100} alt="Umar Cloth Collection icon" />
        <h1 className='p-2 mt-2'>Umar Cloth Collection</h1>
      </div>
      <div className='text-white text-center p-2 text-3xl '>
        <p>Welcome to Umar Cloth Collection, Here you can discover the latest and best <br /> trends for men and women in clothing, accessories, bed sheets and more. <br /> Whether you need a casual outfit or a formal dress.</p><br />

        <div className='flex justify-center'> {/* thats div is used to show an image and a url */}
          <a href="https://wa.me/923247616280" target="_blank" rel="noopener noreferrer" className="text-white text-center p-2 text-3xl ">For Order Contact on WhatsApp:</a>
          <Image className='rounded-lg' src="/img/Whatsapp.png" width={30} height={5} alt="Whatsapp Icon" />
        </div>
      </div>
      <div className='grid grid-cols-3 grid-rows-3 p-2  gap-2'>
        <div className='bg-slate-600 col-span-2 min-h-[300px] rounded-lg relative'><Image className='rounded-lg' src="/img/clothing-image-1.jpeg" layout='fill' objectFit='cover' alt='picture 1'></Image></div>
        <div className='bg-blue-600 row-span-2 rounded-lg relative'><Image className='rounded-lg' src="/img/clothing-image-2.jpeg" layout='fill' objectFit='cover' alt='picture 2'></Image></div>
        <div className='bg-purple-600 row-span-2 rounded-lg relative'><Image className='rounded-lg' src="/img/clothing-image-3.jpeg" layout='fill' objectFit='cover' alt='picture 3'></Image></div>
        <div className='bg-green-600 text-black-400 rounded-lg relative'><Image className='rounded-lg' src="/img/clothing-image-4.jpeg" layout='fill' objectFit='cover' alt='picture 4'></Image> Mens clothing</div>
        <div className='bg-gray-500 col-span-2 rounded-lg relative'><Image className='rounded-lg' src="/img/clothing-image-5.jpeg" layout='fill' objectFit='cover' alt='picture 5'></Image></div>
      </div>
      <div>
      <div className='flex justify-center'>
        <span className=' inline-block rounded-lg justify-center m-2 text-white text-3xl  text-center bg-gray-700 '>Give me your reviews after getting interact to the website comment us below.</span></div>

        <div className='flex justify-center'>
          <form className='flex justify-center'>
            <input className='rounded-lg m-2 p-2' type="text" placeholder='Enter your name' />
            <input className='rounded-lg m-2 p-2' type="email" placeholder='Enter your email' />
            <input className='rounded-lg m-2 p-2' type="text" placeholder='Enter your comment' />
            <button className='rounded-lg m-2 p-2 bg-gray-700 text-white'>Submit</button>
          </form>
        </div>
      </div>

<div className='grid grid-cols-3 rounded-lg p-2 m-2'>
  <div className='bg-orange-400 col min-h-[396px]'>aa</div>
  <div className='bg-slate-400 min-h-[396px]'>bb</div>
  <div className='bg-yellow-400 min-h-[396px]'>cc</div>
</div>
    </main>
  )
}
