
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    author: DataTypes.STRING,
    bookid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  users.removeAttribute('id');
  return users;
};
