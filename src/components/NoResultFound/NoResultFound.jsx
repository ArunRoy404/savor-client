import noResultImg from '/noResultImg.jpg'
const NoResultFound = () => {
    return (
        <div className='p-5 mt-10 col-span-3 flex flex-col items-center justify-center'>
            <img className='w-70' src={noResultImg} alt="" />
            <p className='text-xl mt-5 font-medium'>No results found!</p>
        </div>
    );
};

export default NoResultFound;