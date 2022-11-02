import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
// import 'swiper/css/free-mod';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTopChartsQuery } from '../../redux/services/shazamCore';
import { useEffect, useRef } from 'react';
import { playPause, setActiveSong } from '../../redux/features/playerSlice';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import Error from '../Error';
import PlayPause from '../PlayPause';

const TopChardCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
	<div>
		<h3>{i + 1}.</h3>
		<div>
			<img src={song.images.coverart} alt={song.name} />
		</div>
		<div>
			<Link to={`/songs/${song.key}`}>
				<p>{song.title}</p>
			</Link>
			<Link to={`/artists/${song.artists[0].adamid}`}>
				<p>{song.subtitle}</p>
			</Link>
		</div>
		<PlayPause
			isPlaying={isPlaying}
			activeSong={activeSong}
			song={song}
			handlePause={handlePauseClick}
			handlePlay={handlePlayClick}
		/>
	</div>
);

const TopPlay = () => {
	const dispatch = useDispatch();
	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const { data, isFetching, error } = useGetTopChartsQuery();

	console.log(data);
	const divRef = useRef(null);

	useEffect(() => {
		// divRef.current.scrollIntoView({ behavior: 'smooth' });
	});

	const topPlays = data?.slice(0, 5);

	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = (song, i) => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	};

	if (isFetching) return <Loader />;
	if (error) return <Error />;

	return (
		<div ref={divRef} className='top-play'>
			<div>
				<div>
					<h2>Топ Песен</h2>
					<Link to='/top-charts'>
						<p>Подробнее</p>
					</Link>
				</div>
				<div>
					{topPlays.map((song, i) => (
						<TopChardCard
							key={song.key}
							song={song}
							i={i}
							isPlaying={isPlaying}
							activeSong={activeSong}
							handlePlayClick={handlePlayClick(song, i)}
							handlePauseClick={handlePauseClick}
						/>
					))}
				</div>
				<div>
					<h2>Топ Исполнителей</h2>
					<Link to='/top-artists'>
						<p>Подробнее</p>
					</Link>
				</div>
				<Swiper
					slidesPerView='auto'
					spaceBetween={15}
					freeMode
					centeredSlides
					centeredSliceBounds
					modules={[FreeMode]}
				>
					{topPlays?.map((song, i) => (
						<SwiperSlide key={song.key}>
							<Link to={`/artists/${song.artists[0].adamid}`}>
								<img src={song.images.background} alt='name' />
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default TopPlay;
