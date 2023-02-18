module.exports = function towelSort(matrix) {
    if ((matrix === undefined) || (matrix.length === 0)) {
        return [];
    }
    let result = [];
    result = matrix.reduce((res, current, i) => {
        return res.concat((!(i % 2) ? current : current.reverse()));
    }, [])
    return result;
}


