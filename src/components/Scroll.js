import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY:'scroll', border:'1px border solid black', height:'800px'}}>
			{props.children}
		</div>
	);
};

export default Scroll; 