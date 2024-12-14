import './index.css';
import { pizzaData } from './utils/data';

const App = () => {
	return (
		<div>
			{pizzaData.map((pizza) => {
				return (
					<div key={pizza.name}>
						<h2>{pizza.name}</h2>
						<p>{pizza.ingredients}</p>
						<p>{pizza.price}</p>
						<img src={`src/assets/${pizza.photoName}`} alt={pizza.name} />
						{pizza.soldOut && <p>Sold Out</p>}
					</div>
				);
			})}
		</div>
	);
};

export default App;
