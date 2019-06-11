import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class Tile extends Component {
    // componentDidMount() {
    //     const canvas = this.refs.canvas;
    //     const ctx = canvas.getContext("2d");
    // }

    render() {
        return (
            <h3>{this.props.xCoordinate},{this.props.yCoordinate}</h3>
        );
    }
}

Tile.propTypes = {
    xCoordinate: PropTypes.string.isRequired,
    yCoordinate: PropTypes.string.isRequired,
};

// export default connect(mapStateToProps)(Tile);
export default Tile;