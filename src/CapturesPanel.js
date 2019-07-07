import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CapturesStatus from './CapturesStatus';
import * as FLAGS from './game/flags';
import { setCapturePanelHeight } from './store/actions/configuration';

class CapturesPanel extends Component {
    componentDidMount() {
        const capturesPanelHeight = document.getElementById('captures-panel').clientHeight;
        this.props.setCapturePanelHeight(capturesPanelHeight);
    }

    render() {
        return (
            <div
                className="flex-container"
                id="captures-panel"
            >
                <CapturesStatus color={FLAGS.STONE_BLACK} />
                <CapturesStatus color={FLAGS.STONE_WHITE} />
            </div>
        );
    }
}

CapturesPanel.propTypes = {
    setCapturePanelHeight: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    setCapturePanelHeight: (capturesPanelHeight) => {
        dispatch(setCapturePanelHeight(capturesPanelHeight));
    },
});

export default connect(
    null,
    mapDispatchToProps,
)(CapturesPanel);