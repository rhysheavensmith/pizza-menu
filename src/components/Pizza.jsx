const Pizza = ({ name, ingredients, price, photoName, soldOut }) => {
	return (
		<div className={`pizza ${soldOut ? 'sold-out' : ''}`}>
			<h3>{name}</h3>
			<p>{ingredients}</p>
			<p>{price}</p>
			<div>
				<img src={`src/assets/${photoName}`} alt={name} />
				<span>{soldOut ? <p>sold out</p> : null}</span>
			</div>
		</div>
	);
};

export default Pizza;
