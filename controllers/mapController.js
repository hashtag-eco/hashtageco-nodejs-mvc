const db = require("../models/index"),
  Map = db.store,
  Op = db.Sequelize.Op;
const positions = [];
const addresses = [];
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
    //addresses.push(element.dataValues.address);
    positions.push({...placeList});
  });
//console.log(positions);
console.log('a');
}

const getAddresses = async (list) => {
  list.forEach(element => {  
    addresses.push(element.dataValues.address);
  })
 
}

// stores.forEach(element => {
//   placeList.title = element.dataValues.store_name;
//   placeList.address = element.dataValues.address;
//   positions.push({...placeList});
// });
// for(let i = 0; i < stores.length; i++) {
//   placeList.title = stores[i].dataValues.store_name;
//   placeList.address = stores[i].dataValues.address;
//   positions.push({...placeList});
// }
console.log(positions[0]);
exports.map = (req, res) => {
  res.render("map");
};

//카테고리별로 상품 보여주도록 함
// exports.respondWithCategory = (req, res) => {
//   let paramsCategory = req.params.category;
//   //product.ejs를 랜더링할 때 변수 category를 product.ejs에 넘겨줌
//   // -> product.ejs에서 <% category %> 로 접근 가능해짐
//   switch (category) {
//     case 'zeroWaste' :
//       res.render("product", { category: paramsCategory});
//   }
//   res.render("product", { category: paramsCategory});
// };

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
  //console.log(showlist);
  await getPositions();
  await getAddresses(showlist);
  console.log("왜안나옴ㅁㅁㅁ");
  console.log(addresses);
  console.log(addresses[0]);
  res.render("mapwithstore", {showlist: showlist, positionss: positions, addresses: addresses, category: category});
}

//지도 위치 변경하기 
exports.updateMap = async(req, res) => {
  //async function postScrap()
  //const uid = req.session.idx;
  db.Zwproductscrap.create({
    member_id: uid,
    product_id: parseInt(req.body.scrapItemId)
  })
  var responseData = {};
  res.json(responseData);


}
 