function Card(props) {
	return (
		<div className='card'>
			<div className='favourite'>
				<img src='/img/unliked.svg' alt='' />
			</div>

			<img
				className='
							sneaker'
				width={133}
				height={113}
				src={props.url}
				alt=''
			/>
			<p>{props.title}</p>
			<div className='card__bottom'>
				<div>
					<span>Цена:</span>
					<b>{props.price} тенге</b>
				</div>
				<button>
					<img src='/img/plus.svg' alt='' />
				</button>
			</div>
		</div>
	)
}

export default Card
