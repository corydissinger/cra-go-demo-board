import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as FLAGS from './game/flags';
import * as CONTENT from './game/content';

class CapturesStatus extends Component {
    render() {
        const {
            captures,
            displayColor,
        } = this.props;

        return (
            <div className="captures-status">
                <h1>{displayColor} captures - {captures}</h1>
            </div>
        );
    }
}

// TODO: enforce explicit values
CapturesStatus.propTypes = {
    displayColor: PropTypes.string.isRequired,
    captures: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    const {
        blackCaptures,
        whiteCaptures,
    } = state.game;

    const { color } = ownProps;
    const isBlack = color === FLAGS.STONE_BLACK;

    return {
        captures: isBlack ? blackCaptures : whiteCaptures,
        displayColor: isBlack ? CONTENT.BLACK : CONTENT.WHITE,
    };
};

export default connect(
    mapStateToProps,
)(CapturesStatus);