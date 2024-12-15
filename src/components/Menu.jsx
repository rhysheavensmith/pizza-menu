import { pizzaData } from '../utils/data';
import Pizza from './Pizza';
const Menu = () => {
	return (
		<main className='menu'>
			<h2>Our Menu</h2>
			<div className='pizzas'>
				{/* map over pizzaData and render a Pizza component for each pizza */}
				{pizzaData.map((pizza, index) => (
					<Pizza
						key={index}
						name={pizza.name}
						ingredients={pizza.ingredients}
						price={pizza.price}
						photoName={pizza.photoName}
						soldOut={pizza.soldOut}
					/>
				))}
			</div>
		</main>
	);
};

export default Menu;
