const { Lower, Upper, Camel, Kebab, Snake, Title } = require('./index.js');

// (function() {
//     console.log(lower.isLowerCased("SHAHUL"));
// })();
/**
 * ====================
 * LOWERCASE
 * ====================
 */
console.log("==============LOWER-CASE STARTED==========");
console.log(Lower.isLowerCased("shahul T"));
console.log(Lower.getStringLowerCased("jAckl"));
console.log(Lower.getStringLowerCasedWithPos("SHAHUL HAMEED BUHARI", 4, 5));
console.log(JSON.stringify(Lower.getObjectLowerCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"], "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Lower.getObjectKeysLowercased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"], "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Lower.getObjectvaluesLowercased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"], "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Lower.getKeysLowerCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"], "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Lower.getValuesLowerCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"], "Family": ["shahul", "farook"] })));
console.log(Lower.getArrayLowercased([{ "Shahul": "hAmeed" }]));
console.log(Lower.getArrValLowerCasedByIndex([{ "Shahul": "HAMEED" }, { "ABU": "FAZIL" }], 0));
console.log("==============LOWER-CASE ENDED==========");
/**
 * ====================
 * UPPERCASE
 * ====================
 */
console.log("==============UPPER-CASE STARTED==========");
console.log(Upper.isUpperCased("shahul T"));
console.log(Upper.getStringUpperCased("jAckl"));
console.log(Upper.getStringUpperCasedWithPos("shahul hameed buhari", 4, 5));
console.log(JSON.stringify(Upper.getObjectUpperCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"], "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Upper.getObjectKeysUpperCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"], "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Upper.getObjectvaluesUpperCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"], "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Upper.getKeysUpperCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"], "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Upper.getValuesUpperCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"], "Family": ["shahul", "farook"] })));
console.log(Upper.getArrayUpperCased([{ "Shahul": "hAmeed" }]));
console.log(Upper.getArrValUpperCasedByIndex([{ "Shahul": "hAmeed" }], 0));
console.log("==============UPPER-CASE ENDED==========");
/**
 * ===========
 * CAMELCASE
 * ===========
 */
console.log("==============CAMEL-CASE STARTED==========");
console.log(Camel.isCamelCased("shahul T"));
console.log(Camel.getStringCamelCased("JAckl/kIL"));
console.log(Camel.getStringCamelCasedWithPos("SHAHUL HAMEED BUHARI", 4, 5));
console.log(JSON.stringify(Camel.getObjectKeysCamelCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"], "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Camel.getObjectvaluesCamelCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"], "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Camel.getKeysCamelCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"], "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Camel.getValuesCamelCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"], "Family": ["shahul", "farook"] })));
console.log(Camel.getStringArrayCamelCased(["Shahul", "hAmeed shahul"]));
console.log(Camel.getStringArrValCamelCasedByIndex(["Shahul", "hAmeed shahul"], 0));
console.log("==============CAMEL-CASE ENDED==========");
/**
 * ===========
 * KEBAB CASE
 * ===========
 */
console.log("==============KEBAB-CASE STARTED==========");
console.log(Kebab.isKebabCased("shahul T"));
console.log(Kebab.getStringKebabCased("JAckl/kIL"));
console.log(Kebab.getStringKebabCasedWithPos("SHAHUL HAMEED BUHARI", 4, 8));
console.log(JSON.stringify(Kebab.getObjectKeysKebabCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Kebab.getObjectvaluesKebabCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Kebab.getKeysKebabCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Kebab.getValuesKebabCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] })));
console.log(Kebab.getStringArrayKebabCased(["Shahul", "hAmeed shahul"]));
console.log(Kebab.getStringArrValKebabCasedByIndex(["Shahul hameed", "hAmeed"], 0));
console.log("==============KEBAB-CASE ENDED==========");
/**
 * ===========
 * SNAKE CASE
 * ===========
 */
console.log("==============SNAKE-CASE STARTED==========");
console.log(Snake.isSnakeCased("shahul T"));
console.log(Snake.getStringSnakeCased("JAckl/kIL"));
console.log(Snake.getStringSnakeCasedWithPos("SHAHUL HAMEED BUHARI", 4, 8));
console.log(JSON.stringify(Snake.getObjectKeysSnakeCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Snake.getObjectvaluesSnakeCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Snake.getKeysSnakeCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] })));
console.log(JSON.stringify(Snake.getValuesSnakeCased({ "T": 1, "U": { "K": ["JKO", "opl"], "SHAHUL": "PIANO", "B": { "JILL_JACK": [{ "BANANA": "JILL_JACK" }, { "JILL_JACK": "APPLE" }] } }, "Family": ["shahul", "farook"] })));
console.log(Snake.getStringArraySnakeCased(["Shahul", "hAmeed shahul"]));
console.log(Snake.getStringArrValSnakeCasedByIndex(["Shahul hameed", "hAmeed"], 0));
console.log("==============SNAKE-CASE ENDED==========");
/**
 * ===========
 * TITLE CASE
 * ===========
 */
console.log("==============TITLE-CASE STARTED==========");
console.log(Title.isTitleCased("shahul T"));
console.log(Title.getStringTitleCased("JAckl/kIL"));
console.log(Title.getStringTitleCased("I’m a little tea pot"));
console.log(Title.getStringTitleCasedWithPos("shahul hameed buhari", 4, 5));
console.log(JSON.stringify(Title.getObjectKeysTitleCased({ "T": 1, "U": { "K": ["JKO", "opl"], "abu bakr siddiq": "PIANO", "B": { "jill_jack": [{ "BANANA": "jill_jack" }, { "jill_jack": "APPLE" }] } }, "Family": ["abu bakr siddiq", "farook"] })));
console.log(JSON.stringify(Title.getObjectvaluesTitleCased({ "T": 1, "U": { "K": ["JKO", "opl"], "abu bakr siddiq": "PIANO", "B": { "jill_jack": [{ "BANANA": "jill_jack" }, { "jill_jack": "APPLE" }] } }, "Family": ["abu bakr siddiq", "farook"] })));
console.log(JSON.stringify(Title.getKeysTitleCased({ "T": 1, "U": { "K": ["JKO", "opl"], "abu bakr siddiq": "PIANO", "B": { "jill_jack": [{ "BANANA": "jill_jack" }, { "jill_jack": "APPLE" }] } }, "Family": ["abu bakr siddiq", "farook"] })));
console.log(JSON.stringify(Title.getValuesTitleCased({ "T": 1, "U": { "K": ["JKO", "opl"], "abu bakr siddiq": "PIANO", "B": { "jill_jack": [{ "BANANA": "jill_jack" }, { "jill_jack": "APPLE" }] } }, "Family": ["abu bakr siddiq", "farook"] })));
console.log(Title.getStringArrayTitleCased(["tutorix is one of best e-platforms", "abu bakr siddiq", "hAmeed abu bakr siddiq", "string", "follow step-by-step instructions", "this is very interesting"]));
console.log(Title.getStringArrValTitleCasedByIndex(["Shahul hameed", "hAmeed"], 0));
console.log("==============TITLE-CASE ENDED==========");