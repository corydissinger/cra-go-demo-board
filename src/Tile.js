import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Tile extends Component {
    componentDidMount() {
        const {
            xCoordinate,
            yCoordinate,
        } = this.props;

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        ctx.font = '24px serif';
        ctx.fillText(`${xCoordinate}${yCoordinate}`, 0, 0);
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
                style={{ border: '1px solid #000000'}}
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