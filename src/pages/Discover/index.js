import { genres } from '../../assets/constants';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import SongCard from '../../components/SongCard';
import { useGetTopChartsQuery } from '../../redux/services/shazamCore';

const Discover = () => {
	const { data, isFetching, error } = useGetTopChartsQuery();
	const genreTitle = 'Rock';

	if (isFetching) return <Loader />;
	if (error) return <Error />;

	return (
		<div className='discover'>
			<h2 className='title'>Главная</h2>
			<select onChange={() => {}} value='' className='select'>
				{genres.map((genre) => (
					<option key={genre.value} value={genre.value}>
						{genre.title}
					</option>
				))}
			</select>
			<div className='discover__wrapper'>
				{data.map((song, i) => (
					<SongCard key={song.key} song={song} i={i} />
				))}
			</div>
		</div>
	);
};

export default Discover;
