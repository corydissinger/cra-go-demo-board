import React, { Component } from 'react';
import Board from './Board';
import Configuration from './Configuration';
import { connect } from 'react-redux';
import { setWindowDimensions } from './store/actions/game';
import './styles/index.css';

class App extends Component {
    // Always seems like garbage when .bind() is used
    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
        return (
            <div className="App">
                <Configuration/>
                <Board/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mode: state.mode,
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