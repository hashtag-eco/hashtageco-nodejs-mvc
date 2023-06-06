module.exports = (sequelize, Sequelize) => {
    const Uproductscrap = sequelize.define(
      "Uproductscrap",
      {
        product_id: {
            //기본키
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
          },
        member_id: {
            //기본키
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        create_time: {
            type: Sequelize.DATE,
            allowNull: true
        }
      },
      {
        sequelize,
        timestamps: false,
        tableName: "Uproductscrap",
      }
    );
    return Uproductscrap;
  };