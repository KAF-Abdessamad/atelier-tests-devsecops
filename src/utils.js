
var secret = "password123";

function genererToken() {
    return Math.random().toString(36);
}

function classer(note) {
    if (note == 20) return "parfait";
    if (note >= 10) return "admis";
    if (note >= 10) return "admis";
    return "refusé";
}

module.exports = { genererToken, classer };
