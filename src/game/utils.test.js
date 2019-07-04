import * as UTILS from './utils';

// 19 x 19 skipping I
it('generates A through T', () => {
    const at = UTILS.genGobanCharArray(19);

    expect(at[0]).toEqual('A');
    expect(at[7]).toEqual('H');
    expect(at[8]).toEqual('J');
    expect(at[18]).toEqual('T');
});

it('fails to generate 0 columns', () => {
    let errorThrown = false;

    try {
        const az = UTILS.genGobanCharArray(0);
    } catch (e) {
        if (e) {
            errorThrown = true;
        }
    }

    expect(errorThrown).toEqual(true);
});
