let sponsorArr = [];

const createSponsor = (req, res) => {
    sponsorArr.push(req.body);
    console.log(req.body);
    console.log(sponsorArr);
    res.send('sucess');
}

const getSponsor = (req, res) => {
    if (req.params && req.params.id) {
      res.json({message: sponsorArr.filter(s => s.id === req.params.id)})
    }
    
    res.json({message: sponsorArr})
}

const updateSponsor = (req, res) => {
    sponsorArr.push(req.body);
    console.log(req.body)
    console.log(sponsorArr)
    res.send('sucess')
}

const deleteSponsor = (req, res) => {
    sponsorArr.push(req.body);
    console.log(req.body)
    console.log(sponsorArr)
    res.send('sucess')
}

module.exports = {
    createSponsor,
    getSponsor,
    updateSponsor,
    deleteSponsor
}