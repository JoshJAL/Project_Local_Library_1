function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return res = books.reduce((prev, curr) => curr.borrows[0] && !curr.borrows[0].returned ? prev +1 : prev, 0);
}

function getMostCommonGenres(books) {
  const genres = books.reduce((prev, curr) => {
    const genre = prev.findIndex((genre) => genre.name === curr.genre)
    if (genre > -1) {
      prev[genre] = {...prev[genre], count: prev[genre].count +1}
      return prev;
    }
    return [...prev, {name: curr.genre, count: 1}]
  }, [])
  genres.sort((first, second) => second.count - first.count);
  return genres.slice(0, 5);
}

function getMostPopularBooks(books) {
  const borrows = books.map((book) => ({name: book.title, count: book.borrows.length}));
  borrows.sort((first, second) => second.count - first.count);
  return borrows.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const popAuthors = authors.map((author) => ({ ...author, 
    count: books.filter((book) => book.authorId === author.id).length,
    borrowedCount: books.filter((book) => book.authorId === author.id).reduce((prev, curr) => prev + curr.borrows.length, 0)
  })).sort((first, second) => second.borrowedCount - first.borrowedCount);
  let result = popAuthors.map((popular) => {
    return { count: popular.borrowedCount, name: popular.name.first + " " + popular.name.last}
  })
  return result.slice(0, 5);  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
