
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    bookid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    author: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};
