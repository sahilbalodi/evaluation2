
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    author: DataTypes.STRING,
    id2: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return User;
};
