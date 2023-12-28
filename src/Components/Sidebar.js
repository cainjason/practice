import React, { useState } from 'react';


const Sidebar = () => {
	const [show, setShow] = useState(true);

	return (
		<>
			<div className="sidebar">
				<button className="button"
				onClick={() => setShow
					(!show)}>
					{show ? 'Show' : 'Hide'}
				</button>
					{show && <h2>Hello React</h2>}
			</div>
		</>
	);
	}

export default Sidebar;