const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
const ArticleSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	link: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	saved: {
		type: Boolean,
		default: false
	},
	notes: [
		{
			type: Schema.Types.ObjectId,
			ref: "Comments"
		}
	]
});

// This creates our model from the above schema using mongoose's model method
const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;