function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((title) => title.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const getBorrowedBooksByCondition = (books, condition) => books.filter((book) => book.borrows[0].returned === condition)

  return [getBorrowedBooksByCondition(books, false), getBorrowedBooksByCondition(books, true)]
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  let borrowedBooks = book.borrows;
  borrowedBooks.forEach((borrow) => {
    let account = accounts.find((person) => person.id === borrow.id);
    let obj = account;
    obj["returned"] = borrow.returned
    result.push(obj);
  })
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
