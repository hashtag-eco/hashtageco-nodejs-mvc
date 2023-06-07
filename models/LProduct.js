module.exports = (sequelize, Sequelize) => {
    //console.log("product model 안1");
    const lcproduct = sequelize.define(
      "lcproduct",
      {
        product_id: {
          //기본키
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          unique: true,
        },
        productName: {
          //상품이름
          type: Sequelize.STRING,
        },
        price: {
          //상품가격
          type: Sequelize.INTEGER,
        },
        uploadDate: {
          //업로드날짜
          type: Sequelize.DATE,
        },
        urlLink: {
          //상품구매링크
          type: Sequelize.STRING,
        },
        scrapCount: {
          //상품스크랩수
          type: Sequelize.STRING,
        },
        category: {
          //상품카테고리
          type: Sequelize.STRING,
        },
        category1: {
          //상품 카테고리1
          type: Sequelize.STRING,
        },
        category2: {
          //상품카테고리2
          type: Sequelize.STRING,
        },
        keyword: {
          //상품키워드
          type: Sequelize.STRING,
          allowNull: true,
        },
  
        mallName: {
          //상품 판매몰 이름
          type: Sequelize.STRING,
        },
        brand: {
          //상품 브랜드
          type: Sequelize.STRING,
        },
        imageLink: {
          //상품 이미지 링크
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "LowCarbonProduct",
      }
    );
    return lcproduct;
  };