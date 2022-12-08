import Card from './Card'

function Favourite({ favItems, onLiked }) {
	return (
		<div>
			<div className='favourite-wrapper'>
				<div className='favourite-header'>
					<img src='/img/arrow.svg' alt='' />
					<h2>Мои закладки</h2>
				</div>
				<div className='favourite-items'>
					{favItems.map(val => (
						<Card
							key={val.id}
							id={val.id}
							price={val.price}
							title={val.title}
							url={val.url}
							isFavourite={true}
							onLiked={onLiked}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Favourite
