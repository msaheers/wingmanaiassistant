import mongoose from "mongoose";

// if models already exists, reuse it to avoid errors. 
const ChatMessageSchema = 
    mongoose.models.ChatMessage ||
    mongoose.model(
        "ChatMessage",
        new mongoose.Schema(
            {
                role: {
                    type: String,
                    required: true,
                },
                message: {
                    type: String,
                    required: true,
                },
            },
            { timestamps: true } //Auto adds createdAt
        )
    );

    export default ChatMessageSchema;