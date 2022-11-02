import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { links } from '../../assets/constants';

const NavLinks = ({ handleClick }) => (
	<div className='nav-links'>
		{links.map((link) => (
			<NavLink
				className='nav-link'
				key={link.name}
				to={link.to}
				onClick={() => handleClick && handleClick()}
			>
				<link.icon />
				{link.name}
			</NavLink>
		))}
	</div>
);

const Sidebar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<div className='sidebar'>
				<div>
					<p>Logo</p>
					<NavLinks />
				</div>
			</div>
			<div className='sidebar-mobile'>
				{mobileMenuOpen ? (
					<RiCloseLine onClick={() => setMobileMenuOpen(false)} />
				) : (
					<HiOutlineMenu onClick={() => setMobileMenuOpen(true)} />
				)}
			</div>
			<div className={`${mobileMenuOpen ? 'mobile__active' : 'mobile'}`}>
				<div>
					<p>Logo</p>
					<NavLinks handleClick={() => setMobileMenuOpen(false)} />
				</div>
			</div>
		</>
	);
};

export default Sidebar;
