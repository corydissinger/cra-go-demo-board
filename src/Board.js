import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import * as FLAGS from './store/constants/flags';
import * as UTILS from './store/constants/utils';
import Tile from './Tile';

class Board extends Component {
    getHorizontalLettering() {
        const { mode } = this.props;

        // Yay hardcoding
        if (mode === FLAGS.GAME_9_x_9) {
            return UTILS.genCharArray('a', 'i');
        } else if (mode === FLAGS.GAME_13_x_13) {
            return UTILS.genCharArray('a', 'm');
        } else if (mode === FLAGS.GAME_19_x_19) {
            return UTILS.genCharArray('a', 't');
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
                {_.map(letterCoordinates, aLetterCoordinate => {
                    return this.renderRow(aLetterCoordinate, numberCoordinates);
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
        UTILS.calculateTileDimensions({
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