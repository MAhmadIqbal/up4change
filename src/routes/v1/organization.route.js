const express = require('express');
const {auth,checkAdminRole} = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const organizationValidation = require('../../validations/organization.validation');
const organizationController = require('../../controllers/organization.controller');

const router = express.Router();

router.get('/getAll',[auth('consumedByAdminOnly'),validate(organizationValidation.getAllOrganization)],organizationController.getAllOrganization)

router.get('/getOrganizationDetail',validate(organizationValidation.getAllOrganization),organizationController.getAllOrganization)

router.post('/create',validate(organizationValidation.getAllOrganization),organizationController.getAllOrganization)

router.put('/updateOrganizationProfile',validate(organizationValidation.getAllOrganization),organizationController.getAllOrganization)

router.delete('/deleteOrganization',validate(organizationValidation.getAllOrganization),organizationController.getAllOrganization)

module.exports = router;