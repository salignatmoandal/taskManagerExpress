const mongoose = require("mongoose");
mongoose.connect.env.MONGODB_URL, {
    useNewUrlParser : true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}