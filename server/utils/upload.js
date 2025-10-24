import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get MongoDB credentials from environment variables
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// Construct the full MongoDB connection URL
const DB_URL = `mongodb+srv://${username}:${password}@blog-app.13q0ztq.mongodb.net/?appName=blog-app
`;


const storage = new GridFsStorage({
    url: DB_URL,
    options: { useNewUrlParser: true, useUnifiedTopology: true }, // Added useUnifiedTopology for modern Mongo
    file: (request, file) => {
        const match = ["image/png", "image/jpg", "image/jpeg"]; // Added jpeg for robustness

        // Correction: file.mimetype is the correct property, not file.memeType
        if (match.indexOf(file.mimetype) === -1)
            // If mime type is not supported, still save it with a default name structure
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

// Export the multer instance configured with the storage engine
export default multer({ storage });
