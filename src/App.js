import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Overlay from './components/Overlay'
import axios from 'axios'
import Favourite from './components/Favourite'
import Home from './pages/Home'

function App() {
	const [cartItems, setCartItems] = useState([])
	const [items, setItems] = useState([])
	const [cartClosed, setCartClosed] = useState(false)
	const [searchInput, setSearchInput] = useState('')
	const [favItems, setFavItems] = useState([])

	const getCartItems = () => {
		axios
			.get('https://63861923875ca3273d501997.mockapi.io/cart')
			.then(res => setCartItems(res.data))
	}

	useEffect(() => {
		axios
			.get('https://63861923875ca3273d501997.mockapi.io/Items')
			.then(res => setItems(res.data))

		getCartItems()

		axios
			.get('https://63861923875ca3273d501997.mockapi.io/favourites')
			.then(res => setFavItems(res.data))
	}, [])

	const onRemoveCart = id => {
		console.log(id)
		axios.delete(`https://63861923875ca3273d501997.mockapi.io/cart/${id}`)
		setCartItems(prev => {
			return prev.filter(elem => elem.id !== id)
		})
	}

	const onLiked = async obj => {
		try {
			/* if (favItems.find(obj => obj.id === id)) {
		} */
			if (favItems.find(favObj => favObj.id === obj.id)) {
				axios.delete(
					`https://63861923875ca3273d501997.mockapi.io/favourites/${obj.id}`
				)
				setFavItems(prev => prev.filter(elem => elem.id !== obj.id))
			} else {
				const { data } = await axios.post(
					'https://63861923875ca3273d501997.mockapi.io/favourites',
					obj
				)
				setFavItems(prev => [...prev, data])
			}
		} catch (error) {
			alert('Не удалось добавить в избранные')
		}
	}

	//Кстыль исправить
	const onAddToCart = async obj => {
		try {
			const { data } = await axios.post(
				'https://63861923875ca3273d501997.mockapi.io/cart',
				obj
			)

			setCartItems(prev => [...prev, data])
			/* 	if (!obj.checked) {
			
		} else {
			setCartItems(prev => prev.filter(elem => elem.id !== obj.id))
		} */
		} catch (error) {
			alert('Не удалось добавить в корзину')
		}
	}

	const onSearchInput = event => {
		setSearchInput(event.target.value)
	}

	return (
		<div className='App'>
			{cartClosed && (
				<Overlay
					cartItems={cartItems}
					onClosed={() => setCartClosed(false)}
					onRemove={obj => onRemoveCart(obj)}
					active={cartClosed}
				/>
			)}

			<Header onClickCart={() => setCartClosed(true)} />

			<Routes>
				<Route
					path='/favourite'
					exact
					element={<Favourite favItems={favItems} onLiked={onLiked} />}
				/>
			</Routes>

			<Routes>
				<Route
					path='/'
					exact
					element={
						<Home
							searchInput={searchInput}
							onSearchInput={onSearchInput}
							items={items}
							favItems={favItems}
							onAddToCart={onAddToCart}
							onLiked={onLiked}
						/>
					}
				/>
			</Routes>
		</div>
	)
}

export default App
