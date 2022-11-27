import Card from './components/Card'
import Header from './components/Header'
import Overlay from './components/Overlay'

const arr = [
	{
		price: '12 999',
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		url: '/img/sneakers/1.jpg',
	},
	{
		price: '12 999',
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		url: '/img/sneakers/2.jpg',
	},
	{
		price: '14 399',
		title: 'Мужские Кроссовки Nike Mid Suede',
		url: '/img/sneakers/3.jpg',
	},
]

function App() {
	return (
		<div className='App'>
			<Overlay />

			<Header />

			<div className='content'>
				<div className='content__header'>
					<h1>Все кроссовки</h1>
					<div className='search-block'>
						<img src='/img/search.svg' alt='Search' />
						<input type='text' placeholder='Поиск... ' />
					</div>
				</div>

				<div className='items'>
					{arr.map(val => (
						<Card price={val.price} title={val.title} url={val.url} />
					))}
				</div>
			</div>
		</div>
	)
}

export default App
