import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class GameWarning extends Component {
    getWarningClass() {
        const {
            koWarning,
            suicideWarning,
        } = this.props;

        if (koWarning || suicideWarning) {
            return 'game-warning';
        }

        return '';
    }

    getWarningText() {
        const {
            koWarning,
            suicideWarning,
        } = this.props;

        if (koWarning) {
            return 'Move violates Ko rule!';
        }

        if (suicideWarning) {
            return 'Move is suicidal!';
        }

        return '';
    }

    render() {
        return (
            <div className={this.getWarningClass()}>
                <h1>{this.getWarningText()}</h1>
            </div>
        );
    }
}

GameWarning.propTypes = {
    koWarning: PropTypes.bool.isRequired,
    suicideWarning: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
    const {
        koWarning,
        suicideWarning,
    } = state.game;

    return {
        koWarning,
        suicideWarning,
    };
};

export default connect(
    mapStateToProps,
)(GameWarning);