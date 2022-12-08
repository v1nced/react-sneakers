import React, { useState } from 'react'

function Card({
	idNum,
	url,
	title,
	price,
	onAddCart,
	onLiked,
	isFavourite = false,
	id,
}) {
	const [checked, setChecked] = useState(false)
	const [liked, setLiked] = useState(isFavourite)

	const AddCart = () => {
		onAddCart({ url, title, price, id, checked })
	}

	const AddLike = () => {
		onLiked({ url, title, price, id, liked })
	}

	return (
		<div className='card'>
			<div
				onClick={() => {
					setLiked(!liked)
					AddLike()
				}}
				className='favourite'
			>
				<img src={liked ? '/img/liked.svg' : '/img/unliked.svg'} alt='card' />
			</div>

			<img
				className='sneaker'
				width={133}
				height={113}
				src={url}
				alt='sneaker'
			/>
			<p>{title}</p>
			<div className='card__bottom'>
				<div>
					<span>Цена:</span>
					<b>{price} тенге</b>
				</div>
				<button
					onClick={() => {
						setChecked(!checked)
						AddCart()
					}}
				>
					<img
						src={checked ? '/img/btn-checked.svg' : '/img/plus.svg'}
						alt=''
					/>
				</button>
			</div>
		</div>
	)
}

export default Card
