import * as GAME_MATHS from './maths';
import * as FLAGS from './flags';

it('returns correct corner arrays', () => {
    const corners9 = GAME_MATHS.getCornersConstant(FLAGS.GAME_9_x_9);
    const corners13 = GAME_MATHS.getCornersConstant(FLAGS.GAME_13_x_13);
    const cornerT19 = GAME_MATHS.getCornersConstant(FLAGS.GAME_19_x_19);

    expect(corners9).toEqual(FLAGS.CORNERS_9_x_9);
    expect(corners13).toEqual(FLAGS.CORNERS_13_x_13);
    expect(cornerT19).toEqual(FLAGS.CORNERS_19_x_19);
});

it('returns correct corner arrays', () => {
    const corners9 = GAME_MATHS.getSidesConstant(FLAGS.GAME_9_x_9);
    const corners13 = GAME_MATHS.getSidesConstant(FLAGS.GAME_13_x_13);
    const cornerT19 = GAME_MATHS.getSidesConstant(FLAGS.GAME_19_x_19);

    expect(corners9).toEqual(FLAGS.SIDES_9_x_9);
    expect(corners13).toEqual(FLAGS.SIDES_13_x_13);
    expect(cornerT19).toEqual(FLAGS.SIDES_19_x_19);
});

it('returns correct cardinal direction for each game mode', () => {
    // The eight directions for 9x9
    const n9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, 'B1');
    const nE9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, FLAGS.CORNER_9_x_9_NE);
    const E9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, 'J7');
    const sE9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, FLAGS.CORNER_9_x_9_SE);
    const s9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, 'B9');
    const sw9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, FLAGS.CORNER_9_x_9_SW);
    const w9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, 'A2');
    const nw9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, FLAGS.CORNER_ALL_NW);

    // The eight directions for 13x13
    const n13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, 'B1');
    const ne13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, FLAGS.CORNER_13_x_13_NE);
    const e13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, 'N5');
    const se13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, FLAGS.CORNER_13_x_13_SE);
    const s13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, 'B13');
    const sw13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, FLAGS.CORNER_13_x_13_SW);
    const w13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, 'A5');
    const nw13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, FLAGS.CORNER_ALL_NW);

    // The eight directions for 19x19
    const n19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, 'B1');
    const ne19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, FLAGS.CORNER_19_x_19_NE);
    const e19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, 'T6');
    const se19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, FLAGS.CORNER_19_x_19_SE);
    const T19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, 'D19');
    const sw19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, FLAGS.CORNER_19_x_19_SW);
    const w19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, 'A18');
    const nw19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, FLAGS.CORNER_ALL_NW);

    // 9x9 mode
    expect(n9).toEqual(FLAGS.NORTH);
    expect(nE9).toEqual(FLAGS.NORTH_EAST);
    expect(E9).toEqual(FLAGS.EAST);
    expect(sE9).toEqual(FLAGS.SOUTH_EAST);
    expect(s9).toEqual(FLAGS.SOUTH);
    expect(sw9).toEqual(FLAGS.SOUTH_WEST);
    expect(w9).toEqual(FLAGS.WEST);
    expect(nw9).toEqual(FLAGS.NORTH_WEST);

    // 13x13 mode
    expect(n13).toEqual(FLAGS.NORTH);
    expect(ne13).toEqual(FLAGS.NORTH_EAST);
    expect(e13).toEqual(FLAGS.EAST);
    expect(se13).toEqual(FLAGS.SOUTH_EAST);
    expect(s13).toEqual(FLAGS.SOUTH);
    expect(sw13).toEqual(FLAGS.SOUTH_WEST);
    expect(w13).toEqual(FLAGS.WEST);
    expect(nw13).toEqual(FLAGS.NORTH_WEST);

    // 19x19 mode
    expect(n19).toEqual(FLAGS.NORTH);
    expect(ne19).toEqual(FLAGS.NORTH_EAST);
    expect(e19).toEqual(FLAGS.EAST);
    expect(se19).toEqual(FLAGS.SOUTH_EAST);
    expect(T19).toEqual(FLAGS.SOUTH);
    expect(sw19).toEqual(FLAGS.SOUTH_WEST);
    expect(w19).toEqual(FLAGS.WEST);
    expect(nw19).toEqual(FLAGS.NORTH_WEST);
});

it('returns reasonable board dimensions', () => {
    const test_800_600 = GAME_MATHS.calculateBoardDimensions({
        workingWidth: 800,
        workingHeight: 600,
    });

    const test_1024_768 = GAME_MATHS.calculateBoardDimensions({
        workingWidth: 1024,
        workingHeight: 768,
    });

    expect(test_800_600).toEqual({
        height: 599,
        width: 559,
    });

    expect(test_1024_768).toEqual({
        height: 767,
        width: 716,
    });
});

it('returns reasonable tile dimensions', () => {
    const test_1024_768_9_x_9 = GAME_MATHS.calculateTileDimensions({
        mode: FLAGS.GAME_9_x_9,
        boardWidth: 560,
        boardHeight: 612,
    });

    const test_1024_768_13_x_13 = GAME_MATHS.calculateTileDimensions({
        mode: FLAGS.GAME_13_x_13,
        boardWidth: 560,
        boardHeight: 612,
    });

    const test_1024_768_19_x_19 = GAME_MATHS.calculateTileDimensions({
        mode: FLAGS.GAME_19_x_19,
        boardWidth: 560,
        boardHeight: 612,
    });

    expect(test_1024_768_9_x_9).toEqual({
        height: 68,
        width: 62,
    });

    expect(test_1024_768_13_x_13).toEqual({
        height: 46,
        width: 42,
    });

    expect(test_1024_768_19_x_19).toEqual({
        height: 32,
        width: 28,
    });
});

it('returns correct adjacent coordinates for B4 9 x 9, a random intersection', () => {
    const B4_9_x_9_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: 'B',
        rowCoordinate: '4',
    });

    expect(B4_9_x_9_adjacents).toEqual({
        north: 'B3',
        east: 'C4',
        south: 'B5',
        west: 'A4',
    });
});

it('returns correct adjacent coordinates for A1 9 x 9, northwest corner', () => {
    const A1_9_x_9_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: FLAGS.MIN_COLUMN,
        rowCoordinate: FLAGS.MIN_ROW,
    });

    expect(A1_9_x_9_adjacents).toEqual({
        east: 'B1',
        south: 'A2',
    });
});

it('returns correct adjacent coordinates for J1 9 x 9, northeast corner', () => {
    const J1_9_x_9_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: FLAGS.MAX_9_x_9_COLUMN,
        rowCoordinate: FLAGS.MIN_ROW,
    });

    expect(J1_9_x_9_adjacents).toEqual({
        south: 'J2',
        west: 'H1',
    });
});

it('returns correct adjacent coordinates for J9 9 x 9, southeast corner', () => {
    const J9_9_x_9_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: FLAGS.MAX_9_x_9_COLUMN,
        rowCoordinate: FLAGS.MAX_9_x_9_ROW,
    });

    expect(J9_9_x_9_adjacents).toEqual({
        north: 'J8',
        west: 'H9',
    });
});

it('returns correct adjacent coordinates for A9 9 x 9, southwest corner', () => {
    const A9_9_x_9_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: FLAGS.MIN_COLUMN,
        rowCoordinate: FLAGS.MAX_9_x_9_ROW,
    });

    expect(A9_9_x_9_adjacents).toEqual({
        north: 'A8',
        east: 'B9',
    });
});

it('returns correct adjacent coordinates for B1 9 x 9, north side', () => {
    const A2_9_x_9_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: 'B',
        rowCoordinate: FLAGS.MIN_ROW,
    });

    expect(A2_9_x_9_adjacents).toEqual({
        east: 'C1',
        south: 'B2',
        west: 'A1',
    });
});

it('returns correct adjacent coordinates for J5 9 x 9, east side', () => {
    const A2_9_x_9_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: FLAGS.MAX_9_x_9_COLUMN,
        rowCoordinate: '5',
    });

    expect(A2_9_x_9_adjacents).toEqual({
        north: 'J4',
        south: 'J6',
        west: 'H5',
    });
});

it('returns correct adjacent coordinates for E9 9 x 9, south side', () => {
    const A2_9_x_9_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: 'E',
        rowCoordinate: FLAGS.MAX_9_x_9_ROW,
    });

    expect(A2_9_x_9_adjacents).toEqual({
        north: 'E8',
        east: 'F9',
        west: 'D9',
    });
});

it('returns correct adjacent coordinates for A2 9 x 9, west side', () => {
    const A2_9_x_9_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: FLAGS.MIN_COLUMN,
        rowCoordinate: '2',
    });

    expect(A2_9_x_9_adjacents).toEqual({
        north: 'A1',
        east: 'B2',
        south: 'A3',
    });
});

it('returns correct adjacent coordinates for D7 13 x 13, random intersection', () => {
    const D7_13_x_13_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_13_x_13,
        colCoordinate: 'D',
        rowCoordinate: '7',
    });

    expect(D7_13_x_13_adjacents).toEqual({
        east: 'E7',
        north: 'D6',
        south: 'D8',
        west: 'C7',
    });
});

it('returns correct adjacent coordinates for N1 13 x 13, northeast corner', () => {
    const N1_13_x_13_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_13_x_13,
        colCoordinate: FLAGS.MAX_13_x_13_COLUMN,
        rowCoordinate: FLAGS.MIN_ROW,
    });

    expect(N1_13_x_13_adjacents).toEqual({
        south: 'N2',
        west: 'M1',
    });
});

it('returns correct adjacent coordinates for N13 13 x 13, southeast corner', () => {
    const N13_13_x_13_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_13_x_13,
        colCoordinate: FLAGS.MAX_13_x_13_COLUMN,
        rowCoordinate: FLAGS.MAX_13_x_13_ROW,
    });

    expect(N13_13_x_13_adjacents).toEqual({
        north: 'N12',
        west: 'M13',
    });
});

it('returns correct adjacent coordinates for A13 13 x 13, southwest corner', () => {
    const A13_13_x_13_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_13_x_13,
        colCoordinate: FLAGS.MIN_COLUMN,
        rowCoordinate: FLAGS.MAX_13_x_13_ROW,
    });

    expect(A13_13_x_13_adjacents).toEqual({
        north: 'A12',
        east: 'B13',
    });
});

it('returns correct adjacent coordinates for G14 19 x 19, random intersection', () => {
    const G14_19_x_19_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_19_x_19,
        colCoordinate: 'G',
        rowCoordinate: '14',
    });

    expect(G14_19_x_19_adjacents).toEqual({
        east: 'H14',
        north: 'G13',
        south: 'G15',
        west: 'F14',
    });
});

it('returns correct adjacent coordinates for N1 19 x 19, northeast corner', () => {
    const N1_19_x_19_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_19_x_19,
        colCoordinate: FLAGS.MAX_19_x_19_COLUMN,
        rowCoordinate: FLAGS.MIN_ROW,
    });

    expect(N1_19_x_19_adjacents).toEqual({
        south: 'T2',
        west: 'S1',
    });
});

it('returns correct adjacent coordinates for T19 19 x 19, southeast corner', () => {
    const N19_19_x_19_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_19_x_19,
        colCoordinate: FLAGS.MAX_19_x_19_COLUMN,
        rowCoordinate: FLAGS.MAX_19_x_19_ROW,
    });

    expect(N19_19_x_19_adjacents).toEqual({
        north: 'T18',
        west: 'S19',
    });
});

it('returns correct adjacent coordinates for A19 19 x 19, southwest corner', () => {
    const A19_19_x_19_adjacents = GAME_MATHS.getCardinalAdjacencies({
        mode: FLAGS.GAME_19_x_19,
        colCoordinate: FLAGS.MIN_COLUMN,
        rowCoordinate: FLAGS.MAX_19_x_19_ROW,
    });

    expect(A19_19_x_19_adjacents).toEqual({
        north: 'A18',
        east: 'B19',
    });
});