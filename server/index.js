// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const fs = require('fs');

const app = express();
const PORT = 5000;
const SALES_FILE_PATH = './json/sales.json';
const CLIENTS_FILE_PATH = './json/clients.json';
const PRODUCTS_FILE_PATH = './json/products.json';
const USERS_FILE_PATH = './json/users.json';
const OFFICES_FILE_PATH = './json/branchOffice.json';

app.use(bodyParser.json());
app.use(cors())
app.use(function(req, res, next) {
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
    next();
});

const readOffices = () => {
  try {
    const data = fs.readFileSync(OFFICES_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data from file:', error);
    return [];
  }
};

const readUsers = () => {
  try {
    const data = fs.readFileSync(USERS_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data from file:', error);
    return [];
  }
};

const readProducts = () => {
  try {
    const data = fs.readFileSync(PRODUCTS_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data from file:', error);
    return [];
  }
};

const readSales = () => {
  try {
    const data = fs.readFileSync(SALES_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data from file:', error);
    return [];
  }
};

const RegisterSale = (data) => {
  try {
    fs.writeFileSync(SALES_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing data to file:', error);
  }
};


const readClient = () => {
    try {
      const data = fs.readFileSync(CLIENTS_FILE_PATH, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading data from file:', error);
      return [];
    }
};
  
const RegisterClient = (data) => {
    try {
      fs.writeFileSync(CLIENTS_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
      console.error('Error writing data to file:', error);
    }
};

app.get('/api/offices', (req, res) => {
  const data = readOffices();
  res.json(data);
});

app.get('/api/users', (req, res) => {
  const data = readUsers();
  res.json(data);
});

app.get('/api/products', (req, res) => {
  const data = readProducts();
  res.json(data);
});

app.get('/api/sales', (req, res) => {
  const data = readSales();
  res.json(data);
});

app.post('/api/getsale', (req, res) => {
  const { id } = req.body
  const data = readSales();
  const sale = data.filter(sls => sls.id == id);
  console.log()
  res.json(sale);
});

app.post('/api/newsale', (req, res) => {
  const data = readSales();
  const newRecord = req.body;
  data.push(newRecord);
  RegisterSale(data);
  res.json({ success: true });
});

app.get('/api/clients', (req, res) => {
  const data = readClient();
  res.json(data);
});

app.post('/api/newclient', (req, res) => {
  const data = readClient();
  const newRecord = req.body;
  data.push(newRecord);
  RegisterClient(data);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
