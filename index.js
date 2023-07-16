const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.post('/v1/plan-list', async (req, res) => {
  try {
    const response = await axios.post('https://devcore02.cimet.io/v1/plan-list', req.body, {
      headers: {
        'Content-Type': 'application/json',
        'Api-key': '4NKQ3-815C2-8T5Q2-16318-55301',
        'Auth-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5IjoiNE5LUTMtODE1QzItOFQ1UTItMTYzMTgtNTUzMDEiLCJzdWIiOjQzOCwiaXNzIjoiaHR0cHM6Ly9kZXZjb3JlMDIuY2ltZXQuaW8vdjEvZ2VuZXJhdGUtdG9rZW4iLCJpYXQiOjE2ODk1MDM3NzgsImV4cCI6MTY4OTUxNDU3OCwibmJmIjoxNjg5NTAzNzc4LCJqdGkiOiI1QUpXOGp6T2VmelJMZ2U1In0.rj87Cu9_7l1XPQTBAmGXBx8dXelAhcJGzO9hKZR73Kc',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
