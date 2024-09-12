var { splitBills } = require('../index.js');

test('Validate incorrect data', () => {
    expect(() => splitBills(-5, 'text', 0, -3)).toThrow(Error);
});

test('Validate number of payment equals 0', () => {
    expect(() => splitBills(-5, 'text', 0, -3)).toThrow(Error);
});

test('Validate zero amount and 1 payment', () => {
    let result = splitBills(0, 1, false, 15);
    expect(result.length).toEqual(1);
    expect(result).toEqual([{ amount: 0, tips: 0 }]);
});

test('Validate zero amount and 2 payments', () => {
    let result = splitBills(0, 2, false, 15);
    expect(result.length).toEqual(1);
    expect(result).toEqual([{ amount: 0, tips: 0 }]);
});

test('Validate not enough funds for the specified number of payments', () => {
    expect(() => splitBills(0.05, 6, false, 15)).toThrow(Error);
});

test('Validate 2 payments with 0.02$ bill', () => {
    let result = splitBills(0.02, 2, false, 15);
    expect(result.length).toEqual(2);
    expect(result).toEqual([
        { amount: 0.01, tips: 0 },
        { amount: 0.01, tips: 0 },
    ]);
});

test('Validate 2 payments with 0.02$ bill with tips', () => {
    let result = splitBills(0.02, 2, true, 15);
    expect(result.length).toEqual(2);
    expect(result).toEqual([
        { amount: 0.01, tips: 0 },
        { amount: 0.01, tips: 0 },
    ]);
});

test('Validate 2 payments with 1$ bill', () => {
    let result = splitBills(1, 2, false, 15);
    expect(result.length).toEqual(2);
    expect(result).toEqual([
        { amount: 0.5, tips: 0 },
        { amount: 0.5, tips: 0 },
    ]);
});

test('Validate 2 payments with 1$ bill with tips', () => {
    let result = splitBills(1, 2, true, 15);
    expect(result.length).toEqual(2);
    expect(result).toEqual([
        { amount: 0.5, tips: 0.07 },
        { amount: 0.5, tips: 0.07 },
    ]);
});

test('Validate 3 payments with 1$ bill', () => {
    let result = splitBills(1, 3, false, 15);
    expect(result.length).toEqual(3);
    expect(result).toEqual([
        { amount: 0.33, tips: 0 },
        { amount: 0.33, tips: 0 },
        { amount: 0.34, tips: 0 },
    ]);
});

test('Validate 3 payments with 1$ bill with tips', () => {
    let result = splitBills(1, 3, true, 15);
    expect(result.length).toEqual(3);
    expect(result).toEqual([
        { amount: 0.33, tips: 0.05 },
        { amount: 0.33, tips: 0.05 },
        { amount: 0.34, tips: 0.05 },
    ]);
});

test('Validate 4 payments with 1$ bill', () => {
    let result = splitBills(1, 4, false, 15);
    expect(result.length).toEqual(4);
    expect(result).toEqual([
        { amount: 0.25, tips: 0 },
        { amount: 0.25, tips: 0 },
        { amount: 0.25, tips: 0 },
        { amount: 0.25, tips: 0 },
    ]);
});

test('Validate 4 payments with 1$ bill with tips', () => {
    let result = splitBills(1, 4, true, 15);
    expect(result.length).toEqual(4);
    expect(result).toEqual([
        { amount: 0.25, tips: 0.04 },
        { amount: 0.25, tips: 0.04 },
        { amount: 0.25, tips: 0.04 },
        { amount: 0.25, tips: 0.04 },
    ]);
});

//////////////
// No Error //
//////////////

test('No Error > Validate incorrect data', () => {
    expect(splitBills(-5, 'text', 0, -3, false)).toEqual([{ amount: 0, tips: 0 }]);
});

test('No Error > Validate number of payment equals 0', () => {
    expect(splitBills(-5, 'text', 0, -3, false)).toEqual([{ amount: 0, tips: 0 }]);
});

test('No Error > Validate zero amount and 2 payments', () => {
    let result = splitBills(0, 2, false, 15, false);
    expect(result.length).toEqual(1);
    expect(result).toEqual([{ amount: 0, tips: 0 }]);
});

test('No Error > Validate not enough funds for the specified number of payments', () => {
    expect(splitBills(0.05, 6, false, 15, false)).toEqual([
        {
            amount: 0.05,
            tips: 0,
        },
    ]);
});

test('No Error > Validate 2 payments with 0.02$ bill', () => {
    let result = splitBills(0.02, 2, false, 15, false);
    expect(result.length).toEqual(2);
    expect(result).toEqual([
        { amount: 0.01, tips: 0 },
        { amount: 0.01, tips: 0 },
    ]);
});

test('No Error > Validate 2 payments with 0.02$ bill with tips', () => {
    let result = splitBills(0.02, 2, true, 15, false);
    expect(result.length).toEqual(2);
    expect(result).toEqual([
        { amount: 0.01, tips: 0 },
        { amount: 0.01, tips: 0 },
    ]);
});

test('No Error > Validate 2 payments with 1$ bill', () => {
    let result = splitBills(1, 2, false, 15, false);
    expect(result.length).toEqual(2);
    expect(result).toEqual([
        { amount: 0.5, tips: 0 },
        { amount: 0.5, tips: 0 },
    ]);
});

test('No Error > Validate 2 payments with 1$ bill with tips', () => {
    let result = splitBills(1, 2, true, 15, false);
    expect(result.length).toEqual(2);
    expect(result).toEqual([
        { amount: 0.5, tips: 0.07 },
        { amount: 0.5, tips: 0.07 },
    ]);
});

test('No Error > Validate 3 payments with 1$ bill', () => {
    let result = splitBills(1, 3, false, 15, false);
    expect(result.length).toEqual(3);
    expect(result).toEqual([
        { amount: 0.33, tips: 0 },
        { amount: 0.33, tips: 0 },
        { amount: 0.34, tips: 0 },
    ]);
});

test('No Error > Validate 3 payments with 1$ bill with tips', () => {
    let result = splitBills(1, 3, true, 15, false);
    expect(result.length).toEqual(3);
    expect(result).toEqual([
        { amount: 0.33, tips: 0.05 },
        { amount: 0.33, tips: 0.05 },
        { amount: 0.34, tips: 0.05 },
    ]);
});

test('No Error > Validate 4 payments with 1$ bill', () => {
    let result = splitBills(1, 4, false, 15, false);
    expect(result.length).toEqual(4);
    expect(result).toEqual([
        { amount: 0.25, tips: 0 },
        { amount: 0.25, tips: 0 },
        { amount: 0.25, tips: 0 },
        { amount: 0.25, tips: 0 },
    ]);
});

test('No Error > Validate 4 payments with 1$ bill with tips', () => {
    let result = splitBills(1, 4, true, 15, false);
    expect(result.length).toEqual(4);
    expect(result).toEqual([
        { amount: 0.25, tips: 0.04 },
        { amount: 0.25, tips: 0.04 },
        { amount: 0.25, tips: 0.04 },
        { amount: 0.25, tips: 0.04 },
    ]);
});
