const streamifier = require("streamifier");
const { v2: cloudinary } = require("cloudinary");

const uploadBufferImage = async (chunk, productName) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `GOSHOP/${productName}`,
        resource_type: "auto",
        public_id: chunk.originalname,
        transformation: [
          {
            height: 570,
            width: 400,
            crop: "scale",
            quality: "auto",
            fetch_format: "auto",
          },
        ],
      },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    streamifier.createReadStream(chunk.buffer).pipe(uploadStream)
  });
};

module.exports = uploadBufferImage;
