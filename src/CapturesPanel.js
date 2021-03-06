import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CapturesStatus from './CapturesStatus';
import * as FLAGS from './game/flags';
import { setCapturePanelHeight } from './store/actions/configuration';

class CapturesPanel extends Component {
    componentDidMount() {
        const {
            isAbove,
            setCapturePanelHeight,
        } = this.props;

        // Is this DRY ? (insert butterfly meme here)
        if (isAbove) {
            const capturesPanelHeight = document.getElementById(this.getId()).clientHeight;
            setCapturePanelHeight(capturesPanelHeight);
        }
    }

    getId() {
        return this.props.isAbove ? "captures-panel-above" : "captures-panel-side";
    }

    render() {
        return (
            <div
                className="flex-container"
                id={this.getId()}
            >
                <CapturesStatus color={FLAGS.STONE_BLACK} />
                <CapturesStatus color={FLAGS.STONE_WHITE} />
            </div>
        );
    }
}

CapturesPanel.propTypes = {
    isAbove: PropTypes.bool.isRequired,
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