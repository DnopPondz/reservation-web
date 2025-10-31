import mongoose from "mongoose";

export async function connectDatabase(uri) {
  if (!uri) {
    throw new Error("MongoDB connection string is missing");
  }

  mongoose.set("strictQuery", false);

  await mongoose.connect(uri, {
    dbName: "horizon_booking",
  });

  return mongoose.connection;
}
