'use strict';
require('dotenv').config();
const path = require('path');
const express = require('express');
const { initDb } = require('./src/db/index.js');
const { startClient } = require('./src/bot/client.js');
const apiRoutes = require('./src/routes/api.js');
const authRoutes = require('./src/routes/auth.js');
const usersRoutes = require('./src/routes/users.js');

const app = express();
const PORT = process.env.PORT || 3000;

initDb();
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(authRoutes);
app.use(apiRoutes);
app.use(usersRoutes);

app.get('/', (req, res) => {
  res.redirect('/login');
});

startClient().catch((err) => {
  console.error('Falha ao iniciar cliente WhatsApp:', err);
});

app.listen(PORT, () => {
  console.log(`Painel em http://localhost:${PORT}`);
});
