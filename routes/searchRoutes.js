const express = require('express');
const router = express.Router();
const {
  getAllNearByPlaces
} = require('../controllers/searchController');

router.get('/search/:pincode', getAllNearByPlaces);

module.exports = router;


