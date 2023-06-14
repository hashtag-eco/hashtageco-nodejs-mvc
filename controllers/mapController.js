const db = require("../models/index"),
  Map = db.store,
  Op = db.Sequelize.Op;
const positions = [];
const placeList = {};

//카카오api에 마커 띄워 보여줄 db에 저장된 스토어 정보 담긴 배열 구함
const getPositions = async () => {
  let stores = await Map.findAll({
    attributes: ['store_name', 'address', 'region_name']
  });
  console.log("a");

  stores.forEach(element => {
    placeList.title = element.dataValues.store_name;
    placeList.address = element.dataValues.address;
    positions.push({...placeList});
  });
console.log('a');
}


exports.map = (req, res) => {
  res.render("map");
};


//스토어 목록 가져오는 함수
exports.getStore = async (req, res) => {
  console.log("controller함수 안");
  let category = req.params.category;
  let showlist;
  try {
    switch (category) {
      case 'zerowaste' : {
        showlist = await Map.findAll({
          attributes: ['store_id', 'store_name', 'address', 'region_name', 'web_link', 'scrap_count'],
          where: {
            is_zero_waste: 1
          }
        })
        break;
      }
      case 'upcycling' : {
        showlist = await Map.findAll({
          attributes: ['store_id', 'store_name', 'address', 'region_name', 'web_link', 'scrap_count'],
          where: {
            is_upcycling: 1
          }
        })
        break;
      }
      case 'lowcarbon' : {
        showlist = await Map.findAll({
          attributes: ['store_id', 'store_name', 'address', 'region_name', 'web_link', 'scrap_count'],
          where: {
            is_low_carbon: 1
          }
        })
        break;
      }
    }
  }catch(err) {
    return err;
  }
  await getPositions();
  console.log(showlist);
  res.render("mapwithstore", {showlist: showlist, positionss: positions, category: category});
}


 