import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { playPause, setActiveSong } from '../../redux/features/playerSlice';
import PlayPause from '../PlayPause';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
	const dispatch = useDispatch();

	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = () => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	};

	return (
		<div className='song-card'>
			<div className='song-card__wrapper'>
				<div
					className={`${
						activeSong?.title === song.title ? 'song-card__active' : 'song-card__hidden'
					}`}
				>
					<PlayPause
						song={song}
						handlePause={handlePauseClick}
						handlePlay={handlePlayClick}
						isPlaying={isPlaying}
						activeSong={activeSong}
					/>
				</div>
				<img src={song.images?.coverart} alt='song__img' />
				<div className='song-card__mask'></div>
			</div>
			<div>
				<p className='song-card__title'>
					<Link to={`/songs/${song?.key}`}>
						{song.title.length > 20 ? `${song.title.slice(0, 20)}...` : song.title}
					</Link>
				</p>
				<p className='song-card__subtitle'>
					<Link to={song.artists ? `/artists${song?.artists[0]?.adamid}` : '/top-artists'}>
						{song.subtitle.length > 20 ? `${song.subtitle.slice(0, 20)}...` : song.subtitle}
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SongCard;
