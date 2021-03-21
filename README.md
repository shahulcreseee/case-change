# Case Change

> Convert String in  Object,Array or Plain String to  `lowercase`, `UPPERCASE`, `camelCase`, `Kebab-Case`, `snake_case`, `Ṭitle Case`.

## Installation

```
npm install case-change --save
```

## Usage

```js
import { Lower, Upper, Camel, Kebab, Snake, Title } from "case-change";
```

#### [lowercase]

> Convert String in Object, Array or String variable to lowercase. Specific type of requirement can be addressed like Object Keys or Object values to be lowercased, Retrieve Object keys or values lowercased as array. Find below example for your best needs.

```js
console.log(Lower.isLowerCased("shahul B")); 
//OUTPUT: false

console.log(Lower.getStringLowerCased("jAckl")); 
//OUTPUT: jackl

console.log(Lower.getStringLowerCasedWithPos("SHAHUL HAMEED BUHARI", 4, 5)); 
// OUTPUT: SHAHuL HAMEED BUHARI

console.log(Lower.getObjectLowerCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]})); 
// OUTPUT: {"t":1,"u":{"k":["jko","opl"],"shahul":"piano","b":{"jill_jack":[{"banana":"jill_jack"},{"jill_jack":"apple"}]}},"family":["shahul","farook"]}

console.log(Lower.getObjectKeysLowercased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]}));
//OUTPUT:{"t":1,"u":{"k":["JKO","opl"],"shahul":"PIANO","b":{"jill_jack":[{"banana":"JILL_JACK"},{"jill_jack":"APPLE"}]}},"family":["shahul","farook"]}

console.log(Lower.getObjectvaluesLowercased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]}));
//OUTPUT:{"T":1,"U":{"K":["jko","opl"],"SHAHUL":"piano","B":{"JILL_JACK":[{"BANANA":"jill_jack"},{"JILL_JACK":"apple"}]}},"Family":["shahul","farook"]}

console.log(Lower.getKeysLowerCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]})); 
//OUTPUT:["t","u","k","shahul","b","jill_jack","banana","jill_jack","family"]

console.log(Lower.getValuesLowerCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]})); 
//OUTPUT:[1,"jko","opl","piano","jill_jack","apple","shahul","farook"]

console.log(Lower.getArrayLowercased([{ "Shahul": "hAmeed" }]));
//OUTPUT: [ { shahul: 'hameed' } ]

console.log(Lower.getArrValLowerCasedByIndex([{ "Shahul": "hAmeed" },{ ABU: 'FAZIL' } ], 0));
//OUTPUT: [ { shahul: 'hameed' }, { ABU: 'FAZIL' } ]

```

#### [UPPERCASE]

> Convert String in Object, Array or String variable to uppercase. Specific type of requirement can be addressed like Object Keys or Object values to be uppercased, Retrieve Object keys or values uppercased as array. Find below example for your best needs.

```js
console.log(Upper.isUpperCased("shahul B")); 
//OUTPUT: false

console.log(Upper.getStringUpperCased("jAckl")); 
//OUTPUT: JACKL

console.log(Upper.getStringUpperCasedWithPos("shahul hameed buhari", 4, 5)); 
// OUTPUT: shahUl hameed buhari

console.log(Upper.getObjectUpperCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]})); 
// OUTPUT: {"T":1,"U":{"K":["JKO","OPL"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"FAMILY":["SHAHUL","FAROOK"]}

console.log(Upper.getObjectKeysUpperCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]}));
//OUTPUT:{"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"FAMILY":["shahul","farook"]}

console.log(Upper.getObjectvaluesUpperCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]}));
//OUTPUT:{"T":1,"U":{"K":["JKO","OPL"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["SHAHUL","FAROOK"]}

console.log(Upper.getKeysUpperCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]})); 
//OUTPUT:["T","U","K","SHAHUL","B","JILL_JACK","BANANA","JILL_JACK","FAMILY"]

console.log(Upper.getValuesUpperCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]})); 
//OUTPUT:[1,"JKO","OPL","PIANO","JILL_JACK","APPLE","SHAHUL","FAROOK"]

console.log(Upper.getArrayUpperCased([{ "Shahul": "hAmeed" }]));
//OUTPUT: [ { shahul: 'hameed' } ]

console.log(Upper.getArrValUpperCasedByIndex([{ "Shahul": "hAmeed" },{ abu: 'fazil' } ], 0));
//OUTPUT: [ { SHAHUL: 'HAMEED' }, { abu: 'fazil' } ]

```

#### [camelCase]

> Convert String in Object, Array or String variable to camelCase. Specific type of requirement can be addressed like Object Keys or Object values to be camelCased, Retrieve Object keys or values camelCased as array. Find below example for your best needs.

```js
console.log(Camel.isCamelCased("shahul B")); 
//OUTPUT: false

console.log(Camel.getStringCamelCased("jAckl")); 
//OUTPUT: JACKL

console.log(Camel.getStringCamelCasedWithPos("shahul hameed buhari", 4, 5)); 
// OUTPUT: shahUl hameed buhari

console.log(Camel.getObjectKeysCamelCased{"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]}));
//OUTPUT:{"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"FAMILY":["shahul","farook"]}

console.log(Camel.getObjectvaluesCamelCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]}));
//OUTPUT:{"T":1,"U":{"K":["JKO","OPL"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["SHAHUL","FAROOK"]}

console.log(Camel.getKeysCamelCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]})); 
//OUTPUT:["T","U","K","SHAHUL","B","JILL_JACK","BANANA","JILL_JACK","FAMILY"]

console.log(Camel.getValuesCamelCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]})); 
//OUTPUT:[1,"JKO","OPL","PIANO","JILL_JACK","APPLE","SHAHUL","FAROOK"]

console.log(Camel.getStringArrayCamelCased([{ "Shahul": "hAmeed" }]));
//OUTPUT: [ { shahul: 'hameed' } ]

console.log(Camel.getStringArrValCamelCasedByIndex(["Shahul", "hAmeed shahul"], 0));
//OUTPUT: [ 'shahul', 'hAmeed shahul' ]
```

#### [Kebab-Case]

> Convert String in Object, Array or String variable to Kebab-Case. Specific type of requirement can be addressed like Object Keys or Object values to be Kebab-Cased, Retrieve Object keys or values Kebab-Cased as array. Find below example for your best needs.

```js
console.log(Kebab.isKebabCased("shahul T")); 
//OUTPUT: false

console.log(Kebab.getStringKebabCased("JAckl/kIL"));
//OUTPUT: j-ackl-k-il

console.log(Kebab.getStringKebabCasedWithPos("SHAHUL HAMEED BUHARI", 4, 5));
// OUTPUT: SHAHul-hAMEED BUHARI

console.log(Kebab.getObjectKeysKebabCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] }));
//OUTPUT:{"t":1,"u":{"k":["JKO","opl"],"shahul":"PIANO","b":{"j-i-l-l-jack":[{"banana":"JILL_JACK"},{"j-i-l-l-jack":"APPLE"}]}},"family":["shahul","farook"]}

console.log(Kebab.getObjectvaluesKebabCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] }));
//OUTPUT:{"T":1,"U":{"K":["jko","opl"],"SHAHUL":"piano","B":{"JILL_JACK":[{"BANANA":"j-i-l-l-jack"},{"JILL_JACK":"apple"}]}},"Family":["shahul","farook"]}

console.log(Kebab.getKeysKebabCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] })); 
//OUTPUT:["t","u","k","shahul","b","j-i-l-l-jack","banana","j-i-l-l-jack","family"]

console.log(Kebab.getValuesKebabCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] })); 
//OUTPUT:[1,"jko","opl","piano","j-i-l-l-jack","apple","shahul","farook"]

console.log(Kebab.getStringArrayKebabCased(["Shahul", "hAmeed shahul"]));
//OUTPUT: [ 'shahul', 'h-ameed-shahul' ]

console.log(Kebab.getStringArrValKebabCasedByIndex(["Shahul hameed", "hAmeed"], 0));
//OUTPUT: [ 'shahul-hameed', 'hAmeed' ]
```

#### [snake_case]

> Convert String in Object, Array or String variable to Snake-Case. Specific type of requirement can be addressed like Object Keys or Object values to be Snake-Cased, Retrieve Object keys or values Snake-Cased as array. Find below example for your best needs.

```js
console.log(Snake.isSnakeCased("shahul T"));
//OUTPUT: false

console.log(Snake.getStringSnakeCased("JAckl/kIL"));
//OUTPUT: j_ackl_k_il

console.log(Snake.getStringSnakeCasedWithPos("SHAHUL HAMEED BUHARI", 4, 8));
// OUTPUT: SHAHul_hAMEED BUHARI

console.log(Snake.getObjectKeysSnakeCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] }));
//OUTPUT:{"t":1,"u":{"k":["JKO","opl"],"shahul":"PIANO","b":{"j_i_l_l_jack":[{"banana":"JILL_JACK"},{"j_i_l_l_jack":"APPLE"}]}},"family":["shahul","farook"]}

console.log(Snake.getObjectvaluesSnakeCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] }));
//OUTPUT:{"T":1,"U":{"K":["jko","opl"],"SHAHUL":"piano","B":{"JILL_JACK":[{"BANANA":"j_i_l_l_jack"},{"JILL_JACK":"apple"}]}},"Family":["shahul","farook"]}

console.log(Snake.getKeysSnakeCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] }));
//OUTPUT:["t","u","k","shahul","b","j_i_l_l_jack","banana","j_i_l_l_jack","family"]

console.log(Snake.getValuesSnakeCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] }));
//OUTPUT:[1,"jko","opl","piano","j_i_l_l_jack","apple","shahul","farook"]

console.log(Snake.getStringArraySnakeCased(["Shahul", "hAmeed shahul"]));
//OUTPUT: [ 'shahul', 'h_ameed_shahul' ]

console.log(Snake.getStringArrValSnakeCasedByIndex(["Shahul hameed", "hAmeed"], 0));
//OUTPUT: [ 'shahul_hameed', 'hAmeed' ]
```

#### [Ṭitle Case]

> Convert String in Object, Array or String variable to Ṭitle-Case. Specific type of requirement can be addressed like Object Keys or Object values to be Ṭitle-Cased, Retrieve Object keys or values Ṭitle-Cased as array. Find below example for your best needs.

```js
console.log(Title.isTitleCased("shahul T"));
//OUTPUT: false

console.log(Title.getStringTitleCased("JAckl/kIL"));
//OUTPUT: Jackl/kil

console.log(Title.getStringTitleCased("I’m a little tea pot"));
//OUTPUT: I’m A Little Tea Pot

console.log(Title.getStringTitleCasedWithPos("shahul hameed buhari", 4, 5));
//OUTPUT: shahUl hameed buhari

console.log(Title.getObjectKeysTitleCased({ "T": 1, "U": { "K": ["JKO", "opl"], "abu bakr siddiq": "PIANO", "B": { "jill_jack": [{ "BANANA": "jill_jack" }, { "jill_jack": "APPLE" }] } }, "Family": ["abu bakr siddiq", "farook"] }));
//OUTPUT: {"T":1,"U":{"K":["JKO","opl"],"Abu Bakr Siddiq":"PIANO","B":{"Jill_jack":[{"Banana":"jill_jack"},{"Jill_jack":"APPLE"}]}},"Family":["abu bakr siddiq","farook"]}

console.log(Title.getObjectvaluesTitleCased({ "T": 1, "U": { "K": ["JKO", "opl"], "abu bakr siddiq": "PIANO", "B": { "jill_jack": [{ "BANANA": "jill_jack" }, { "jill_jack": "APPLE" }] } }, "Family": ["abu bakr siddiq", "farook"] }));
//OUTPUT:{"T":1,"U":{"K":["Jko","Opl"],"abu bakr siddiq":"Piano","B":{"jill_jack":[{"BANANA":"Jill_jack"},{"jill_jack":"Apple"}]}},"Family":["Abu Bakr Siddiq","Farook"]}

console.log(Title.getKeysTitleCased({ "T": 1, "U": { "K": ["JKO", "opl"], "abu bakr siddiq": "PIANO", "B": { "jill_jack": [{ "BANANA": "jill_jack" }, { "jill_jack": "APPLE" }] } }, "Family": ["abu bakr siddiq", "farook"] }));
//OUTPUT: ["T","U","K","Abu Bakr Siddiq","B","Jill_jack","Banana","Jill_jack","Family"]

console.log(Title.getValuesTitleCased({ "T": 1, "U": { "K": ["JKO", "opl"], "abu bakr siddiq": "PIANO", "B": { "jill_jack": [{ "BANANA": "jill_jack" }, { "jill_jack": "APPLE" }] } }, "Family": ["abu bakr siddiq", "farook"] }));
//OUTPUT:[1,"Jko","Opl","Piano","Jill_jack","Apple","Abu Bakr Siddiq","Farook"]

console.log(Title.getStringArrayTitleCased(["tutorix is one of best e-platforms", "abu bakr siddiq", "hAmeed abu bakr siddiq", "string", "follow step-by-step instructions", "this is very interesting"]));
//OUTPUT: ['Tutorix Is One Of Best E-platforms', 'Abu Bakr Siddiq', 'Hameed Abu Bakr Siddiq', 'String', 'Follow Step-by-step Instructions', 'This Is Very Interesting']

console.log(Title.getStringArrValTitleCasedByIndex(["Shahul hameed", "hAmeed"], 0));
//OUTPUT: [ 'Shahul Hameed', 'hAmeed' ]
```

## License

MIT
