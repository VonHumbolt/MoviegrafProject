import mongoose from "mongoose";

const Schema = mongoose.Schema

const movieImageSchema = new Schema({
    _imageId: mongoose.Schema.Types.ObjectId,
    coverImage: {
        type: String, // generated with Random
        required: true
    },
    imageUrl: {
        type: String, // generated with Random
        required: true
    }
})

const MovieImage = mongoose.model("MovieImage", movieImageSchema)

export default MovieImage;