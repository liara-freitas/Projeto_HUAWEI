const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const { Schema } = mongoose;



const stepsSchema = new Schema({
  group: [
    {
      startTime: Number,
      endTime: Number,
      sampleSet: [
        {
          dataCollectorId: String,
          samplePoints: [
            {
              startTime: Number,
              endTime: Number,
              dataTypeName: String,
              originalDataCollectorId: String,
              value: [
                {
                  fieldName: String,
                  integerValue: Number,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});


const Step = mongoose.model("Step", stepsSchema);

module.exports = {
  Step,
  stepsSchema,
};
