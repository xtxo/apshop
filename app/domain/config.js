/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config', {
    systemName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    systemCName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    configName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    keyWord: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    configValue: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    configDESC: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: '0'
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'config'
  });
};
