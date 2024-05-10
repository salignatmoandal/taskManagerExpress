
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Le serveur est en train de se lancer dans le port ${PORT}`)
})




