import React from 'react';
import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className='relative w-full flex flex-col'>
    <div className='w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28 rounded-xl' />

    <div className='absolute inset-0 flex items-center'>
      <img
        alt='profile'
        src={
          artistId
            ? artistData?.artists[artistId].attributes?.artwork?.url
                .replace('{w}', '500')
                .replace('{h}', '500')
            : songData?.images?.coverart
        }
        className='ml-4 sm:w-40 w-32 sm:h-40 h-32 rounded-full object-cover border-2 shadow-xl shadow-black'
      />

      <div className='ml-5'>
        <p className='font-bold font-poppins sm:text-3xl text-xl text-white'>
          {artistId
            ? artistData?.artists[artistId].attributes?.name
            : songData?.title}
        </p>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
            <p className='text-base font-poppins font-medium text-gray-400'>
              {songData?.subtitle}
            </p>
          </Link>
        )}

        <p className='text-base font-medium font-poppins text-gray-400'>
          {artistId
            ? artistData?.artists[artistId].attributes?.genreNames[0]
            : songData?.genres?.primary}
        </p>
      </div>
    </div>
  </div>
);

export default DetailsHeader;
