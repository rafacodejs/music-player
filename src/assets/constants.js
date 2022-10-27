import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];


{/*import { useState } from 'react';
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
      autoComplete='off'
      className='p-2 text-gray-200 focus-within:text-gray-600'
    >
      <label htmlFor='search-field' className='sr-only'>
        Search all songs
      </label>
      <div className='flex flex-row justify-start items-center'>
        <div className='flex justify-center items-center w-[38px] h-[56px] ml-2 absolute bg-gray-300 rounded-md '>
          <FiSearch className='text-[30px] text-black rounded-md ' />
        </div>
        <input
          name='search-field'
          autoComplete='off'
          id='search-field'
          placeholder='What do you want to listen to?'
          type='search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='flex-1 bg-gray-300 border-none outline-none placeholder-gray-500 text-base text-black rounded-md p-4 font-poppins ml-9'
        />
      </div>
    </form>
  );
};

export default Searchbar;*/}
