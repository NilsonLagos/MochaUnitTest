const chai = require('chai')
chaiHttp = require('chai-http')
let should = chai.should()
let expect = require('chai').expect
chai.use(chaiHttp)
const server = require('../app')
const Test = require('../models/Test')
const fs = require('fs')

const json = JSON.parse(fs.readFileSync("test_json_nosteps.json", "utf8"));


describe('routes',() => {
    afterEach((done)=>{
        Test.collection.drop()
        done()
    })       
    it('create_test status should be 200 and result should be true', (done) => {
        chai.request(server)
            .post('/create_test/1')
            .send(json)
            .end((err, res) => {
                expect(res.body.result).to.equal('true')
                res.should.have.status(200)              
                done()
            })
    })
    it('add_steps status should be 200', (done) => {
        chai.request(server)
            .post('/create_test/1')
            .send(json)
            .end((err, res) => {
                let id = res.body.id             
                chai.request(server)
                    .post('/add_steps/'+id)
                    .send(json)
                    .end((err, res) => {
                        res.should.have.status(200)              
                    })  
                done()
            })        
    })
    it('add_steps status should be 200 (second test)', (done) => {
        let test = new Test({ name: "Test 2"})
        test.save((err, data)=>{
            chai.request(server)
                .post('/add_steps/'+data._id)
                .send(json)
                .end((err, res) => {
                    res.should.have.status(200)              
                    done()
                })
        })        
    })         
})

