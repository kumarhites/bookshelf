export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/books") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            books: [
              {
                id: 1,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                year: 1960,
                image:
                  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg",
                shelf: "read",
              },
              {
                id: 2,
                title: "Pride and Prejudice",
                author: "Jane Austen",
                year: 1813,
                image:
                  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885.jpg",
                shelf: "want to read",
              },
              {
                id: 3,
                title: "1984",
                author: "George Orwell",
                year: 1949,
                image:
                  "https://books.google.co.in/books/publisher/content?id=AJ4REAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0WPHj-zYcU_ZLP2YCD9Q0CpVIjqg&w=1280",
                shelf: "currently reading",
              },
              {
                id: 4,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                year: 1925,
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
                shelf: "read",
              },
              {
                id: 5,
                title: "Moby-Dick",
                author: "Herman Melville",
                year: 1851,
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Moby-Dick_FE_title_page.jpg/220px-Moby-Dick_FE_title_page.jpg",
                shelf: "want to read",
              },
              {
                id: 6,
                title: "To the Lighthouse",
                author: "Virginia Woolf",
                year: 1927,
                image:
                  "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/ToTheLighthouse.jpg/220px-ToTheLighthouse.jpg",
                shelf: "currently reading",
              },
              {
                id: 7,
                title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                year: 1951,
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/220px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
                shelf: "read",
              },
              {
                id: 8,
                title: "Brave New World",
                author: "Aldous Huxley",
                year: 1932,
                image:
                  "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/BraveNewWorld_FirstEdition.jpg/220px-BraveNewWorld_FirstEdition.jpg",
                shelf: "want to read",
              },
              {
                id: 9,
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                year: 1954,
                image:
                  "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
                shelf: "currently reading",
              },
              {
                id: 10,
                title: "Jane Eyre",
                author: "Charlotte Brontë",
                year: 1847,
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jane_Eyre_title_page.jpg/220px-Jane_Eyre_title_page.jpg",
                shelf: "want to read",
              },
              {
                id: 11,
                title: "The Hobbit",
                author: "J.R.R. Tolkien",
                year: 1937,
                image:
                  "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/TheHobbit_FirstEdition.jpg/220px-TheHobbit_FirstEdition.jpg",
                shelf: "read",
              },
              {
                id: 12,
                title: "Frankenstein",
                author: "Mary Shelley",
                year: 1818,
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Frankenstein_1818_edition_title_page.jpg/220px-Frankenstein_1818_edition_title_page.jpg",
                shelf: "want to read",
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Books list not found.",
        });
      }
    }, 2000);
  });
};
