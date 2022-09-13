const express = require('express')
const app = express()
const PORT = 3000;
const bodyparser = require('body-parser');
const searchRoutes = require('./routes/searchRoutes')

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

//routes
app.use("/", searchRoutes);

//server listen on port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports = app;