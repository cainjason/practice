import React, { useRef, useState } from 'react';


const Sidebar = () => {
	const [isVisible, setIsVisible] = useState(false);


	return (
		// Sidebar code will go here
		<>
			<h2> Sidebar </h2>
			<button 
				setIsVisible
					onKeyDown={(e) => {
						if (e.key === 'Escape') {
							setIsVisible(false);
						}
					}}
			> Close Sidebar </button>

			<ul>
				<li> Home </li>
				<li> About </li>
				<li> Contact </li>
			</ul>
		</>
	);

};

export default Sidebar;