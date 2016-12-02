

module.exports.generateRandomId = function () {
    return getRandomString(5) + Date.now();
};

function getRandomString(length) {
    return Array.from(Array(length), (x, i) => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('');
}