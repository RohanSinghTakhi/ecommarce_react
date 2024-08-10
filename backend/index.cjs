const connectToDatabase = require('./db.cjs');
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
app.use('/api', require('./routes/Signup.cjs'));

connectToDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`);
    });
}).catch(err => {
    console.error('Failed to connect to the database:', err);
    process.exit(1);
});
