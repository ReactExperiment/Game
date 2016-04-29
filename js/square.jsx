import React from 'react';

export default class Square extends React.Component {
	render() {
		const { black } = this.props;
		// const black = this.props.black;
		const fill = black ? 'black' : 'white';
		const stroke = black ? 'white' : 'black';
		return (
			<div style={{ 
				backgroundColor: fill,
				color: stroke,
				width: '100%',
				height: '100%',
				fontSize: '300%',
				textAlign: 'center'
			}}>
				{ this.props.children }
			</div>
		);

	}
}

Square.propTypes = {
	black: React.PropTypes.bool
};