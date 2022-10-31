import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ song, handlePause, handlePlay, isPlaying, activeSong }) =>
	isPlaying && activeSong?.title === song.title ? (
		<div className='playpause'>
			<FaPauseCircle onClick={handlePause} />
		</div>
	) : (
		<div className='playpause'>
			<FaPlayCircle onClick={handlePlay} />
		</div>
	);

export default PlayPause;
