const password = process.env.API_KEY;

const verifyAuth = (req, res, next) =>{
    const passKey = req.headers["x-api-key"];
    if(passKey !== password) {
        res.status(403).send({message: "Unauthorised Access"});
    }
    next();
}

module.exports = { verifyAuth };