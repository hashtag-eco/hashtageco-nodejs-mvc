// 8주차 강의자료의 models/subscriber.js 참고

module.exports = (sequelize, Sequelize) => {
    const store = sequelize.define(
        "store",
        {
            store_id: {
                // 기본키
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            store_name: {
                // 스토어 이름
                type: Sequelize.STRING
            },
            address: {
                // 스토어 주소
                type: Sequelize.STRING
            },
            web_link: {
                // 웹 주소
                type: Sequelize.STRING
            },
            is_upcycling: {
                // 업사이클링
                type: Sequelize.TEXT('tiny')
            },
            is_low_carbon: {
                // 저탄소
                type: Sequelize.TEXT('tiny')
            },
            is_zero_waste: {
                // 제로웨이스트
                type: Sequelize.TEXT('tiny')
            },
            region_name: {
                // 지역
                type: Sequelize.STRING
            },
            scrap_count: {
                // 스크랩 수
                type: Sequelize.INTEGER
            }
        },
        {
            sequelize,
            timestamps: false,
            tableName: "Store",
        });
    return store;
}