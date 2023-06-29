import mongoose from "mongoose";
import express from "express";
const memberSchema = mongoose.Schema({
    name: String,
    month: String,
    date: String,
    fees_received: String,
    Image: Buffer
},
    {
        timestamps: true,
        collection: "Members"
    },
);
export default mongoose.model("Members", memberSchema);