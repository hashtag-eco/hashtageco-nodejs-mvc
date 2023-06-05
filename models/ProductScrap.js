module.exports = (sequelize, Sequelize) => {
    //console.log("product model 안1");
    const productscrap = sequelize.define(
      "productscrap",
      {
        scrapId: {
          //기본키
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          unique: true,
        },
        createDate: {
            //업로드날짜
            type: Sequelize.DATE,
          },
        category: {
          //상품카테고리
          type: Sequelize.STRING,
          allowNull: false
        },
        memberId: {
          //상품가격
          type: Sequelize.INTEGER,
        },
        zwproductId: {
            //상품가격
            type: Sequelize.INTEGER,
          },
        ucproductId: {
            //상품가격
            type: Sequelize.INTEGER,
          },
        lcproductId: {
            //상품가격
            type: Sequelize.INTEGER,
          },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "ProductScrap",
      }
    );
    return productscrap;
  };