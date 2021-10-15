const { findAuthorById } = require("./books");

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) => nameA.name.last.toLowerCase() < nameB.name.last.toLowerCase() ? -1 : 1);
}

function getTotalNumberOfBorrows(account, books) {
  const {id} = account;
  const result = books.flatMap((book) => book.borrows)
  const updatedResult = result.reduce((prev, curr) => curr.id === id ? prev +1 : prev, 0);
  
  return updatedResult;
}

function getBooksPossessedByAccount(account, books, authors) {
  const {id} = account;
  const result = books.filter((book) => book.borrows.some((borrow) => borrow.id === id && !borrow.returned))
  return result.map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    return {
      ...book, author
    }
  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
