const Pizza = ({ name, ingredients, price, photoName, soldOut }) => {
	return (
		<li className='pizza'>
			<h2>{name}</h2>
			<p>{ingredients}</p>
			<p>{price}</p>
			<img src={`src/assets/${photoName}`} alt={name} />
			{soldOut && <p>Sold Out</p>}
		</li>
	);
};

export default Pizza;
