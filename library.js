//  1. Добавление книги в библиотеку
function addBook(library, title, author, year, genre, pages) {
    library.books[title] = { title, author, year, genre, pages };
  }
  // 2. Поиск книг по автору
  function findBooksByAuthor(library, author) {
    return Object.values(library.books).filter(book => book.author === author);
  }
  // 3. Фильтрация книг по жанру
  function filterBooksByGenre(library, genre) {
    return Object.values(library.books).filter(book => book.genre === genre);
  }
  // 4. Генерация отчета по количеству книг каждого жанра
  function genreReport(library) {
    const genres = {};
    Object.values(library.books).forEach(book => {
      const genre = book.genre;
      if (genres[genre]) {
        genres[genre] += 1;
      } else {
        genres[genre] = 1;
      }
    });
    return genres;
  }
  // 5. Генерация отчета по среднему количеству страниц
  function averagePagesReport(library) {
    const totalBooks = Object.values(library.books);
    const totalPages = totalBooks.reduce((acc, book) => acc + book.pages, 0);
    return totalPages / totalBooks.length;
  }
  // 6. Сортировка книг по году издания 
  function sortBooksByYear(library) {
    return Object.values(library.books).sort((a, b) => b.year - a.year);
  }
  // 7. Удаление книги из библиотеки
  function removeBook(library, title) {
    if (library.books[title]) {
      delete library.books[title];
    }
  }
  
  // 8. Вывод обновленной библиотеки
  const library = {
    books: {},
    addBook,
    findBooksByAuthor,
    filterBooksByGenre,
    genreReport,
    averagePagesReport,
    sortBooksByYear,
    removeBook,
  };
  
  
  addBook(library, "Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
  addBook(library, "Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
  addBook(library, "1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);
  
  console.log('2. Поиск книг по автору')
  console.log(findBooksByAuthor(library, "Дж. Р. Р. Толкиен"));
  
  console.log('3. Фильтрация книг по жанру')
  console.log(filterBooksByGenre(library, "Фэнтези"));
  
  console.log('4. Генерация отчета по количеству книг каждого жанра')
  console.log(genreReport(library));
  
  console.log('5. Генерация отчета по среднему количеству страниц')
  console.log(`Среднее количество страниц: 
  ${averagePagesReport(library)}`);
  
  console.log('6. Сортировка книг по году издания')
  console.log(sortBooksByYear(library));

  console.log('7. Удаление книги из библиотеки')
  removeBook(library, "1984");
  
  console.log('8. Вывод обновленной библиотеки')
  console.log(library.books);
  
