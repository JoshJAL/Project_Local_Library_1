function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((title) => title.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const result = [];
  const borrowed = books.filter((borrow) => !borrow.borrows[0].returned);
  const returned = books.filter((inStock) => inStock.borrows[0].returned === true);
  result.push(borrowed);
  result.push(returned);
  return result;
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
