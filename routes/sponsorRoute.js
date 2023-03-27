const express = require("express");
const sponsorRouter = express.Router();
const SponsorController = require('../controllers/sponsorController');

sponsorRouter.get('/', SponsorController.getSponsor);

sponsorRouter.post('/', SponsorController.createSponsor);

sponsorRouter.patch('/', SponsorController.updateSponsor);

sponsorRouter.delete('/', SponsorController.deleteSponsor);

module.exports = sponsorRouter;