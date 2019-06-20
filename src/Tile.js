import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as UTILS from './game/maths';
import * as FLAGS from './game/flags';
import { setStone } from './store/actions/board';
import { placedStoneSelector } from './store/selectors/board';
import { connect } from 'react-redux';

class Tile extends Component {
    constructor(props) {
        super(props);

        this.showPreviewStone = this.showPreviewStone.bind(this);
        this.hidePreviewStone = this.hidePreviewStone.bind(this);
        this.drawTile = this.drawTile.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    componentDidMount() {
        this.drawTile();
    }

    componentDidUpdate() {
        console.log('%c UPDATING', 'background: #222; color: #bada55');
        this.drawTile();
    }

    drawTile() {
        const {
            mode,
            rowCoordinate,
            colCoordinate,
            stonePlaced,
        } = this.props;

        if (UTILS.getCornersConstant(mode).includes(`${colCoordinate}${rowCoordinate}`)) {
            this.drawCorner();
        } else if (UTILS.getSidesConstant(mode).includes(`${colCoordinate}${rowCoordinate}`)) {
            this.drawSide();
        } else {
            this.drawIntersection();
        }
        
        if (FLAGS.STONE_NONE !== stonePlaced) {
            this.drawStone();
        }
    }

    drawSide() {
        const {
            height,
            mode,
            width,
            rowCoordinate,
            colCoordinate,
        } = this.props;
        
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        const cardinalDirection = UTILS.getCardinalDirection(mode, `${colCoordinate}${rowCoordinate}`);

        const midX = width / 2;
        const midY = height / 2;

        ctx.beginPath();
        ctx.font = '18px monospace';

        if (FLAGS.WEST === cardinalDirection) {
            ctx.moveTo(midX, 0);
            ctx.lineTo(midX, height);
            ctx.moveTo(midX, midY);
            ctx.lineTo(width, midY);
            ctx.fillText(rowCoordinate, 0, midY);
        } else if (FLAGS.NORTH === cardinalDirection) {
            ctx.moveTo(0, midY);
            ctx.lineTo(width, midY);
            ctx.moveTo(midX, midY);
            ctx.lineTo(midX, height);
            ctx.fillText(colCoordinate, midX, 18);
        } else if (FLAGS.EAST === cardinalDirection) {
            ctx.moveTo(midX, 0);
            ctx.lineTo(midX, height);
            ctx.moveTo(0, midY);
            ctx.lineTo(midX, midY);
            ctx.fillText(rowCoordinate, width - 20, midY);
        } else if (FLAGS.SOUTH === cardinalDirection) {
            ctx.moveTo(0, midY);
            ctx.lineTo(width, midY);
            ctx.moveTo(midX, 0);
            ctx.lineTo(midX, midY);
            ctx.fillText(colCoordinate, midX, height - 20);
        }

        ctx.stroke();
    }

    drawCorner() {
        const {
            height,
            mode,
            width,
            rowCoordinate,
            colCoordinate,
        } = this.props;        
        
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        const cardinalDirection = UTILS.getCardinalDirection(mode, `${colCoordinate}${rowCoordinate}`);

        const midX = width / 2;
        const midY = height / 2;

        ctx.beginPath();
        ctx.font = '18px monospace';

        if (FLAGS.NORTH_EAST === cardinalDirection) {
            ctx.moveTo(0, midY);
            ctx.lineTo(midX, midY);
            ctx.lineTo(midX, height);
            ctx.fillText(colCoordinate, midX, 18);
            ctx.fillText(rowCoordinate, width - 20, midY);
        } else if (FLAGS.SOUTH_EAST === cardinalDirection) {
            ctx.moveTo(midX, 0);
            ctx.lineTo(midX, midY);
            ctx.lineTo(0, midY);
            ctx.fillText(colCoordinate, midX, height - 20);
            ctx.fillText(rowCoordinate, width - 20, midY);
        } else if (FLAGS.SOUTH_WEST === cardinalDirection) {
            ctx.moveTo(width, midY);
            ctx.lineTo(midX, midY);
            ctx.lineTo(midX, 0);
            ctx.fillText(colCoordinate, midX, height - 20);
            ctx.fillText(rowCoordinate, 0, midY);
        } else if (FLAGS.NORTH_WEST === cardinalDirection) {
            ctx.moveTo(midX, height);
            ctx.lineTo(midX, midY);
            ctx.lineTo(width, midY);
            ctx.fillText(colCoordinate, midX, 18);
            ctx.fillText(rowCoordinate, 0, midY);
        }

        ctx.stroke();        
    }
    
    drawIntersection() {
        const {
            height,
            width,
        } = this.props;        
        
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        const midX = width / 2;
        const midY = height / 2;

        ctx.beginPath();
        ctx.moveTo(0, midY);
        ctx.lineTo(width, midY);
        ctx.moveTo(midX, 0);
        ctx.lineTo(midX, height);
        ctx.stroke();
    }

    drawStone() {
        const { stonePlaced } = this.props;

        this.drawStoneInternal(FLAGS.STONE_BLACK === stonePlaced);
    }

    drawStoneInternal(isBlack) {
        const {
            height,
            stoneRadius,
            width,
        } = this.props;

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        const midX = width / 2;
        const midY = height / 2;

        ctx.beginPath();
        ctx.arc(midX, midY, stoneRadius, 0, 2 * Math.PI);

        if (isBlack) {
            ctx.fillStyle = '#000000';
            ctx.fill();
        }

        ctx.stroke();
    }

    showPreviewStone() {
        const { turnColor } = this.props;

        this.drawStoneInternal(FLAGS.TURN_BLACK === turnColor);
    }

    hidePreviewStone() {
        const {
            height,
            width,
        } = this.props;

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, width, height);
        this.drawTile();
    }

    onMouseOver() {
        if (FLAGS.STONE_NONE === this.props.stonePlaced) {
            this.showPreviewStone();
        }
    }

    onMouseOut() {
        if (FLAGS.STONE_NONE === this.props.stonePlaced) {
            this.hidePreviewStone();
        }
    }

    onClick() {
        if (FLAGS.STONE_NONE === this.props.stonePlaced) {
            this.props.setStone();
        }
    }

    render() {
        const {
            height,
            width,
        } = this.props;

        return (
            <canvas
                height={height}
                width={width}
                ref="canvas"
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                onClick={this.onClick}
            />
        );
    }
}

Tile.propTypes = {
    rowCoordinate: PropTypes.string.isRequired,
    colCoordinate: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    stoneRadius: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    mode: PropTypes.string.isRequired,
    stonePlaced: PropTypes.string.isRequired,
    turnColor: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        stonePlaced: placedStoneSelector(state, ownProps),
        turnColor: state.game.turnColor,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {
        colCoordinate,
        rowCoordinate,
    } = ownProps;

    return {
        setStone: () => {
            dispatch(setStone(colCoordinate, rowCoordinate));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tile);