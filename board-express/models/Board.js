export default function BoardModel(mongoose) {
    const boardSchema = mongoose.Schema({
            title: String,
            name: String,
            email: String,
            content: String,
        }, {timestamps: true})
        return mongoose.model('Board', boardSchema)
    }