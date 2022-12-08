function Order({ onClose }) {
	return (
		<div className='order'>
			<img width={83} height={120} src='/img/complete-order.jpg' alt='empty' />
			<h5>Заказ оформлен!</h5>
			<p>Ваш заказ #18 скоро будет передан курьерской доставке</p>
			<button className='greenButton' onClick={onClose}>
				<img src='/img/arrow.svg' alt='Arrow' />
				Вернуться назад
			</button>
		</div>
	)
}

export default Order
