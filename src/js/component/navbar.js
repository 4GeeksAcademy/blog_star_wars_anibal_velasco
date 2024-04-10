import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return <nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container-fluid">
			<a className="navbar-brand" href="#">star wars</a>
			<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
							{/* aqui va lo de los favoritos */}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>
};
