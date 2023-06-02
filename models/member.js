module.exports = (sequelize, Sequelize) => {
   const member = sequelize.define("member", {
       memebr_id: { //기본키
           type: Sequelize.INTEGER,
           allowNull: false,
           primaryKey: true
       },
       name: { 
           type: Sequelize.STRING(10),
           allowNull: false
       },
       nickname: {
           type: Sequelize.STRING(10),
           allowNull: false
       },
       email: {
           type: Sequelize.STRING(50),
           allowNull: false   
       },
       password: {
           type: Sequelize.STRING(16),
           allowNull: true
       },
       profile:{
           type: Sequelize.BLOB,
           allowNull: true
       }
   },
   {
       timestamps: false, 
       tableName: 'Member'
   });
   return member;
}