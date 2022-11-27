function Header() {
	return (
		<header>
			<div className='header__left'>
				<img src='/img/logo.png' alt='' />
				<div>
					<h2>React sneakers</h2>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className='header__right'>
				<li>
					<img src='/img/cart.svg' alt='' />
					<span>12500 тенге</span>
				</li>
				<li>
					<img src='/img/heart.svg' alt='' />
				</li>
				<li>
					<img src='/img/user.svg' alt='' />
				</li>
			</ul>
		</header>
	)
}

export default Header
