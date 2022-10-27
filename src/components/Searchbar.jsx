import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='p-2 text-gray-200 focus-within:text-gray-600'
    >
      <div className='flex flex-row justify-start items-center'>
        <div className='flex justify-center items-center w-[38px] h-[56px] ml-2 absolute bg-gray-300 rounded-md '>
          <FiSearch className='text-[30px] text-black rounded-md ' />
        </div>
        <input
          type='search'
          placeholder='What do you want to listen to?'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='flex-1 bg-gray-300 border-none outline-none placeholder-gray-500 text-base text-black rounded-md p-4 font-poppins ml-9'
        />
      </div>
    </form>
  );
};

export default Searchbar;
