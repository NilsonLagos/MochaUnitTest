const Test = require('../models/Test')

function createTest(req, res) {
    let jsonRecieved = req.body
    let newTest = new Test({name: 'Test 1'});
    newTest.save((err,test) => {
        if(err) {
            res.send(err);
        }
        else {
            // let response = {
            //     'result': 'true',
            //     'id': test._id
            // }
            // res.json(response);
            let jsonRes = {}
            jsonRes.result="true",
            jsonRes.id=test._id
            res.writeHead(200, {'Content-Type':'application/json'})
            res.end(JSON.stringify(jsonRes))
        }
    })
}

module.exports = createTest