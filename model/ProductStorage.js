const {pool} = require("../dbconnection");
class ProductStorage{

    //category 받아 해당 카테고리의 product들 반환
    static ProductByCategoty(category) {
        return new Promise(async(resolve, reject) => {
            pool.getConnection((err, connection) => {
                if(err) {
                    console.error('데이터베이스와 연결할 수 없습니다.');
                    throw err;
                }
            });


            switch(category) {
                case 'zeroWaste' :
                    const query1 = "SELECT * FROM ZeroWasteProduct;";
                    pool.query(query1, function(err,data) {
                        if(err) {
                            console.error('query 실행하지 못함')
                            reject(`${err}`);
                        }
                        else {
                            resolve(data);
                        }
                    })

                    case 'lowCarbon' :
                        const query2 = "SELECT * FROM LowCarbonProduct;";
                        pool.query(query2, function(err,data) {
                            if(err) {
                                console.error('query 실행하지 못함')
                                reject(`${err}`);
                            }
                            else {
                                resolve(data);
                            }
                        })

                    case 'upCycling':
                        const query3 = "SELECT * FROM UpcyclingProduct;";
                        pool.query(query3, function(err,data) {
                            if(err) {
                                console.error('query 실행하지 못함')
                                reject(`${err}`);
                            }
                            else {
                                resolve(data);
                            }
                        })
            }
        })
    }
}

module.exports=ProductStorage;