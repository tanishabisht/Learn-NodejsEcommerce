const errorHandler = (err, req, res, next) => {
    if(err.name === 'UnauthorizedError') res.status(401).json({mssg:'This user is not authorised'})
    if(err.name === 'ValidationError') res.status(401).json({mssg:err})
    return res.status(500).json({mssg:err})
}

module.exports = errorHandler