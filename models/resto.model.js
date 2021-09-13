module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            restaurant_id : String,
            cuisine: String,
            borough: String,
            dateTime: {
              type: Date,
              default: Date.now
              },
          },
        { timestamps: true }
      );
    
      schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const Restaurant = mongoose.model("restaurant", schema);
      return Restaurant;

  };