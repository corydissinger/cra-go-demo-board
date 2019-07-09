import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as FLAGS from './game/flags';
import * as CONTENT from './game/content';
import { setMode } from './store/actions/configuration';

class Configuration extends Component {
    getHumanReadableMode() {
        const { mode } = this.props;

        if (mode === FLAGS.GAME_9_x_9) {
            return CONTENT.MODE_9_x_9;
        } else if (mode === FLAGS.GAME_13_x_13) {
            return CONTENT.MODE_13_x_13;
        } else if (mode === FLAGS.GAME_19_x_19) {
            return CONTENT.MODE_19_x_19;
        } else {
            throw new Error('No known mode selected');
        }
    }

    render() {
        const {
            mode,
            setMode,
        } = this.props;

        return (
            <div id="configuration">
                <h1>Go Demo Board</h1>
                <div className="flex-container">
                    <div>
                        <h4>Mode: {this.getHumanReadableMode()}</h4>
                        <h4>Turn Number: {this.props.turnNumber}</h4>
                    </div>
                    <form>
                        <select
                            onChange={e => setMode(e.target.value)}
                            value={mode}
                        >
                            <option value={FLAGS.GAME_9_x_9}>{CONTENT.MODE_9_x_9}</option>
                            <option value={FLAGS.GAME_13_x_13}>{CONTENT.MODE_13_x_13}</option>
                            <option value={FLAGS.GAME_19_x_19}>{CONTENT.MODE_19_x_19}</option>
                        </select>
                    </form>
                </div>
            </div>
        );
    }
}

Configuration.propTypes = {
    turnNumber: PropTypes.number.isRequired,
    mode: PropTypes.oneOf([FLAGS.GAME_9_x_9, FLAGS.GAME_13_x_13, FLAGS.GAME_19_x_19]).isRequired,
    setMode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        mode: state.configuration.mode,
        turnNumber: state.game.turnNumber,
    };
};

const mapDispatchToProps = dispatch => ({
    setMode: (mode) => {
        dispatch(setMode(mode))
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Configuration);