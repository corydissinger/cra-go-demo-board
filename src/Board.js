import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import * as FLAGS from './game/flags';
import * as GAME_MATHS from './game/maths';

class Board extends Component {
    constructor(props) {
        super(props);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.calculatePreviewStone = _.throttle(this.calculatePreviewStone.bind(this), 100);
    }

    componentDidMount() {
        this.renderWholeBoard();
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
        const { isKoViolation } = this.props;

        const canvas = this.refs.canvas;
        const canvasContext = canvas.getContext('2d');
        canvasContext.lineWidth = 4; // 4 pixels is a little over a millimeter. Yeah I know mobile yada yada

        if (isKoViolation) {
            canvasContext.strokeStyle = '#FF0000';
        }

        return canvasContext;
    }

    drawTile(colCoordinate, rowCoordinate, canvasContext, colOffset, rowOffset) {
        const {
            currentBoardState,
            mode,
        } = this.props;

        const stonePlaced = currentBoardState[`${colCoordinate}${rowCoordinate}`];

        // Render the stone first, that way we can clear appropriately
        // when the component is updated.
        if (!stonePlaced || FLAGS.STONE_NONE === stonePlaced) {
            this.clearCanvas(canvasContext, colOffset, rowOffset);
        } else {
            this.drawStone(canvasContext, colOffset, rowOffset, stonePlaced);
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

        canvasContext.beginPath();
        canvasContext.arc(mid_X, mid_Y, stoneRadius, 0, 2 * Math.PI);

        if (isBlack) {
            canvasContext.fillStyle = '#000000';
            canvasContext.fill();
        }

        canvasContext.stroke();
    }

    showPreviewStone(canvasContext, colOffset, rowOffset) {
        const { turnColor } = this.props;

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

    calculatePreviewStone(x, y) {
        const {
            currentBoardState,
            tileDimensions,
            turnColor,
        } = this.props;

        // yeah yeah it's seemingly flipped
        const assumedCol = Math.ceil(x / tileDimensions.height);
        const assumedRow = Math.ceil(y / tileDimensions.width);

        console.log(`X: ${x}, Y: ${y}, assumed col: ${assumedCol}, assumed row: ${assumedRow}`);
    }

    onMouseMove(e) {
        const clientX = e.clientX;
        const clientY = e.clientY;

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
                ref="canvas"
            />
        );
    }
}

const mapStateToProps = (state) => {
    const {
        mode,
        boardDimensions,
        tileDimensions,
        turnColor,
    } = state.game;

    const {
        currentBoardState,
        koViolation,
    } = state.board;

    const stoneRadius = GAME_MATHS.stoneRadius(tileDimensions.height);

    return {
        currentBoardState,
        koViolation,
        mode,
        stoneRadius,
        tileDimensions,
        boardDimensions,
        turnColor,
    };
};

export default connect(mapStateToProps)(Board);