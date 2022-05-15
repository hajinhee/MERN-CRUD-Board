export default function BoardModel(mongoose) {
    const boardSchema = mongoose.Schema({
            title: String,
            name: String,
            email: String,
            subject: String,
        }, {timestamps: true})
        return mongoose.model('Board', boardSchema)
    }