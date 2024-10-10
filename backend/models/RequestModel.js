const mongoose = require('mongoose')


const Schema = mongoose.Schema

const requestSchema = new Schema({
    Entity : Array,
    Country : Array,
    Country2 : Array,
    ISP : Array,
    Domain : String,
    DashboardName : String,
    ISP2 : String,
    Provider : String,
    Filter : String,
    ListName : String,
    AdditionalInformation : String,
    Is_Amazon : Boolean,
    Is_Paypal : Boolean,
    Is_Fedex :  Boolean,
    Is_Insurance:Boolean,
    Is_Hardbounce:Boolean

},{timestamps : true})

module.exports = mongoose.model('Request',requestSchema)
