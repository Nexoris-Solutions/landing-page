import hands from '../../../assets/hands.png';

function Banner() {
  return (
    <div className="relative max-w-7xl mx-auto h-[400px] bg-blue-500">
      <img src={hands} alt="" className='relative z-20' />
      <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[300px] text-white text-[20vw] font-righteous font-bold z-10'>
        NEXORIS
      </h1>
    </div>
  )
}

export default Banner