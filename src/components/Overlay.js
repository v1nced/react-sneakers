function Overlay() {
	return (
		<div style={{ display: 'none' }} className='overlay'>
			<div className='drawer'>
				<h2>Корзина</h2>
				<div className='itemsCart'>
					<div className='cartItem'>
						<div
							className='cartItemImg'
							style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
						></div>
						<div>
							<p>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 тенге</b>
						</div>
						<img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />
					</div>
					<div className='cartItem'>
						<div
							className='cartItemImg'
							style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
						></div>
						<div>
							<p>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 тенге</b>
						</div>
						<img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />
					</div>

					<div className='cartItem'>
						<div
							className='cartItemImg'
							style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
						></div>
						<div>
							<p>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 тенге</b>
						</div>
						<img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />
					</div>
				</div>

				<ul>
					<li>
						<span>Итого:</span>
						<div></div>
						<b>21 498 тенге </b>
					</li>
					<li>
						<span>Налог 5%:</span>
						<div></div>
						<b>1074 тенге</b>
					</li>
				</ul>

				<button className='greenButton'>
					Оформить заказ <img src='/img/arrow.svg' alt='Arrow' />
				</button>
			</div>
		</div>
	)
}

export default Overlay
