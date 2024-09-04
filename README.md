# SplitBills

The library is based on the Javascript programming language and allows you to calculate different number of split bills
and tips based on the initial amount. You just need to specify amount, number of payments, should we calculate tips and
percentage of tips

## Author

https://www.youtube.com/@QANSIGLIERE/

## Installing

Using npm:

`npm i qansigliere-splitbills`

## Functions

`splitBills(initialAmount, numberOfPayments, withTips, tipsRatePercent)` - This function calculates the amount of each
individual payment based on the specified initial amount and the number of expected payments. Plus it can calculate a
tip for each payment if needed.

## Example

### CommonJS

```
var { splitBills } = require('qansigliere-splitbills');

console.log(JSON.stringify(splitBills(1.31, 4, true, 15)));
```

Output

```
[{"amount":0.33,"tips":0.05},{"amount":0.33,"tips":0.05},{"amount":0.33,"tips":0.05},{"amount":0.32,"tips":0.05}]
```

### ES Module

```
import { splitBills } from 'qansigliere-splitbills';

console.log(JSON.stringify(splitBills(1.31, 4, true, 15)));

```

Output

```
[{"amount":0.33,"tips":0.05},{"amount":0.33,"tips":0.05},{"amount":0.33,"tips":0.05},{"amount":0.32,"tips":0.05}]
```

## Improvements and Suggestions

https://forms.gle/iAYSDv98yHt11DUV7
