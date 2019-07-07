import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetWarnings } from './store/actions/game';
import { setWindowDimensions } from './store/actions/configuration';
import './styles/index.css';
import Board from './Board';
import Configuration from './Configuration';
import CapturesPanel from './CapturesPanel';
import GameWarning from './GameWarning';

class App extends Component {
    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.props.setWindowDimensions(window.innerWidth, window.innerHeight);
    }

    onClick() {
        const {
            koWarning,
            suicideWarning,
            resetWarnings,
        } = this.props;

        if (koWarning || suicideWarning) {
            resetWarnings();
        }
    }

    render() {
        const { canRender } = this.props;

        return (
            <main onClick={this.onClick}>
                <CapturesPanel isAbove={true} />
                <div className="App flex-wrap-container">
                    <div className="board-container">
                        {canRender && <Board/>}
                        {!canRender && <h1>Please wait...</h1>}
                    </div>
                    <div className="configuration-container">
                        <CapturesPanel isAbove={false} />
                        <Configuration/>
                    </div>
                </div>
                <GameWarning />
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        koWarning,
        suicideWarning,
    } = state.game;

    const {
        canRender,
        mode,
    } = state.configuration;

    return {
        mode,
        canRender,
        koWarning,
        suicideWarning,
    };
};

const mapDispatchToProps = dispatch => ({
    resetWarnings: () => {
        dispatch(resetWarnings());
    },
    setWindowDimensions: (windowWidth, windowHeight) => {
        dispatch(setWindowDimensions(windowWidth, windowHeight))
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);