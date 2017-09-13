var books = [
    {
        title: "Harry Potter",
        author: "JK Rowling"
    },
    {
        title: "Les Miserables",
        author: "Victor Hugo"
    }
];

var id = 0;

var controller = {
    create: function (req, res, next) {
        var newBook = req.body;
        books.push(newBook);
        id++;
        //res.status(200).send(books)
        res.status(200).send(books);
    },

    read: function (req, res, next) {
        res.status(200).send(books);

    },

    readByID: function (req, res, next) {
        var id = req.params.id;
        var book = book[id];

        res.status(200).json(book);
    },

    update: function (req, res, next) {
        var id = req.params.id;

        var newObj = req.body;

        books[id] = newObj;

        res.status(200).send(books)
    },

    delete: function (req, res, next) {
        var id = req.params.id;

        books.splice(id,1)

        res.status(200).send(books)
    }
};

module.exports = controller;