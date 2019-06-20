import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import * as FLAGS from './game/flags';
import * as UTILS from './game/utils';
import * as GAME_MATHS from './game/maths';
import Tile from './Tile';

class Board extends Component {
    getCoordinates() {
        const { mode } = this.props;

        // Yay hardcoding
        if (mode === FLAGS.GAME_9_x_9) {
            return FLAGS.GRID_COORDINATES_9_x_9;
        } else if (mode === FLAGS.GAME_13_x_13) {
            return FLAGS.GRID_COORDINATES_13_x_13;
        } else if (mode === FLAGS.GAME_19_x_19) {
            return FLAGS.GRID_COORDINATES_19_x_19;
        } else {
            throw new Error('No known mode selected');
        }
    }

    renderRow(aRow) {
        const {
            mode,
            stoneRadius,
            tileDimensions,
        } = this.props;

        const numberCoordinate = aRow[0].substring(1);

        return <div
            key={`${mode}${numberCoordinate}`}
            className="flex-container"
        >
            {_.map(aRow, aCoordinate => {
                const letterCoordinate = aCoordinate[0];

                return <Tile
                    key={`${mode}${letterCoordinate}${numberCoordinate}`}
                    colCoordinate={letterCoordinate}
                    rowCoordinate={numberCoordinate}
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
        const coordinates = this.getCoordinates();

        return (
            <div id="board">
                {_.map(coordinates, aRow => {
                    return this.renderRow(aRow);
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
    } = state.game;

    const boardDimensions =
        GAME_MATHS.calculateBoardDimensions({
            configurationHeight,
            windowHeight,
            windowWidth,
        });

    const tileDimensions =
        GAME_MATHS.calculateTileDimensions({
            mode,
            boardHeight: boardDimensions.height,
            boardWidth: boardDimensions.width,
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