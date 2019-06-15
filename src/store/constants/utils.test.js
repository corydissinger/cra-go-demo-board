import * as UTILS from './utils';

it('generates a through z', () => {
    const az = UTILS.genCharArray('a', 'z');

    expect(az[0]).toEqual('a');
    expect(az[3]).toEqual('d');
    expect(az[25]).toEqual('z');
});

it('fails to generate in reverse', () => {
    let errorThrown = false;

    try {
        const az = UTILS.genCharArray('z', 'a');
    } catch (e) {
        if (e) {
            errorThrown = true;
        }
    }

    expect(errorThrown).toEqual(true);
});
