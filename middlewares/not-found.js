const notFound = (req, res) => {
    console.log(req.originalUrl.split('/')[1])
    res.status(404).send("Route does not exist")
}

module.exports = notFound;
