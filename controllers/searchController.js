const axios = require("axios");

exports.getAllNearByPlaces = async (req, res, next) => {
  let pincode = req.params.pincode
  const options = {
    method: 'POST',
    url: 'https://pincode.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '40c206a2d2msh2fd5570284ae8cbp1edc77jsncca7677fdbee',
      'X-RapidAPI-Host': 'pincode.p.rapidapi.com'
    },
    data: `{"searchBy":"pincode","value":${pincode}}`
  };

  await axios.request(options).then((results) => {
    res.status(200).send({ count: results.data.length, results: results.data });
  }).catch((err) => {
    return res.send({ message: err })
  });
}

