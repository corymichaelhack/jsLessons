module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('book', {
    nameOfBook: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.ENUM,
      values: [
        'Biography', 'Childrens', 'Classic Literature', 'Comics/Graphic Novels', 'Cookbook', 'Crime/Detective', 'Drama', 'Essay', 'Fable', 'Fairy Tale', 'Fan Fiction', 'Fantasy', 'Folklore', 'Historical Fiction', 'History', 'Horror', 'Humor', 'Journal', 'Lab Report', 'Legend', 'Magical Realism', 'Memoir', 'Meta Fiction', 'Mystery', 'Mythology', 'Mythopeia', 'Narrative NonFiction/Personal Narrative', 'Owners Manual', 'Realistic Fiction', 'Reference Book', 'Religion/Spiritual', 'Science Fiction', 'Self Help', 'Short Story', 'Speech', 'Suspence/Thriller', 'Swashbuckler', 'Tall Tale', 'Textbook', 'Western', 'Young Adult'
      ],
      allowNull: false
    },
    pubYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      validate: {
        max: 5,
        min: 1
      },
      allowNull: false
    }
  })
  return Book
}