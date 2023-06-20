const {handleAuthentication,verifyOtp} = require("../controllers/Auth")

const userRouter = (app) => {
    app.post("/handleAuthentication",handleAuthentication)
    app.post("/verifyOtp",verifyOtp)
}

module.exports = userRouter