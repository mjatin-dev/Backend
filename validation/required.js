const validator = require('./validation');

const signup = (req, res, next) => {

    const validationRule = {
        "email": "required|email",
        "name": "required|string",
        "password": "required",
        "gender": "required|string"
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

const standard_login = (req, res, next) => {

    const validationRule = {
        "email": "required|email",
        "password": "required"
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

const update_location = (req, res, next) => {

    const validationRule = {
        "latitude": "required",
        "longitude": "required"
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
    signup, check_email, standard_login, update_location
}