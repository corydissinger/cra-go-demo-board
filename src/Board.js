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

    renderRow(aLetterCoordinate, numberCoordinates) {
        const {
            mode,
            tileDimensions,
        } = this.props;

        return <div
            key={`${mode}${aLetterCoordinate}`}
            className="flex-container"
        >
            {_.map(numberCoordinates, aNumberCoordinate => {
                return <Tile
                    key={`${mode}${aNumberCoordinate}`}
                    xCoordinate={aLetterCoordinate}
                    yCoordinate={aNumberCoordinate}
                    height={tileDimensions.height}
                    width={tileDimensions.width}
                />;
            })}
        </div>;
    }

    // I may have reversed this? https://senseis.xmp.net/?Coordinates
    render() {
        const numberCoordinates = _.map(this.getVerticalNumbering(), n => n.toString());
        const letterCoordinates = this.getHorizontalLettering();

        return (
            <div id="board">
                {_.map(letterCoordinates, aLetterCoordinate => {
                    return this.renderRow(aLetterCoordinate, numberCoordinates);
                })}
            </div>
        );
    }
}

// Maybe make tests for this stuff?
const gobanWidthToHeightRatio = Number(1.071428571428571);
const gobanHeightToWidthRatio = Number(0.933333333333333);

//https://senseis.xmp.net/?EquipmentDimensions
const calculateTileDimensions = ({
    configurationHeight,
    mode,
    windowHeight,
    windowWidth,
}) => {
    const workingHeight = windowHeight - configurationHeight;
    const desiredWidth = workingHeight * gobanHeightToWidthRatio;
    let tileRatio = 0;

    if (FLAGS.GAME_9_x_9 === mode) {
        tileRatio = Number(1/9);
    } else if (FLAGS.GAME_13_x_13 === mode) {
        tileRatio = Number(1/13);
    } else if (FLAGS.GAME_19_x_19 === mode) {
        tileRatio = Number(1/19);
    } else {
        throw new Error('No known mode');
    }

    return {
        height: workingHeight * tileRatio,
        width: desiredWidth * tileRatio,
    };
};

const mapStateToProps = (state) => {
    const {
        mode,
        windowHeight,
        windowWidth,
        configurationHeight
    } = state;

    const tileDimensions =
        calculateTileDimensions({
            configurationHeight,
            mode,
            windowHeight,
            windowWidth,
        });

    console.log(`Configuration height: ${configurationHeight}, Window width: ${windowWidth}, window height: ${windowHeight}, calculated tile dims: ${JSON.stringify(tileDimensions)}`);

    return {
        mode,
        tileDimensions,
    };
};

export default connect(mapStateToProps)(Board);