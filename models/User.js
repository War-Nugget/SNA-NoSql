const {Schema, model} = require('mongoose');

const UsersSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
        }
    )
        //Gets total friends
    userSchenma.virtual('friendCount').get(function() {
        return this.friends.length;
    })

    const Users = model('User', UsersSchema);

    module.exports = Users;