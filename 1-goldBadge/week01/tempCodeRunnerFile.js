let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('Force Awakens')
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');

movies.forEach(f => console.log(f))