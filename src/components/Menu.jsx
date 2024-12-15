import { pizzaData } from '../utils/data';
import Pizza from './Pizza';
const Menu = () => {
	return (
		<div>
			<h2>Our Menu</h2>
			<ul>
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
			</ul>
		</div>
	);
};

export default Menu;
