import ImageLogo from '../../assets/images/BQueenLogoPantallas.png';

const Kitchen: React.FC = () => {
  return (
    <>
    <div className='bg-[#292D32]'>
      <div className= 'flex justify-end'>
      <img className="my-0 w-[150px] justify-center"
           src={ImageLogo}
           alt="Burguer Queen"
      />
      </div>
      <div className='h-40 m-20 bg-[#6C7075] flex rounded-md'>
        <div>
          aqui la orden
          <button className='flex items-center justify-center rounded-md border border-transparent bg-[#EE4D39] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#F4AB4D]'>
            Por entregar
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Kitchen;