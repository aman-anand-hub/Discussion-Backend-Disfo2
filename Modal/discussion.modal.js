const { number } = require("joi");
const mongoose = require("mongoose");
const validator = require("validator");

const discussionSchema = new mongoose.Schema({
    id: {
        type: Number,
        min: 1000,
        max: 10000,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        minlength: 6,
        maxlength: 30,
        required: true,
    },

    email: {
        type: String,
        validate: (value) => validator.isEmail(value),
        required: true,
        unique: true,
    },

    content: {
        type: String,
        minlength: 20,
        maxlength: 600,
        default: function() {
            return this.message || "";
        },
    },
});

const discussionModel = mongoose.model("discussionData", discussionSchema);

module.exports = discussionModel;