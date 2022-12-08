function Cart({ onRemove, cartItems }) {
	return (
		<div key={cartItems.id} className='Cart'>
			<div className='itemsCart'>
				{cartItems.map(obj => (
					<div key={obj.id} className='cartItem'>
						<div
							className='cartItemImg'
							style={{ backgroundImage: `url(${obj.url})` }}
						></div>
						<div>
							<p>{obj.title}</p>
							<b>{obj.price} тенге</b>
						</div>
						<img
							onClick={() => onRemove(obj.id)}
							className='removeBtn'
							src='/img/btn-remove.svg'
							alt='Remove'
						/>
					</div>
				))}
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
	)
}

export default Cart
