const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { boolean, string } = require('joi');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const organizationSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:false
    },
    organization_type:{
        type:String,
        required:true
    },
    company_name:{
        type:String,
        required:false
    },
    abn_number:{
        type:Number,
        required:false
    },
    category:{
        type:String,
        trim:true
    },
    sub_category:{
        type:String,
        trim:true
    },
    cause:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false
    },
    bank:{
        type:String,
        required:false
    },
    bsb_number:{
        type:Number
    },
    account_number:{
        type:Number
    },
    state:{
        type:string,
        enum:organizationState
    },
    business_email:{
        type:String,
        required:false,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
              throw new Error('Invalid email');
            }
          },
    },
    password: {
        type: String,
        select:false,
        required: false,
        trim: true,
        minlength: 8,
        validate(value) {
          if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
            throw new Error('Password must contain at least one letter and one number');
          }
        },
        private: true, // used by the toJSON plugin
      },
    business_contact_number:{
        type:Number,
        required:false
    },
    BA_contact_person:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    },
    SA_contact_person:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    }
},{
    timeStamps:true
});

// add plugin that converts mongoose to json
organizationSchema.plugin(toJSON);

/**
 * @typedef Organization
 */
const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;

