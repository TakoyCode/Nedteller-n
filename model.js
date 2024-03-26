// Modell
const model = {
    time: {
        toEasterMilli: null,
        days: null,
        hours: null,
        min: null,
        sec: null,
    },

    easterDate: new Date(new Date("2024-03-31").setHours(0, 0, 0, 0)),
    timeNow: new Date(),

    funfacts: [
        "The Easter Bunny legend began in Germany",
        "The holiday was named after the Anglo-Saxon Goddess, Eostre",
        "More than 1.5 million Cadbury Creme Eggs are produced every day",
        "The act of painting eggs originates from a Ukrainian tradition",
        "The world's largest Easter egg weighs in at 5000lbs",
        "Pretzels used to be associated with Easter",
        "The UK's first chocolate egg was produced in Bristol in 1873",
    ],
}