import { HiPause, HiPlay } from 'react-icons/hi2';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <HiPause size={30} className='text-white' onClick={handlePause} />
  ) : (
    <HiPlay size={30} className='text-gray-300' onClick={handlePlay} />
  );

export default PlayPause;
