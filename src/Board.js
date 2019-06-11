import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import * as FLAGS from './store/constants/flags';
import Tile from './Tile';

class Board extends Component {
    // shameless https://stackoverflow.com/a/24597663
    genCharArray(charA, charZ) {
        let a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
        for (; i <= j; ++i) {
            a.push(String.fromCharCode(i));
        }
        return a;
    }

    getHorizontalLettering() {
        const { mode } = this.props;

        // Yay hardcoding
        if (mode === FLAGS.GAME_9_x_9) {
            return this.genCharArray('a', 'i');
        } else if (mode === FLAGS.GAME_13_x_13) {
            return this.genCharArray('a', 'm');
        } else if (mode === FLAGS.GAME_19_x_19) {
            return this.genCharArray('a', 't');
        } else {
            throw new Error('No known mode selected');
        }
    }

    getVerticalNumbering() {
        const { mode } = this.props;

        // Yay hardcoding
        if (mode === FLAGS.GAME_9_x_9) {
            return _.range(1, 10);
        } else if (mode === FLAGS.GAME_13_x_13) {
            return _.range(1, 14);
        } else if (mode === FLAGS.GAME_19_x_19) {
            return _.range(1, 20);
        } else {
            throw new Error('No known mode selected');
        }
    }

    // I may have reversed this? https://senseis.xmp.net/?Coordinates
    render() {
        const numberCoordinates = _.map(this.getVerticalNumbering(), n => n.toString());
        const letterCoordinates = this.getHorizontalLettering();

        return (
            <div id="board">
                {_.map(letterCoordinates, aLetterCoordinate => {
                    return _.map(numberCoordinates, aNumberCoordinate => {
                        return <Tile
                            xCoordinate={aLetterCoordinate}
                            yCoordinate={aNumberCoordinate}
                        />;
                    });
                })}
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