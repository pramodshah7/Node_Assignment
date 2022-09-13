const axios = require("axios");

exports.getAllNearByPlaces = (req, res) => {
  let pincode = req.params.pincode;
  const options = {
    method: 'GET',
    url: `https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/${pincode}/validate`,
    headers: {
      'X-RapidAPI-Key': '40c206a2d2msh2fd5570284ae8cbp1edc77jsncca7677fdbee',
      'X-RapidAPI-Host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com'
    }
  };
  // it validates the  pincode
  axios.request(options).then((response) => {
    if (response.data.valid) {
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
      //it returns all the nearby places
      axios.request(options).then((results) => {
        res.status(200).send({ count: results.data.length, results: results.data });
      }).catch((err) => {
        res.send({ message: err })
      });
    } else {
      res.send({ message: "Pincode is not valid!" })
    }
  }).catch((err) => {
    console.log(err.message);
  });
}
