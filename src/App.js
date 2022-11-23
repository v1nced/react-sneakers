function App() {
	return (
		<div className='App'>
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
			<div className='content'>
				<h1>Все кроссовки</h1>
				<div className='items'>
					<div className='card'>
						<img
							className='sneaker'
							width={133}
							height={113}
							src='/img/sneakers/1.jpg'
							alt=''
						/>
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='card__bottom'>
							<div>
								<span>Цена:</span>
								<b>12 999 тенге</b>
							</div>
							<button>
								<img src='/img/plus.svg' alt='' />
							</button>
						</div>
					</div>
					<div className='card'>
						<img
							className='sneaker'
							width={133}
							height={113}
							src='/img/sneakers/2.jpg'
							alt=''
						/>
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='card__bottom'>
							<div>
								<span>Цена:</span>
								<b>12 999 тенге</b>
							</div>
							<button>
								<img src='/img/plus.svg' alt='' />
							</button>
						</div>
					</div>
					<div className='card'>
						<img
							className='sneaker'
							width={133}
							height={113}
							src='/img/sneakers/3.jpg'
							alt=''
						/>
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='card__bottom'>
							<div>
								<span>Цена:</span>
								<b>12 999 тенге</b>
							</div>
							<button>
								<img src='/img/plus.svg' alt='' />
							</button>
						</div>
					</div>
					<div className='card'>
						<img
							className='sneaker'
							width={133}
							height={113}
							src='/img/sneakers/4.jpg'
							alt=''
						/>
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='card__bottom'>
							<div>
								<span>Цена:</span>
								<b>12 999 тенге</b>
							</div>
							<button>
								<img src='/img/plus.svg' alt='' />
							</button>
						</div>
					</div>
					<div className='card'>
						<img
							className='sneaker'
							width={133}
							height={113}
							src='/img/sneakers/5.jpg'
							alt=''
						/>
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='card__bottom'>
							<div>
								<span>Цена:</span>
								<b>12 999 тенге</b>
							</div>
							<button>
								<img src='/img/plus.svg' alt='' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
