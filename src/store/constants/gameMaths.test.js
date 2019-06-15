import * as GAME_MATHS from './gameMaths';
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