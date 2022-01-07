const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { boolean } = require('joi');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const bankSchema = mongoose.Schema({
    account_name:{
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
        type:number
    },
    authorised_person_contact:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    },{
    contact_number:number
    }]
})

bankSchema.plugin(toJSON);

const Bank= mongoose.model('Bank',bankSchema)

module.exports = Bank;