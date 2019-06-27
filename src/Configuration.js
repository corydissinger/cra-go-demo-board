import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as FLAGS from './game/flags';
import {
    setMode,
} from './store/actions/game';

class Configuration extends Component {
    getHumanReadableMode() {
        const { mode } = this.props;

        if (mode === FLAGS.GAME_9_x_9) {
            return '9 x 9';
        } else if (mode === FLAGS.GAME_13_x_13) {
            return '13 x 13';
        } else if (mode === FLAGS.GAME_19_x_19) {
            return '19 x 19';
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
                            <option value={FLAGS.GAME_9_x_9}>9 x 9</option>
                            <option value={FLAGS.GAME_13_x_13}>13 x 13</option>
                            <option value={FLAGS.GAME_19_x_19}>19 x 19</option>
                        </select>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mode: state.game.mode,
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