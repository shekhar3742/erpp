import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Components/Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
		<div className="home">
			<a href="/home" style={{textDecoration:"none"}}><h3>ERP</h3></a>
			</div>
			<nav ref={navRef}>
				<a href="/dashboard">Dashboard</a>
				<a href="/product">Products Management </a>
				<a href="/oders">Orders Management</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;