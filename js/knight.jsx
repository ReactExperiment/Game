import React from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';

const knightSource = {
	beginDrag(props) {
		return {};
	}
};

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
}

class Knight extends React.Component {
	render() {
		const { connectDragSource, isDragging } = this.props;
		return connectDragSource(
			<div style={{
				opacity: isDragging ? 0.5 : 1,
				fontWeight: 'bold',
				cursor: 'move'
			}}>
				♘
			</div>
		);
	}
}

Knight.propTypes = {
	connectDragSource: React.PropTypes.func.isRequired,
	isDragging: React.PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);