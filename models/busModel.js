const mongoose = require('mongoose')

const busSchema = new mongoose.Schema({
    busNo: {
        type: String,
        required: [true, 'A Bus must have a Number'],
        trim: true
    },
    busReg: {
        type: String,
        required: [true, 'A Bus must have a Registration Number'],
        unique: true,
        trim: true
    },
    busStops: [String],
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },

})

busSchema.pre('save', function () {
    console.log(this)
})
const busses = mongoose.model('busses', busSchema)

module.exports = busses