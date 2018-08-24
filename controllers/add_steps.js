
function addSteps(req, res) {
    let id = req.params.id
    let jsonRecieved = req.body
    res.json({ id })
}

module.exports = addSteps