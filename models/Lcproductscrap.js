// 8주차 강의자료의 models/subscriber.js 참고

module.exports = (sequelize, Sequelize) => {
    const Lcproductscrap = sequelize.define(
      "Lcproductscrap",
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
        tableName: "Lcproductscrap",
      }
    );
    return Lcproductscrap;
  };