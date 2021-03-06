import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import * as FLAGS from './game/flags';
import * as GAME_MATHS from './game/maths';
import * as UTILS from './game/utils';
import { setStone } from './store/actions/board';
import { setLastPreviewStone } from './store/actions/game';

class Board extends Component {
    constructor(props) {
        super(props);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onClick = this.onClick.bind(this);
        this.calculatePreviewStone = this.calculatePreviewStone.bind(this);
        // this.calculatePreviewStone = _.throttle(this.calculatePreviewStone.bind(this), 100);
    }

    componentDidMount() {
        this.renderWholeBoard();
    }

    componentDidUpdate(prevProps) {
        if (this.props.mode !== prevProps.mode ||
            !_.isEqual(this.props.tileDimensions, prevProps.tileDimensions)) {
            const { boardDimensions } = this.props;

            const canvasContext = this.getCanvasContextPresets();
            canvasContext.clearRect(0, 0, boardDimensions.width, boardDimensions.height);
            this.renderWholeBoard();
        } else if (!_.isEqual(this.props.alteredStones, prevProps.alteredStones)) {
            for (const coordinate of this.props.alteredStones) {
                const colCoordinate = coordinate[0];
                const rowCoordinate = Number.parseInt(coordinate.substring(1));
                const colOffset = UTILS.getOffsetFromCharacter(colCoordinate);
                const rowOffset = rowCoordinate - 1;
                const canvasContext = this.getCanvasContextPresets();

                this.drawTile(colCoordinate, rowCoordinate, canvasContext, colOffset, rowOffset);
            }
        }

        if (this.props.koWarning || this.props.suicideWarning) {
            this.resetLastPreviewStone(this.getCanvasContextPresets());
        }
    }

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

    getCanvasContextPresets() {
        const canvas = this.refs.canvas;
        const canvasContext = canvas.getContext('2d');
        canvasContext.lineWidth = 4; // 4 pixels is a little over a millimeter. Yeah I know mobile yada yada

        return canvasContext;
    }

    drawTile(colCoordinate, rowCoordinate, canvasContext, colOffset, rowOffset) {
        const {
            currentBoardState,
            mode,
        } = this.props;

        const stonePlaced = currentBoardState[`${colCoordinate}${rowCoordinate}`];

        if (stonePlaced === FLAGS.STONE_NONE) {
            this.clearCanvas(canvasContext, colOffset, rowOffset);
        }

        if (GAME_MATHS.getCornersConstant(mode).includes(`${colCoordinate}${rowCoordinate}`)) {
            this.drawCorner(colCoordinate, rowCoordinate, canvasContext, colOffset, rowOffset);
        } else if (GAME_MATHS.getSidesConstant(mode).includes(`${colCoordinate}${rowCoordinate}`)) {
            this.drawSide(colCoordinate, rowCoordinate, canvasContext, colOffset, rowOffset);
        } else if (GAME_MATHS.getStarPointsConstant(mode).includes(`${colCoordinate}${rowCoordinate}`)) {
            this.drawStarPoint(canvasContext, colOffset, rowOffset);
        } else {
            this.drawIntersection(canvasContext, colOffset, rowOffset);
        }

        if (stonePlaced && FLAGS.STONE_NONE !== stonePlaced) {
            this.drawStone(canvasContext, colOffset, rowOffset, stonePlaced);
        }
    }

    drawSide(colCoordinate, rowCoordinate, canvasContext, colOffset, rowOffset) {
        const {
            mode,
            tileDimensions,
        } = this.props;

        const cardinalDirection = GAME_MATHS.getCardinalDirection(mode, `${colCoordinate}${rowCoordinate}`);

        const min_X = tileDimensions.width * colOffset;
        const min_Y = tileDimensions.height * rowOffset;
        const mid_X = min_X + (tileDimensions.width / 2);
        const mid_Y = min_Y + (tileDimensions.height / 2);
        const max_X = min_X + tileDimensions.width;
        const max_Y = min_Y + tileDimensions.height;

        canvasContext.beginPath();
        canvasContext.font = '18px monospace';

        if (FLAGS.WEST === cardinalDirection) {
            canvasContext.moveTo(mid_X, min_Y);
            canvasContext.lineTo(mid_X, max_Y);
            canvasContext.moveTo(mid_X, mid_Y);
            canvasContext.lineTo(max_X, mid_Y);
            canvasContext.fillText(rowCoordinate, min_X, mid_Y + 4);
        } else if (FLAGS.NORTH === cardinalDirection) {
            canvasContext.moveTo(min_X, mid_Y);
            canvasContext.lineTo(max_X, mid_Y);
            canvasContext.moveTo(mid_X, mid_Y);
            canvasContext.lineTo(mid_X, max_Y);
            canvasContext.fillText(colCoordinate, mid_X, 18);
        } else if (FLAGS.EAST === cardinalDirection) {
            canvasContext.moveTo(mid_X, min_Y);
            canvasContext.lineTo(mid_X, max_Y);
            canvasContext.moveTo(min_X, mid_Y);
            canvasContext.lineTo(mid_X, mid_Y);
            canvasContext.fillText(rowCoordinate, max_X - 20, mid_Y + 4);
        } else if (FLAGS.SOUTH === cardinalDirection) {
            canvasContext.moveTo(min_X, mid_Y);
            canvasContext.lineTo(max_X, mid_Y);
            canvasContext.moveTo(mid_X, min_Y);
            canvasContext.lineTo(mid_X, mid_Y);
            canvasContext.fillText(colCoordinate, mid_X, max_Y - 10);
        }

        canvasContext.stroke();
    }

    drawCorner(colCoordinate, rowCoordinate, canvasContext, colOffset, rowOffset) {
        const {
            mode,
            tileDimensions,
        } = this.props;

        const cardinalDirection = GAME_MATHS.getCardinalDirection(mode, `${colCoordinate}${rowCoordinate}`);

        const min_X = tileDimensions.width * colOffset;
        const min_Y = tileDimensions.height * rowOffset;
        const mid_X = min_X + (tileDimensions.width / 2);
        const mid_Y = min_Y + (tileDimensions.height / 2);
        const max_X = min_X + tileDimensions.width;
        const max_Y = min_Y + tileDimensions.height;

        canvasContext.beginPath();
        canvasContext.font = '18px monospace';

        if (FLAGS.NORTH_EAST === cardinalDirection) {
            canvasContext.moveTo(min_X, mid_Y);
            canvasContext.lineTo(mid_X, mid_Y);
            canvasContext.lineTo(mid_X, max_Y);
            canvasContext.fillText(colCoordinate, mid_X - 4, 18);
            canvasContext.fillText(rowCoordinate, max_X - 20, mid_Y + 4);
        } else if (FLAGS.SOUTH_EAST === cardinalDirection) {
            canvasContext.moveTo(mid_X, min_Y);
            canvasContext.lineTo(mid_X, mid_Y);
            canvasContext.lineTo(min_X, mid_Y);
            canvasContext.fillText(colCoordinate, mid_X - 4, max_Y - 10);
            canvasContext.fillText(rowCoordinate, max_X - 20, mid_Y);
        } else if (FLAGS.SOUTH_WEST === cardinalDirection) {
            canvasContext.moveTo(max_X, mid_Y);
            canvasContext.lineTo(mid_X, mid_Y);
            canvasContext.lineTo(mid_X, min_Y);
            canvasContext.fillText(colCoordinate, mid_X, max_Y - 10);
            canvasContext.fillText(rowCoordinate, min_X, mid_Y);
        } else if (FLAGS.NORTH_WEST === cardinalDirection) {
            canvasContext.moveTo(mid_X, max_Y);
            canvasContext.lineTo(mid_X, mid_Y);
            canvasContext.lineTo(max_X, mid_Y);
            canvasContext.fillText(colCoordinate, mid_X, 18);
            canvasContext.fillText(rowCoordinate, min_X, mid_Y);
        }

        canvasContext.stroke();
    }

    drawIntersection(canvasContext, colOffset, rowOffset) {
        const { tileDimensions } = this.props;

        const min_X = tileDimensions.width * colOffset;
        const min_Y = tileDimensions.height * rowOffset;
        const mid_X = min_X + (tileDimensions.width / 2);
        const mid_Y = min_Y + (tileDimensions.height / 2);
        const max_X = min_X + tileDimensions.width;
        const max_Y = min_Y + tileDimensions.height;

        canvasContext.beginPath();
        canvasContext.moveTo(min_X, mid_Y);
        canvasContext.lineTo(max_X, mid_Y);
        canvasContext.moveTo(mid_X, min_Y);
        canvasContext.lineTo(mid_X, max_Y);
        canvasContext.stroke();
    }

    drawStarPoint(canvasContext, colOffset, rowOffset) {
        const { tileDimensions } = this.props;

        const min_X = tileDimensions.width * colOffset;
        const min_Y = tileDimensions.height * rowOffset;
        const mid_X = min_X + (tileDimensions.width / 2);
        const mid_Y = min_Y + (tileDimensions.height / 2);
        const max_X = min_X + tileDimensions.width;
        const max_Y = min_Y + tileDimensions.height;

        canvasContext.beginPath();
        canvasContext.arc(mid_X, mid_Y, 5, 0, 2 * Math.PI);
        canvasContext.fillStyle = '#000000';
        canvasContext.fill();
        canvasContext.moveTo(min_X, mid_Y);
        canvasContext.lineTo(max_X, mid_Y);
        canvasContext.moveTo(mid_X, min_Y);
        canvasContext.lineTo(mid_X, max_Y);
        canvasContext.stroke();
    }

    drawStone(canvasContext, colOffset, rowOffset, stonePlaced) {
        this.drawStoneInternal(FLAGS.STONE_BLACK === stonePlaced, canvasContext, colOffset, rowOffset);
    }

    drawStoneInternal(isBlack, canvasContext, colOffset, rowOffset) {
        const {
            stoneRadius,
            tileDimensions,
        } = this.props;

        const min_X = tileDimensions.width * colOffset;
        const min_Y = tileDimensions.height * rowOffset;
        const mid_X = min_X + (tileDimensions.width / 2);
        const mid_Y = min_Y + (tileDimensions.height / 2);

        canvasContext.lineWidth = 1; // 4 pixels is a little over a millimeter. Yeah I know mobile yada yada

        canvasContext.beginPath();
        canvasContext.arc(mid_X, mid_Y, stoneRadius, 0, 2 * Math.PI);

        if (isBlack) {
            canvasContext.fillStyle = '#000000';
            canvasContext.fill();
        } else {
            canvasContext.fillStyle = '#FFFFFF';
            canvasContext.fill();
        }

        canvasContext.stroke();
    }

    resetLastPreviewStone(canvasContext) {
        const { lastPreviewStone } = this.props;

        if (lastPreviewStone) {
            const previousColOffset = UTILS.getOffsetFromCharacter(lastPreviewStone[0]);
            const previousRowOffset = Number.parseInt(lastPreviewStone.substring(1)) - 1;

            this.clearCanvas(canvasContext, previousColOffset, previousRowOffset);
            this.drawTile(lastPreviewStone[0], lastPreviewStone.substring(1), canvasContext, previousColOffset, previousRowOffset);
        }
    }

    showPreviewStone(colOffset, rowOffset) {
        const {
            currentBoardState,
            lastPreviewStone,
            setLastPreviewStone,
            turnColor,
        } = this.props;

        const canvasContext = this.getCanvasContextPresets();

        const currentColCoordinate = UTILS.getCharacterFromOffset(colOffset);
        const currentRowCoordinate = rowOffset + 1;

        const coordinate = `${currentColCoordinate}${currentRowCoordinate}`;

        // Don't go through re-render if it's the same stone
        if (coordinate === lastPreviewStone) {
            return;
        }

        // DRY but lame?
        this.resetLastPreviewStone(canvasContext);

        // Don't render preview stone if a stone is already there
        if (currentBoardState[coordinate] && currentBoardState[coordinate] !== FLAGS.STONE_NONE) {
            return;
        }

        setLastPreviewStone(coordinate);
        this.drawStoneInternal(FLAGS.TURN_BLACK === turnColor, canvasContext, colOffset, rowOffset);
    }

    clearCanvas(canvasContext, colOffset, rowOffset) {
        const { tileDimensions } = this.props;

        const min_X = tileDimensions.width * colOffset;
        const min_Y = tileDimensions.height * rowOffset;

        canvasContext.clearRect(min_X, min_Y, tileDimensions.width, tileDimensions.height);
    }

    renderRow(aRow, rowIndex, canvasContext) {
        const numberCoordinate = aRow[0].substring(1);

        _.forEach(aRow, (aCoordinate, colIndex) => {
            const letterCoordinate = aCoordinate[0];
            
            this.drawTile(letterCoordinate, numberCoordinate, canvasContext, colIndex, rowIndex);
        });
    }

    renderWholeBoard() {
        const coordinates = this.getCoordinates();
        const canvasContext = this.getCanvasContextPresets();

        _.forEach(coordinates, (aRow, index) => {
            this.renderRow(aRow, index, canvasContext);
        });
    }

    getOffsetsWithinBounds({x, y}) {
        const {
            tileDimensions,
            maxOffsets,
        } = this.props;
        const offsets = GAME_MATHS.getOffsets({ x, y, tileDimensions});

        if (offsets.col > maxOffsets.col || offsets.row > maxOffsets.row) {
            throw new Error(`Offsets out of bounds: ${JSON.stringify(offsets)}, bounds: ${JSON.stringify(maxOffsets)}`);
        }

        return offsets;
    }

    calculatePreviewStone(x, y) {
        let offsets;

        try {
            offsets = this.getOffsetsWithinBounds({ x, y });
        } catch (e) {
            console.log(e);
            return;
        }

        this.showPreviewStone(offsets.col, offsets.row);
    }

    onClick(e) {
        const {
            capturesPanelHeight,
            currentBoardState,
            setStone,
            koWarning,
            suicideWarning,
        } = this.props;

        if (koWarning || suicideWarning) {
            return;
        }

        let offsets;

        try {
            offsets = this.getOffsetsWithinBounds({
                x: e.clientX,
                y: e.clientY - capturesPanelHeight + window.scrollY,
            });
        } catch (e) {
            console.log(e);
            return;
        }

        const coordinates = GAME_MATHS.deriveCoordinatesFromOffsets(offsets);
        const theCoordinate = `${coordinates.colCoordinate}${coordinates.rowCoordinate}`;

        if (currentBoardState[theCoordinate] && currentBoardState[theCoordinate] !== FLAGS.STONE_NONE) {
            return;
        }

        // a little hacky, wutevs
        setStone({ ...coordinates });
    }

    onMouseOut() {
        const canvasContext = this.getCanvasContextPresets();

        // DRY but lame?
        this.resetLastPreviewStone(canvasContext);
        this.props.setLastPreviewStone('');
    }

    onMouseMove(e) {
        const {
            koWarning,
            suicideWarning,
        } = this.props;

        if (koWarning || suicideWarning) {
            return;
        }

        const clientX = e.clientX;
        const clientY = e.clientY - this.props.capturesPanelHeight + window.scrollY;

        this.calculatePreviewStone(clientX, clientY);
    }

    // I may have reversed this? https://senseis.xmp.net/?Coordinates
    render() {
        const { boardDimensions } = this.props;

        return (
            <canvas
                height={boardDimensions.height}
                width={boardDimensions.width}
                onMouseMove={this.onMouseMove}
                onMouseOut={this.onMouseOut}
                onClick={this.onClick}
                ref="canvas"
            />
        );
    }
}

Board.propTypes = {
    alteredStones: PropTypes.objectOf(UTILS.validateCoordinates),
    lastPreviewStone: UTILS.validateCoordinate,

    mode: PropTypes.oneOf([FLAGS.GAME_9_x_9, FLAGS.GAME_13_x_13, FLAGS.GAME_19_x_19]).isRequired,
    turnColor: PropTypes.oneOf([FLAGS.TURN_BLACK, FLAGS.TURN_WHITE]).isRequired,

    koWarning: PropTypes.bool.isRequired,
    suicideWarning: PropTypes.bool.isRequired,

    capturesPanelHeight: PropTypes.number.isRequired,

    boardDimensions: PropTypes.exact({
        height: PropTypes.number,
        width: PropTypes.number,
    }),

    tileDimensions: PropTypes.exact({
        height: PropTypes.number,
        width: PropTypes.number,
    }),

    maxOffsets: PropTypes.exact({
        col: PropTypes.number,
        row: PropTypes.number,
    }),

    stoneRadius: PropTypes.number.isRequired,

    setStone: PropTypes.func.isRequired,
    setLastPreviewStone: PropTypes.func.isRequired,
};

// TODO (history feature):
// Selectors should be used at the very least to make this component
// unaware of which snapshot of the game state it's rendering.
// altered stones should be calculated behind the scenes (it currently is,
// but will also need to be diffed when merely changing points
// in history)
const mapStateToProps = (state) => {
    const {
        lastPreviewStone,
        turnColor,
        koWarning,
        suicideWarning,
    } = state.game;

    const {
        boardDimensions,
        capturesPanelHeight,
        maxOffsets,
        mode,
        tileDimensions,
    } = state.configuration;

    const {
        alteredStones,
        currentBoardState,
    } = state.board;

    const stoneRadius = GAME_MATHS.stoneRadius(tileDimensions.height);

    return {
        alteredStones,
        capturesPanelHeight,
        currentBoardState,
        lastPreviewStone,
        maxOffsets,
        mode,
        stoneRadius,
        tileDimensions,
        boardDimensions,
        turnColor,
        koWarning,
        suicideWarning,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStone: ({ colCoordinate, rowCoordinate }) => {
            dispatch(setStone({ colCoordinate, rowCoordinate }));
        },
        setLastPreviewStone: (coordinate) => {
            dispatch(setLastPreviewStone(coordinate));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Board);