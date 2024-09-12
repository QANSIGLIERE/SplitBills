function normalizeFloatValue(value, numberOfDigits = 2) {
    return Number(value.toFixed(numberOfDigits));
}

function splitBills(initialAmount, numberOfPayments, withTips, tipsRatePercent, returnError = true) {
    let finalResult = [];

    if (
        initialAmount < 0 ||
        numberOfPayments <= 0 ||
        tipsRatePercent < 0 ||
        typeof initialAmount != 'number' ||
        typeof numberOfPayments != 'number' ||
        typeof withTips != 'boolean' ||
        typeof tipsRatePercent != 'number'
    ) {
        if (returnError)
            throw new Error(`
Provided values are not valid! They should be:
initialAmount: Number >= 0
numberOfPayments: Number > 0
withTips: Boolean
tipsRatePercent: Number >= 0
`);
        else {
            finalResult.push({
                amount: 0,
                tips: 0,
            });
        }
    } else if (initialAmount == 0) {
        finalResult.push({
            amount: 0,
            tips: 0,
        });
    } else if (initialAmount > 0 && initialAmount < numberOfPayments * 0.01) {
        if (returnError)
            throw new Error(`
You do not have enough amount funds for the specified number of split payments
initialAmount: ${initialAmount}
numberOfPayments: ${numberOfPayments}
Expected amount should be in this case more that ${numberOfPayments * 0.01}
`);
        else {
            finalResult.push({
                amount: initialAmount,
                tips: withTips ? normalizeFloatValue(initialAmount * tipsRatePercent * 0.01, 2) : 0,
            });
        }
    } else {
        for (let payment = 0; payment < numberOfPayments; payment++) {
            let amount = 0;
            let step = normalizeFloatValue(initialAmount / numberOfPayments, 2);

            if (payment != numberOfPayments - 1) {
                amount = step;
                finalResult.push({
                    amount: amount,
                    tips: withTips ? normalizeFloatValue(amount * tipsRatePercent * 0.01, 2) : 0,
                });
            } else {
                amount = normalizeFloatValue(initialAmount - step * (numberOfPayments - 1), 2);

                finalResult.push({
                    amount: amount,
                    tips: withTips ? normalizeFloatValue(amount * tipsRatePercent * 0.01, 2) : 0,
                });
            }
        }
    }

    return finalResult;
}

module.exports.splitBills = splitBills;
