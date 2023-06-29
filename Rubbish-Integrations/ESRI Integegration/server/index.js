const express = require('express');
const https = require('https');

const app = express();
const PORT = 3109; // Choose a port number different from your React app's port

const bearer_token = process.env.RUBBISH_BEARER_TOKEN || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtSUQiOiJTa2VDOU9rc3VjS29BV0dwbkVwOCIsInRlYW1BcGlLZXlJRCI6Ind5ZXhqakFRZjlMUDRTVDhRU3h4IiwiaWF0IjoxNjg2MDk3ODc5LCJleHAiOjE3MTc2MzM4Nzl9.HSwZqZI-liT29CHOZkohOYgbSIBDT865hymTKefhZXc" // input your Rubbish Bearer Token Here 
const team_id = process.env.TEAM_ID || "SkeC9OksucKoAWGpnEp8"

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      return res.status(200).json({});
    }
    next();
  });
  

app.get('/api/data', (req, res) => {
  const options = {
    hostname: 'qr-dev.rubbish.love',
    path: `/public/api/v1/reports/${team_id}/get`,
    headers: {
      'Authorization': `Bearer ${bearer_token}`
    }
  };

  const request = https.get(options, (response) => {
    let responseData = '';

    response.on('data', (chunk) => {
      responseData += chunk;
    });

    response.on('end', () => {
      const data = JSON.parse(responseData);
      res.json(data);
    });
  });

  request.on('error', (error) => {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  });

  request.end();
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
