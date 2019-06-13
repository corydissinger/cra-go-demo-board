import React, { Component } from 'react';
import Board from './Board';
import Configuration from './Configuration';
import { connect } from 'react-redux';
import { setWindowDimensions } from './store/actions/game';
import * as FLAGS from './store/constants/flags';
import './styles/index.css';

class App extends Component {
    // Always seems like garbage when .bind() is used
    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        
        console.log(FLAGS.CORNERS_9_x_9);
        console.log(FLAGS.CORNERS_13_x_13);
        console.log(FLAGS.CORNERS_19_x_19);
        console.log(FLAGS.SIDES_9_x_9);
        console.log(FLAGS.SIDES_13_x_13);
        console.log(FLAGS.SIDES_19_x_19);        
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

    render() {
        const { canRender } = this.props;

        return (
            <div className="App">
                <Configuration/>
                {canRender && <Board/>}
                {!canRender && <h1>Please wait...</h1>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        mode,
        windowHeight,
        windowWidth,
    } = state;

    return {
        mode,
        canRender: windowWidth && windowHeight,
    };
};

const mapDispatchToProps = dispatch => ({
    setWindowDimensions: (windowWidth, windowHeight) => {
        dispatch(setWindowDimensions(windowWidth, windowHeight))
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);