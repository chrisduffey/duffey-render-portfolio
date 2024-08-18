import heroImg from '../assets/CTD.png';

export default function Home() {
  return (
    

    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 item-center'>
      <div className='mb-10'>
        <p className='text-white text-[20px]'>Hi and Welcome</p>
        <p className='text-blue text-[40px] font-bold'>I'm Chris Duffey</p>
        <p className='text-red text-[40px] font-bold'>I'm a full stack developer</p>
        <p>Hi! I am a recent graduate of the University of Richmonds Full Stack Boot Camp and ready to get started!</p>
      <div className='mt-4 flex gap-4'>
      <button className='text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full hover:border-[1px] hover:border-white'>Resume</button>
      
      </div>
      </div>
      <div className='flex justify-center h-[100px] w-[350px]'>
      < img className='h-[100px] w-[350px]' src={heroImg}  />

      </div>
    </div>
  );
}
