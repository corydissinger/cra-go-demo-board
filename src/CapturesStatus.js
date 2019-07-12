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
                <h3>{displayColor} captures - {captures}</h3>
            </div>
        );
    }
}

CapturesStatus.propTypes = {
    displayColor: PropTypes.oneOf([CONTENT.BLACK, CONTENT.WHITE]),
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