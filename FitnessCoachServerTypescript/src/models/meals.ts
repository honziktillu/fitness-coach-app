module.exports = (sequelize: any, Sequelize: any) => {
  return sequelize.define(
    "meals",
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: true,
    }
  );
};
