const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema(
	{
		busNo: {
			type: String,
			required: [ true, 'A Bus must have a Number' ],
			trim: true
		},
		busReg: {
			type: String,
			required: [ true, 'A Bus must have a Registration Number' ],
			trim: true
		},
		date: {
			type: Date,
			default: Date.now(),
			select: true
		},
		from: {
			type: String,
			required: [ true, 'A ticket must have a From' ]
		},
		to: {
			type: String,
			required: [ true, 'A ticket must have a To' ]
		},
		numberAdults: {
			type: Number,
			default: 0
		},
		numberChildren: {
			type: Number,
			default: 0
		},
		numberSC: {
			type: Number,
			default: 0
		},
		fare: {
			type: Number,
			required: [ true, 'A ticket must have a price' ]
		},
		txnId: {
			type: String
		}
	},
	{
		toJSON: {
			virtuals: true
		},
		toObject: {
			virtuals: true
		}
	}
);

ticketSchema.pre('save', function() {
	console.log(this);
});
const ticket = mongoose.model('ticket', ticketSchema);

module.exports = ticket;
