var getType = function (value) {
    return Object.prototype.toString.call(value).slice(8, -1);
};

var isArray = function (value) {
    return getType(value) === 'Array';
};

export { getType, isArray };
