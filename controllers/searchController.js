const axios = require("axios");

exports.getAllNearByPlaces = async (req, res) => {
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
  await axios.request(options).then(async (response) => {
    if (response.data.valid) {
      const options = {
        method: 'POST',
        url: 'https://pincode.p.rapidapi.com/',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': '40c206a2d2msh2fd5570284ae8cbp1edc77jsncca7677fdbee',
          'X-RapidAPI-Host': 'pincode.p.rapidapi.com'
        },
        data: `{"searchBy":"pincode","value":${pincode}}`
      };
      //it returns all the nearby places
      await axios.request(options).then((results) => {
        return res.status(200).send({ message: "Success", count: results.data.length, results: results.data });
      }).catch((error) => {
        return res.send({ msg: error.message })
      });
    } else {
      return res.send({ message: "Pincode is not valid!" })
    }
  }).catch((error) => {
    return res.send({ msg: error.message });
  });
}
