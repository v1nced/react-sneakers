import Card from '../components/Card'

function Home({
	searchInput,
	onSearchInput,
	items,
	favItems,
	onAddToCart,
	onLiked,
}) {
	return (
		<div className='content'>
			<div className='content__header'>
				<h1>
					{searchInput ? `Поиск по названию "${searchInput}"` : 'Все кроссовки'}
				</h1>
				<div className='search-block'>
					<img src='/img/search.svg' alt='Search' />
					<input onChange={onSearchInput} type='text' placeholder='Поиск... ' />
				</div>
			</div>

			<div className='items'>
				{items
					.filter(item =>
						item.title.toLowerCase().includes(searchInput.toLowerCase())
					)
					.map(val => (
						<Card
							key={val.id}
							id={val.id}
							price={val.price}
							title={val.title}
							url={val.url}
							isLike={favItems}
							onAddCart={obj => onAddToCart(obj)}
							onLiked={onLiked}
						/>
					))}
			</div>
		</div>
	)
}
export default Home
