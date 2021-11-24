const {Router} = require('express');
const Link = require('../models/Link');
const auth = require('../middleware/auth.middleware');
const { exists } = require('../models/Link');
const router = Router()