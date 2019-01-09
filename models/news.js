const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ArticleSchema = new Schema ({
    title: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
    notes: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    },
});

const Article = mongoose.model("news", ArticleSchema);

module.exports = Article;