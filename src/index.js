module.exports = function reverse (n) {
    let str = String (Math.abs(n));
    return parseInt(str.split("").reverse().join(""));
}
