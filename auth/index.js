const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.sigin = (id) => {
    console.log(id)
    var token = jwt.sign({ id: id }, process.env.SECRET);
    return token;
}

exports.verify = async (req, res, next) => {
    let { authorization } = req.headers;
    console.log(authorization);
    if (typeof authorization !== undefined || authorization !== '') {
        if (authorization !== undefined && authorization.startsWith('Bearer ')) {
            authorization = authorization.slice(7, authorization.length);
        }
        if (authorization) {
            console.log(authorization)
            jwt.verify(authorization, process.env.SECRET, (err, result) => {
                if (err) {
                    return res.status(400).json({ status: 400, message: `Not authorised or user's session has been expired` });
                }
                else {
                    req.user = result;
                    next();
                }

            });

        }
        else {
            return res.status(400).json({ status: 400, message: `You're not authorised to access this resource` });
        }
    }
    else {
        return res.status(400).json({ status: 400, message: `Authorization is required` });
    }
}

