## Khmer Unicode Converter

An npm module to convert Limon/ABC font into Khmer Unicode. You can use it stand alone with the command `khmer-unicode-converter`.

    $ khmer-unicode-converter GkSrbBa©Úl -f limon

This module has tests with Mocha. Run `npm test` and make sure you have a solid connection.

```
var khmerConverter = require('khmer-unicode-converter');
var result1 = khmerConverter.limon('GkSrbBa©Úl ¬lIm:Un¦');
console.log(result1); // អក្សរបពា្ចូល (លីម៉ូន)

var result2 = khmerConverter.abc('GkßrbBa©Úl (eGb‘ÍsuI)');
console.log(result2); // អក្សរបពា្ចូល (អេប៊ីស៊ី)
```

Special thanks to [Adam Wood](http://converter.preahkumpii.com/).