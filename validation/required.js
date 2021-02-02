const validator = require('./validation');

const signup = (req, res, next) => {

    const validationRule = {
        "email": "required|email",
        "name": "required|string",
        "password": "required",
        "gender": "requies|string"
    }

    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    status: 412,
                    message: 'Validation failed',
                    errors: err.errors
                });
        } else {
            next();
        }
    });
}
const check_email = (req, res, next) => {

    const validationRule = {
        "email": "required|email"
    }

    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    status: 412,
                    message: 'Validation failed',
                    errors: err.errors
                });
        } else {
            next();
        }
    });
}

module.exports = {
    signup, check_email
}