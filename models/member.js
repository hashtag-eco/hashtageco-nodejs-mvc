// 8주차 강의자료의 models/subscriber.js 참고
require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const member = sequelize.define(
    "member",
    {
      member_id: {
        //기본키
        type: Sequelize.INTEGER,
        autoIncrement: true, // 추가
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      nickname: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      profile: {
        type: Sequelize.BLOB,
        allowNull: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      tableName: "Member",
    }
  );
  return member;
};
