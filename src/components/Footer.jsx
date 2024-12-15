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
		<footer>
			{currentTime} <h2>{open ? `We're open!` : `We're closed`}</h2>
		</footer>
	);
};

export default Footer;
