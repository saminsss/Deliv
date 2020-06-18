import React from 'react';

function Header() {
	return (
		<header id="header">
			<div class="container">
				<div id="logo" class="pull-left">
					<h1><a href="/#intro" class="scrollto">Deliv</a></h1>
				</div>
				<nav id="nav-menu-container">
					<ul class="nav-menu">
						<li class="menu-active"><a href="/#intro">Search</a></li>
						<li class="menu-has-children"><a href="/#">Your Account</a>
							<ul>
								<li><p>Your Account</p></li>
								<li><a href="/#">Your Account</a></li>
								<li><a href="/#">Your Orders</a></li>
								<li><a href="/#">Your Recommendations</a></li>
								<li><a href="/#">Your Subscribe and Save Items</a></li>
								<li><a href="/#">Switch Accounts</a></li>
								<li><a href="/#">Sign Out</a></li>
							</ul>
							<ul class="menu-other">
								<li><p>Your Lists</p></li>
								<li><a href="/#">Create a Wish List</a></li>
								<li><a href="/#">Find a Wish List</a></li>
								<li><a href="/#">Wish from Any Website</a></li>
								<li><a href="/#">Find a Gift</a></li>
								<li><a href="/#">Discover Your Style</a></li>
								<li><a href="/#">Explore Showroom</a></li>
							</ul>
						</li>
						<li><a href="/#products">Browse</a></li>
						<li><a href="/#category">Category</a></li>
						<li><a href="/#history">Browsing History</a></li>
						<li><a href="/#team">Contact Us</a></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header