const Joi = require("joi");

const schema = Joi.object({
    id: Joi.number().min(1000).max(10000).required(),
    username: Joi.string().min(6).max(30).required(),
    email: Joi.string().email().required(),
    content: Joi.string().min(20).max(600),
});

const validateDiscussionData = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if(error) {
        return res.status(422).json(error);
    }
    next();
}

module.exports = { validateDiscussionData };