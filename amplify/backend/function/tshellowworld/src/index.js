const ExifReader = require("exifreader");

const DataStore = require("@aws-amplify/datastore");
const Video = require("./models");

exports.handler = async (event) => {
  // TODO implement
  await DataStore.save(
    new Video({
      name: "Lorem ipsum dolor sit amet",
      s3location: "Lorem ipsum dolor sit amet",
      authorID: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
    })
  );

  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify("Hello Andy from Lambda!"),
  };
  return response;
};
