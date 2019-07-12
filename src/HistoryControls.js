import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HistoryControls extends Component {
    getPlayPauseTitle() {
        if (this.props.isPlaying) {
            return 'Pause real time play.';
        } else {
            return 'Play moves in real time.';
        }
    }

    getPlayPauseIcon() {
        if (this.props.isPlaying) {
            return 'fas fa-pause';
        } else {
            return 'fas fa-play';
        }
    }

    render() {
        return (
            <div className="flex-container history-controls">
                <button
                    className="history-button"
                    title="Reset to beginning of current branch."
                >
                    <i className="fas fa-backward" />
                </button>
                <button
                    className="history-button"
                    title="Backwards one move."
                >
                    <i className="fas fa-caret-left" />
                </button>
                <button
                    className="history-button"
                    title={this.getPlayPauseTitle()}
                >
                    <i className={this.getPlayPauseIcon()} />
                </button>
                <button
                    className="history-button"
                    title="Forwards one move."
                >
                    <i className="fas fa-caret-right" />
                </button>
                <button
                    className="history-button"
                    title="Skip to the end of current branch."
                >
                    <i className="fas fa-forward" />
                </button>
            </div>
        );
    }
}

HistoryControls.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
    const {
        isPlaying,
    } = state.configuration;

    return {
        isPlaying,
    };
};

export default connect(
    mapStateToProps,
)(HistoryControls);