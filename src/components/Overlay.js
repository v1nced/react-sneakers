import Cart from './Cart'
import EmptyCart from './EmptyCart'

const anim = async () => {
	await setTimeout(() => {}, 1000).then(res => res)
	return 'active'
}

function Overlay({ onClosed, cartItems, onRemove, active }) {
	return (
		<div>
			{console.log(cartItems)}
			<div className='overlay' onClick={onClosed}></div>
			<div className={`drawer`}>
				<div className='drawer-top'>
					<h2>Корзина</h2>
					<img
						onClick={onClosed}
						width={32}
						height={32}
						src='/img/btn-remove.svg'
						alt=''
					/>
				</div>

				{cartItems.length > 0 ? (
					<Cart key={cartItems.id} cartItems={cartItems} onRemove={onRemove} />
				) : (
					<EmptyCart onClose={onClosed} />
				)}
			</div>
		</div>
	)
}

export default Overlay
