var axios = require('axios');
var qs = require('qs');

const getToken = async (req, res) => {
  var data = qs.stringify({
    grant_type: 'client_credentials',
    scope: 'icdapi_access',
  });
var config = {
  method: 'post',
  url: 'https://icdaccessmanagement.who.int/connect/token',
  headers: {

    Authorization:
      'Basic MWI4ZTk5MWQtMDBjMy00YWM1LTk5MWQtNzUxZWVlOWVlNWMzXzMzNDRiZjcwLTdmZTAtNGRjMS1hZTQ5LTFjNTgwNDE2YTgyZTpWaExEYTRNaW5RbnJSZzB1NTVERU9ycFlXaXJNM0ZRTUFYT1o2Vi8wRzBZPQ==',
      //'Basic  c1f69b31d6ad413d8ac0d80f045a62766869c7af4e75436a9a68d53b0d2efa2cJ7DB0DdAsvqnVtueut444Ng7in3qi984xmWZXVnBLjg=',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  data: data,
};

const token = await axios(config)

.then(function (response) {
    // console.log(
    //   JSON.stringify(response.data, 'getting mytoken aggrandize'),
    // );
    let my_token = response.data.access_token;
    return my_token;
  })
  .catch(function (error) {
    res.status(404).send({error: error.message});
  });

res.json(token);
}

const getCode = async (req, res) => {

  const {q} = req.query;
  const token = req.headers['x-auth-token'];

 

  var configuracion = {
    method: 'get',
    url: `https://id.who.int/icd/release/11/2021-05/mms/search?q=${q}&flatResults=true&highlightingEnabled=false`,
    headers: {
      "accept": "application/json",
      "API-Version": "v2",
      "Accept-Language": "es",
      Authorization: "Bearer " + token, 
    }
  };


  const data = await axios(configuracion)
  .then(function (response) {
    let my_data = response.data;
    return my_data;
  })
  .catch(function (error) {
    res.status(404).send({error: error.message});
  });

res.json(data);
}


module.exports = { getToken, getCode }

