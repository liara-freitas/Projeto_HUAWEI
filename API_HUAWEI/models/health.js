const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const { Schema } = mongoose;

const healthRecordsSchema = new Schema({
  healthRecords: [
    {
      startTime: {
        type: Number, // Armazenar como string
        required: true,
      },
      endTime: {
        type: Number, // Armazenar como string
        required: true,
      },
      dataTypeName: {
        type: String,
        required: true,
      },
      value: [
        {
          fieldName: String,
          integerValue: Number,
          floatValue: Number,
          stringValue: String,
        },
      ],
      id: { type: String, required: true },

      subDataRelation: [
        {
          startTime: Number,
          endTime: Number,
          dataTypeName: String,
          dataCollectorId: String,
        },
      ],
    },
  ],
  });




const Health = mongoose.model("Health", healthRecordsSchema);


module.exports = {
  Health,
  healthRecordsSchema,
};