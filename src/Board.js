import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import * as FLAGS from './store/constants/flags';
import * as UTILS from './store/constants/utils';
import * as GAME_MATHS from './store/constants/gameMaths';
import Tile from './Tile';

class Board extends Component {
    getHorizontalLettering() {
        const { mode } = this.props;

        // Yay hardcoding
        if (mode === FLAGS.GAME_9_x_9) {
            return UTILS.genCharArray(FLAGS.MIN_COLUMN, FLAGS.MAX_9_x_9_COLUMN);
        } else if (mode === FLAGS.GAME_13_x_13) {
            return UTILS.genCharArray(FLAGS.MIN_COLUMN, FLAGS.MAX_13_x_13_COLUMN);
        } else if (mode === FLAGS.GAME_19_x_19) {
            return UTILS.genCharArray(FLAGS.MIN_COLUMN, FLAGS.MAX_19_x_19_COLUMN);
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

    renderRow(aNumberCoordinate, letterCoordinates) {
        const {
            mode,
            stoneRadius,
            tileDimensions,
        } = this.props;

        return <div
            key={`${mode}${aNumberCoordinate}`}
            className="flex-container"
        >
            {_.map(letterCoordinates, aLetterCoordinate => {
                return <Tile
                    key={`${mode}${aLetterCoordinate}${aNumberCoordinate}`}
                    colCoordinate={aLetterCoordinate}
                    rowCoordinate={aNumberCoordinate}
                    height={tileDimensions.height}
                    stoneRadius={stoneRadius}
                    width={tileDimensions.width}
                    mode={mode}
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
                {_.map(numberCoordinates, aNumberCoordinate => {
                    return this.renderRow(aNumberCoordinate, letterCoordinates);
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        mode,
        windowHeight,
        windowWidth,
        configurationHeight
    } = state;

    const tileDimensions =
        GAME_MATHS.calculateTileDimensions({
            configurationHeight,
            mode,
            windowHeight,
            windowWidth,
        });

    const stoneRadius = GAME_MATHS.stoneRadius(tileDimensions.height);

    console.log(`Configuration height: ${configurationHeight}, Window width: ${windowWidth}, window height: ${windowHeight}, calculated tile dims: ${JSON.stringify(tileDimensions)}`);

    return {
        mode,
        stoneRadius,
        tileDimensions,
    };
};

export default connect(mapStateToProps)(Board);