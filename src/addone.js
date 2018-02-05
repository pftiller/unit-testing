function addOne(num) {
    console.log('hello');
    if(typeof num == 'number') {
        return num + 1;
    }else {
        return false;
    }
    return false;
}

module.exports = addOne;