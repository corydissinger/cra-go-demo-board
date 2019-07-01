import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    showConfigurationPanel,
} from './store/actions/game';

class ConfigurationTitleTab extends Component {
    render() {
        const {
            showConfigurationPanel,
        } = this.props;

        return (
            <div id="configuration-title-tab" className="title-tab title-tab-rotate">
                <h1 onClick={showConfigurationPanel}>Configuration</h1>
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
    showConfigurationPanel: () => {
        dispatch(showConfigurationPanel())
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConfigurationTitleTab);