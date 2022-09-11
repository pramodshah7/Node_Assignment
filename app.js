const express = require('express')
const app = express()
const PORT = 3000;
const searchRoutes = require('./routes/searchRoutes')

//routes
app.use("/", searchRoutes);

//server listen on port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports = app;