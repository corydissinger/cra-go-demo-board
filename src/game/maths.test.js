import * as GAME_MATHS from './maths';
import * as FLAGS from './flags';

it('returns correct corner arrays', () => {
    const corners9 = GAME_MATHS.getCornersConstant(FLAGS.GAME_9_x_9);
    const corners13 = GAME_MATHS.getCornersConstant(FLAGS.GAME_13_x_13);
    const corners19 = GAME_MATHS.getCornersConstant(FLAGS.GAME_19_x_19);

    expect(corners9).toEqual(FLAGS.CORNERS_9_x_9);
    expect(corners13).toEqual(FLAGS.CORNERS_13_x_13);
    expect(corners19).toEqual(FLAGS.CORNERS_19_x_19);
});

it('returns correct corner arrays', () => {
    const corners9 = GAME_MATHS.getSidesConstant(FLAGS.GAME_9_x_9);
    const corners13 = GAME_MATHS.getSidesConstant(FLAGS.GAME_13_x_13);
    const corners19 = GAME_MATHS.getSidesConstant(FLAGS.GAME_19_x_19);

    expect(corners9).toEqual(FLAGS.SIDES_9_x_9);
    expect(corners13).toEqual(FLAGS.SIDES_13_x_13);
    expect(corners19).toEqual(FLAGS.SIDES_19_x_19);
});

it('returns correct cardinal direction for each game mode', () => {
    // The eight directions for 9x9
    const n9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, 'b1');
    const ne9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, FLAGS.CORNER_9_x_9_NE);
    const e9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, 'i7');
    const se9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, FLAGS.CORNER_9_x_9_SE);
    const s9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, 'b9');
    const sw9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, FLAGS.CORNER_9_x_9_SW);
    const w9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, 'a2');
    const nw9 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_9_x_9, FLAGS.CORNER_ALL_NW);

    // The eight directions for 13x13
    const n13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, 'b1');
    const ne13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, FLAGS.CORNER_13_x_13_NE);
    const e13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, 'm5');
    const se13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, FLAGS.CORNER_13_x_13_SE);
    const s13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, 'b13');
    const sw13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, FLAGS.CORNER_13_x_13_SW);
    const w13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, 'a5');
    const nw13 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_13_x_13, FLAGS.CORNER_ALL_NW);

    // The eight directions for 19x19
    const n19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, 'b1');
    const ne19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, FLAGS.CORNER_19_x_19_NE);
    const e19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, 's6');
    const se19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, FLAGS.CORNER_19_x_19_SE);
    const s19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, 'd19');
    const sw19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, FLAGS.CORNER_19_x_19_SW);
    const w19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, 'a18');
    const nw19 = GAME_MATHS.getCardinalDirection(FLAGS.GAME_19_x_19, FLAGS.CORNER_ALL_NW);

    // 9x9 mode
    expect(n9).toEqual(FLAGS.NORTH);
    expect(ne9).toEqual(FLAGS.NORTH_EAST);
    expect(e9).toEqual(FLAGS.EAST);
    expect(se9).toEqual(FLAGS.SOUTH_EAST);
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
    expect(s19).toEqual(FLAGS.SOUTH);
    expect(sw19).toEqual(FLAGS.SOUTH_WEST);
    expect(w19).toEqual(FLAGS.WEST);
    expect(nw19).toEqual(FLAGS.NORTH_WEST);
});

it('returns reasonable board dimensions', () => {
    const test_800_600 = GAME_MATHS.calculateBoardDimensions({
        configurationHeight: 100,
        windowWidth: 800,
        windowHeight: 600,
    });

    const test_1024_768 = GAME_MATHS.calculateBoardDimensions({
        configurationHeight: 300,
        windowWidth: 1024,
        windowHeight: 768,
    });

    expect(test_800_600).toEqual({
        height: 499,
        width: 466,
    });

    expect(test_1024_768).toEqual({
        height: 467,
        width: 436,
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

it('returns correct adjacent coordinates for b4 9 x 9, a random intersection', () => {
    const b4_9_x_9_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: 'b',
        rowCoordinate: '4',
    });

    expect(b4_9_x_9_adjacents).toEqual({
        north: 'b3',
        east: 'c4',
        south: 'b5',
        west: 'a4',
    });
});

it('returns correct adjacent coordinates for a1 9 x 9, northwest corner', () => {
    const a1_9_x_9_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: FLAGS.MIN_COLUMN,
        rowCoordinate: FLAGS.MIN_ROW,
    });

    expect(a1_9_x_9_adjacents).toEqual({
        east: 'b1',
        south: 'a2',
    });
});

it('returns correct adjacent coordinates for i1 9 x 9, northeast corner', () => {
    const i1_9_x_9_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: FLAGS.MAX_9_x_9_COLUMN,
        rowCoordinate: FLAGS.MIN_ROW,
    });

    expect(i1_9_x_9_adjacents).toEqual({
        south: 'i2',
        west: 'h1',
    });
});

it('returns correct adjacent coordinates for i9 9 x 9, southeast corner', () => {
    const i9_9_x_9_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: FLAGS.MAX_9_x_9_COLUMN,
        rowCoordinate: FLAGS.MAX_9_x_9_ROW,
    });

    expect(i9_9_x_9_adjacents).toEqual({
        north: 'i8',
        west: 'h9',
    });
});

it('returns correct adjacent coordinates for a9 9 x 9, southwest corner', () => {
    const a9_9_x_9_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: FLAGS.MIN_COLUMN,
        rowCoordinate: FLAGS.MAX_9_x_9_ROW,
    });

    expect(a9_9_x_9_adjacents).toEqual({
        north: 'a8',
        east: 'b9',
    });
});

it('returns correct adjacent coordinates for b1 9 x 9, north side', () => {
    const a2_9_x_9_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: 'b',
        rowCoordinate: FLAGS.MIN_ROW,
    });

    expect(a2_9_x_9_adjacents).toEqual({
        east: 'c1',
        south: 'b2',
        west: 'a1',
    });
});

it('returns correct adjacent coordinates for i5 9 x 9, east side', () => {
    const a2_9_x_9_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: FLAGS.MAX_9_x_9_COLUMN,
        rowCoordinate: '5',
    });

    expect(a2_9_x_9_adjacents).toEqual({
        north: 'i4',
        south: 'i6',
        west: 'h5',
    });
});

it('returns correct adjacent coordinates for e9 9 x 9, south side', () => {
    const a2_9_x_9_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: 'e',
        rowCoordinate: FLAGS.MAX_9_x_9_ROW,
    });

    expect(a2_9_x_9_adjacents).toEqual({
        north: 'e8',
        east: 'f9',
        west: 'd9',
    });
});

it('returns correct adjacent coordinates for a2 9 x 9, west side', () => {
    const a2_9_x_9_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_9_x_9,
        colCoordinate: FLAGS.MIN_COLUMN,
        rowCoordinate: '2',
    });

    expect(a2_9_x_9_adjacents).toEqual({
        north: 'a1',
        east: 'b2',
        south: 'a3',
    });
});

it('returns correct adjacent coordinates for d7 13 x 13, random intersection', () => {
    const d7_13_x_13_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_13_x_13,
        colCoordinate: 'd',
        rowCoordinate: '7',
    });

    expect(d7_13_x_13_adjacents).toEqual({
        east: 'e7',
        north: 'd6',
        south: 'd8',
        west: 'c7',
    });
});

it('returns correct adjacent coordinates for m1 13 x 13, northeast corner', () => {
    const m1_13_x_13_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_13_x_13,
        colCoordinate: FLAGS.MAX_13_x_13_COLUMN,
        rowCoordinate: FLAGS.MIN_ROW,
    });

    expect(m1_13_x_13_adjacents).toEqual({
        south: 'm2',
        west: 'l1',
    });
});

it('returns correct adjacent coordinates for m13 13 x 13, southeast corner', () => {
    const m13_13_x_13_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_13_x_13,
        colCoordinate: FLAGS.MAX_13_x_13_COLUMN,
        rowCoordinate: FLAGS.MAX_13_x_13_ROW,
    });

    expect(m13_13_x_13_adjacents).toEqual({
        north: 'm12',
        west: 'l13',
    });
});

it('returns correct adjacent coordinates for a13 13 x 13, southwest corner', () => {
    const a13_13_x_13_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_13_x_13,
        colCoordinate: FLAGS.MIN_COLUMN,
        rowCoordinate: FLAGS.MAX_13_x_13_ROW,
    });

    expect(a13_13_x_13_adjacents).toEqual({
        north: 'a12',
        east: 'b13',
    });
});

it('returns correct adjacent coordinates for g14 19 x 19, random intersection', () => {
    const g14_19_x_19_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_19_x_19,
        colCoordinate: 'g',
        rowCoordinate: '14',
    });

    expect(g14_19_x_19_adjacents).toEqual({
        east: 'h14',
        north: 'g13',
        south: 'g15',
        west: 'f14',
    });
});

it('returns correct adjacent coordinates for m1 19 x 19, northeast corner', () => {
    const m1_19_x_19_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_19_x_19,
        colCoordinate: FLAGS.MAX_19_x_19_COLUMN,
        rowCoordinate: FLAGS.MIN_ROW,
    });

    expect(m1_19_x_19_adjacents).toEqual({
        south: 's2',
        west: 'r1',
    });
});

it('returns correct adjacent coordinates for s19 19 x 19, southeast corner', () => {
    const m19_19_x_19_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_19_x_19,
        colCoordinate: FLAGS.MAX_19_x_19_COLUMN,
        rowCoordinate: FLAGS.MAX_19_x_19_ROW,
    });

    expect(m19_19_x_19_adjacents).toEqual({
        north: 's18',
        west: 'r19',
    });
});

it('returns correct adjacent coordinates for a19 19 x 19, southwest corner', () => {
    const a19_19_x_19_adjacents = GAME_MATHS.getAdjacentCoordinates({
        mode: FLAGS.GAME_19_x_19,
        colCoordinate: FLAGS.MIN_COLUMN,
        rowCoordinate: FLAGS.MAX_19_x_19_ROW,
    });

    expect(a19_19_x_19_adjacents).toEqual({
        north: 'a18',
        east: 'b19',
    });
});