import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as FLAGS from './store/constants/flags';

class Tile extends Component {
    componentDidMount() {
        const {
            mode,
            xCoordinate,
            yCoordinate,
        } = this.props;

        if (this.getCornerConstant(mode).includes(`${xCoordinate}${yCoordinate}`)) {
            this.drawCorner();
        } else if (this.getSideConstant(mode).includes(`${xCoordinate}${yCoordinate}`)) {
            this.drawSide();
        } else {
            this.drawIntersection();
        }
    }
    
    getCornerConstant(mode) {
        if (FLAGS.GAME_9_x_9 === mode) {
            return FLAGS.CORNERS_9_x_9;
        } else if (FLAGS.GAME_13_x_13 === mode) {
            return FLAGS.CORNERS_13_x_13;
        } else if (FLAGS.GAME_19_x_19 === mode) {
            return FLAGS.CORNERS_19_x_19;
        }
    }

    getSideConstant(mode) {
        if (FLAGS.GAME_9_x_9 === mode) {
            return FLAGS.SIDES_9_x_9;
        } else if (FLAGS.GAME_13_x_13 === mode) {
            return FLAGS.SIDES_13_x_13;
        } else if (FLAGS.GAME_19_x_19 === mode) {
            return FLAGS.SIDES_19_x_19;
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
            width,
        } = this.props;        
        
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        const midX = width / 2;
        const midY = height / 2;

        ctx.beginPath();
        ctx.moveTo(width, height);
        ctx.lineTo(midX, midY);
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
        ctx.lineTo(width, height);
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