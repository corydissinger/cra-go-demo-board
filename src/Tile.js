import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class Tile extends Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
    }

    render() {
        const {
            xCoordinate,
            yCoordinate,
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