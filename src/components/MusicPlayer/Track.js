import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
	<div className='music-player__track'>
		<div
			className={`${
				isPlaying && isActive ? 'music-player__track-img active' : 'music-player__track-img'
			} `}
		>
			<img src={activeSong?.images?.coverart} alt='cover art' className='rounded-full' />
		</div>
		<div className='music-player__info'>
			<p className='music-player__info-title'>
				{activeSong?.title ? activeSong?.title : 'No active Song'}
			</p>
			<p className='music-player__info-subtitle'>
				{activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
			</p>
		</div>
	</div>
);

export default Track;
