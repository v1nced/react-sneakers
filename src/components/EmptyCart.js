import React from 'react'

function EmptyCart({ onClose }) {
	return (
		<div className='empty-Cart'>
			<img width={120} height={120} src='/img/empty-cart.jpg' alt='empty' />
			<h5>Корзина пустая</h5>
			<p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
			<button className='greenButton' onClick={onClose}>
				<img src='/img/arrow.svg' alt='Arrow' />
				Вернуться назад
			</button>
		</div>
	)
}

export default EmptyCart
