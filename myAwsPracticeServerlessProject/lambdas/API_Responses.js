const Responses = {
    _200(data = {}) {
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    },


    _400(data = {}) {
        return{

            statusCode: 400,

            body: JSON.stringify(data)
        }
    }
}

module.exports = Responses;