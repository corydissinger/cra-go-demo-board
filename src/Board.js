import React, { Component } from 'react';
import { connect } from 'react-redux';

class Board extends Component {
    render() {
        const { mode } = this.props;

        return (
            <div id="board">
                <h1>This is a board</h1>
                <h3>{mode}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mode: state.mode,
    };
};

export default connect(mapStateToProps)(Board);