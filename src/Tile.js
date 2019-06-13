import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as UTILS from './store/constants/utils';
import * as FLAGS from './store/constants/flags';

class Tile extends Component {
    componentDidMount() {
        const {
            mode,
            xCoordinate,
            yCoordinate,
        } = this.props;

        if (UTILS.getCornerConstant(mode).includes(`${xCoordinate}${yCoordinate}`)) {
            this.drawCorner();
        } else if (UTILS.getSideConstant(mode).includes(`${xCoordinate}${yCoordinate}`)) {
            this.drawSide();
        } else {
            this.drawIntersection();
        }
    }
    
    drawSide() {
        const {
            height,
            width,
        } = this.props;
        
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        const midX = width / 2;
        const midY = height / 2;

        ctx.beginPath();
        ctx.moveTo(midX, 0);
        ctx.lineTo(midX, height);
        ctx.stroke();        
    }

    drawCorner() {
        const {
            height,
            mode,
            width,
            xCoordinate,
            yCoordinate,
        } = this.props;        
        
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        const cardinalDirection = UTILS.getCardinalDirection(mode, `${xCoordinate}${yCoordinate}`);

        ctx.beginPath();

        console.log(`Found direction: ${cardinalDirection} for ${xCoordinate}${yCoordinate}`);

        if (FLAGS.NORTH_EAST === cardinalDirection) {
            ctx.moveTo(0, 0);
            ctx.lineTo(width, 0);
            ctx.moveTo(width, 0);
            ctx.lineTo(width, height);
        } else if (FLAGS.SOUTH_EAST === cardinalDirection) {
            ctx.moveTo(width, 0);
            ctx.lineTo(width, height);
            ctx.moveTo(width, height);
            ctx.lineTo(0, height);
        } else if (FLAGS.SOUTH_WEST === cardinalDirection) {
            ctx.moveTo(width, height);
            ctx.lineTo(0, height);
            ctx.moveTo(0, height);
            ctx.lineTo(0, 0);
        } else if (FLAGS.NORTH_WEST === cardinalDirection) {
            ctx.moveTo(0, height);
            ctx.lineTo(0, 0);
            ctx.moveTo(0, 0);
            ctx.lineTo(width, 0);
        }

        ctx.stroke();        
    }
    
    drawIntersection() {
        const {
            height,
            width,
        } = this.props;        
        
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        const midX = width / 2;
        const midY = height / 2;

        ctx.beginPath();
        ctx.moveTo(0, midY);
        ctx.lineTo(width, midY);
        ctx.moveTo(midX, 0);
        ctx.lineTo(midX, height);
        ctx.stroke();
    }
    
    render() {
        const {
            height,
            width,
        } = this.props;

        return (
            <canvas
                height={height}
                width={width}
                ref="canvas"
            ></canvas>
        );
    }
}

Tile.propTypes = {
    xCoordinate: PropTypes.string.isRequired,
    yCoordinate: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    mode: PropTypes.string.isRequired,
};

// export default connect(mapStateToProps)(Tile);
export default Tile;