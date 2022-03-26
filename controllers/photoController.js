exports.show = (req, res) => {  
    res.render('search-form')
}
exports.input = (req, res) => {
    const type = req.body.type
    const num = req.body.num
    const context = {type, num}
    res.render('search-result',context)
}