import { useState, useEffect } from 'react';

const Footer = () => {
	// set state for current time
	const [currentTime, setCurrentTime] = useState(
		new Date().toLocaleTimeString()
	);
	// set state for if the restaraunt is open or closed
	const [open, setOpen] = useState(true);

	// set interval to update current time every second
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date().toLocaleTimeString());
		}, 1000);

		// clear interval
		return () => {
			clearInterval(interval);
		};
	});

	// set open state based on current time
	useEffect(() => {
		const currentHour = new Date().getHours();
		setOpen(currentHour >= 9 && currentHour < 20);
	}, [currentTime]);

	return (
		<footer className='footer'>
			<div className='order'>
				<button className='btn'>Order Now</button>
				{open ? <h2>We're Open</h2> : <h2>We're Closed</h2>}
				<p>Current Time: {currentTime}</p>
			</div>
		</footer>
	);
};

export default Footer;
