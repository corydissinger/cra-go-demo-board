import React, { Component } from 'react';
import { connect } from 'react-redux';

class Configuration extends Component {
    render() {
        const { mode } = this.props;

        return (
            <div id="configuration">
                <h1>This is a configuration</h1>
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

export default connect(mapStateToProps)(Configuration);