var express = require('express');
var router = express.Router();

router.get('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?page=1&pagesize=100&postalcode=33135&propertytype=CONDOMINIUM', (req, res, next) => {
    res.send(req);
});