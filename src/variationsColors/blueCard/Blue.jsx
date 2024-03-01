import React from 'react'
import TenisBlue from '../../assets/tenisBlue.png'


const Blue = () => {
  return (
    <div>
      <section className='w-full h-full overflow-hidden '>
      
      <div className=' bg-stone-900 flex justify-center items-center w-full h-screen p-3 font-poppins text-start'>
        <div className='bg-white h-[540px] w-full max-w-4xl shadow-xl flex flex-col items-center justify-center md:flex-row'>
          <div className='w-full h-full md:w-1/2 flex items-center justify-center flex-col' >
              <div className='w-full'>
                  <h1 className='hidden md:block text-sm ml-4 font-bold mt-4'>kalebe fukuda</h1>
              </div>
              <div className='w-full h-full flex items-center justify-center' >
                  <div  className='mb-2'>
                    <h1 className='text-5xl font-bold mb-2 select-none'>Lançamento <br />
                    <p className='animate-floatRight'>Nake Air.</p>
                    </h1>
                    <p className='mb-1 animate-opacityPulse'> O Tênis do futuro</p>
                    <p className='mb-7'> O futuro a um passo do seu alcance</p>
                    <a href="#" className='font-bold bg-zinc-800 text-white py-2 px-5 border-2
                      border-zinc-800 duration-200 hover:bg-white
                        hover:text-zinc-800' > QUERO CONHECER!</a>
                  </div>
              </div>
          </div>

          <div className='w-full h-full md:w-1/2 flex items-center justify-center bg-bgBlueTenis bg-cover bg-no-repeat bg-center'>
              <img src={TenisBlue} alt="Tenis Nike Air" className=' max-w-lg w-11/12 md:w-full object-cover z-30 duration-300 hover:-rotate-6 hover:scale-110 md:hover:scale-125' />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Blue;