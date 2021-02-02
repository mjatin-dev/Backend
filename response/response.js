exports.user_created = (payload) => {
    return {
        status: 200,
        message: "User has been created",
        data: payload
    }
}

exports.something_wrong = (payload = []) => {
    return {
        status: 400,
        message: "Something went wrong",
        data: payload
    }
}

exports.internal_server_error = (payload = [], error) => {
    return {
        status: 500,
        message: "Internal server error",
        data: payload,
        error: error
    }
}

exports.already_exist = () => {
    return {
        status: 400,
        message: "Email address already exists"
    }
}

exports.email_unique = () => {
    return {
        status: 200,
        message: "Email address is unique"
    }
}


