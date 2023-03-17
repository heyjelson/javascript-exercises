const getTheTitles = function(str) {
    const bookTitle = [];
    for(let i = 0; i < str.length; i++) {
        bookTitle.push(str[i].title);
    }

    return bookTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
