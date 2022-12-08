import { Link } from 'react-router-dom'

function Header(props) {
	return (
		<header>
			<Link to={'/'}>
				<div className='header__left'>
					<img src='/img/logo.png' alt='logo' />
					<div>
						<h2>React sneakers</h2>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<ul className='header__right'>
				<li onClick={props.onClickCart}>
					<img src='/img/cart.svg' alt='cart' />
					<span>12500 тенге</span>
				</li>
				<li>
					<Link to={'/favourite'}>
						<img src='/img/heart.svg' alt='heart' />
					</Link>
				</li>
				<li>
					<img src='/img/user.svg' alt='user' />
				</li>
			</ul>
		</header>
	)
}

export default Header
