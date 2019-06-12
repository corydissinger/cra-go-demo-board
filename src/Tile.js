import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Tile extends Component {
    componentDidMount() {
        const {
            height,
            width,
            xCoordinate,
            yCoordinate,
        } = this.props;

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        const midX = width / 2;
        const midY = height / 2;

        ctx.beginPath();
        ctx.moveTo(midX, midY);
        ctx.lineTo(width, height);
        ctx.stroke();
        console.log(`Mounted ${xCoordinate}${yCoordinate}`);
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
};

// export default connect(mapStateToProps)(Tile);
export default Tile;