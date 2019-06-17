import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as UTILS from './store/constants/gameMaths';
import * as FLAGS from './store/constants/flags';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.showStone = this.showStone.bind(this);
        this.hideStone = this.hideStone.bind(this);
        this.drawTile = this.drawTile.bind(this);
    }

    componentDidMount() {
        this.drawTile();
    }

    componentDidUpdate() {
        this.drawTile();
    }

    drawTile() {
        const {
            mode,
            rowCoordinate,
            colCoordinate,
        } = this.props;

        if (UTILS.getCornersConstant(mode).includes(`${colCoordinate}${rowCoordinate}`)) {
            this.drawCorner();
        } else if (UTILS.getSidesConstant(mode).includes(`${colCoordinate}${rowCoordinate}`)) {
            this.drawSide();
        } else {
            this.drawIntersection();
        }
    }

    drawSide() {
        const {
            height,
            mode,
            width,
            rowCoordinate,
            colCoordinate,
        } = this.props;
        
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        const cardinalDirection = UTILS.getCardinalDirection(mode, `${colCoordinate}${rowCoordinate}`);

        const midX = width / 2;
        const midY = height / 2;

        ctx.beginPath();
        ctx.font = '18px monospace';

        if (FLAGS.WEST === cardinalDirection) {
            ctx.moveTo(midX, 0);
            ctx.lineTo(midX, height);
            ctx.moveTo(midX, midY);
            ctx.lineTo(width, midY);
            ctx.fillText(rowCoordinate, 0, midY);
        } else if (FLAGS.NORTH === cardinalDirection) {
            ctx.moveTo(0, midY);
            ctx.lineTo(width, midY);
            ctx.moveTo(midX, midY);
            ctx.lineTo(midX, height);
            ctx.fillText(colCoordinate, midX, 18);
        } else if (FLAGS.EAST === cardinalDirection) {
            ctx.moveTo(midX, 0);
            ctx.lineTo(midX, height);
            ctx.moveTo(0, midY);
            ctx.lineTo(midX, midY);
            ctx.fillText(rowCoordinate, width - 20, midY);
        } else if (FLAGS.SOUTH === cardinalDirection) {
            ctx.moveTo(0, midY);
            ctx.lineTo(width, midY);
            ctx.moveTo(midX, 0);
            ctx.lineTo(midX, midY);
            ctx.fillText(colCoordinate, midX, height - 20);
        }

        ctx.stroke();
    }

    drawCorner() {
        const {
            height,
            mode,
            width,
            rowCoordinate,
            colCoordinate,
        } = this.props;        
        
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        const cardinalDirection = UTILS.getCardinalDirection(mode, `${colCoordinate}${rowCoordinate}`);

        const midX = width / 2;
        const midY = height / 2;

        ctx.beginPath();
        ctx.font = '18px monospace';

        if (FLAGS.NORTH_EAST === cardinalDirection) {
            ctx.moveTo(0, midY);
            ctx.lineTo(midX, midY);
            ctx.lineTo(midX, height);
            ctx.fillText(colCoordinate, midX, 18);
            ctx.fillText(rowCoordinate, width - 20, midY);
        } else if (FLAGS.SOUTH_EAST === cardinalDirection) {
            ctx.moveTo(midX, 0);
            ctx.lineTo(midX, midY);
            ctx.lineTo(0, midY);
            ctx.fillText(colCoordinate, midX, height - 20);
            ctx.fillText(rowCoordinate, width - 20, midY);
        } else if (FLAGS.SOUTH_WEST === cardinalDirection) {
            ctx.moveTo(width, midY);
            ctx.lineTo(midX, midY);
            ctx.lineTo(midX, 0);
            ctx.fillText(colCoordinate, midX, height - 20);
            ctx.fillText(rowCoordinate, 0, midY);
        } else if (FLAGS.NORTH_WEST === cardinalDirection) {
            ctx.moveTo(midX, height);
            ctx.lineTo(midX, midY);
            ctx.lineTo(width, midY);
            ctx.fillText(colCoordinate, midX, 18);
            ctx.fillText(rowCoordinate, 0, midY);
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

    showStone() {
        const {
            height,
            stoneRadius,
            width,
            rowCoordinate,
            colCoordinate,
        } = this.props;

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        const midX = width / 2;
        const midY = height / 2;

        ctx.beginPath();
        ctx.arc(midX, midY, stoneRadius, 0, 2 * Math.PI);
        ctx.stroke();
        console.log(`Showing stone for ${colCoordinate}${rowCoordinate} with r ${stoneRadius}`);
    }

    hideStone() {
        const {
            height,
            width,
        } = this.props;

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, width, height);
        this.drawTile();
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
                onMouseOver={this.showStone}
                onMouseOut={this.hideStone}
            ></canvas>
        );
    }
}

Tile.propTypes = {
    rowCoordinate: PropTypes.string.isRequired,
    colCoordinate: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    stoneRadius: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    mode: PropTypes.string.isRequired,
};

// export default connect(mapStateToProps)(Tile);
export default Tile;