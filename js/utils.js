const guid = () => ((( 1 + Math.random())*0x10000)|0).toString(16).substring(1);
const generateId = (len=10) => {
    let id = '';

    if (!len || len < 1) {
        return '';
    }

    while (len--) {
        id += guid();
    }
    return id;
};

module.exports = {
    generateId,
};
