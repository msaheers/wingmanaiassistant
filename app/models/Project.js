import mongoose from "mongoose";

const ProjectSchema = 
    mongoose.models.Project ||
    mongoose.model(
        "Project",
        new mongoose.Schema(
            {
                title: {
                    type: String,
                    required: true, //Project must always have title 
                },
                description: {
                    type: String,
                    required: true,
                },
                aiInsights: {
                    type: String, // AI summary or propsal
                    default: "",
                },
            },
            { timestamps: true } // Gives us createdAT / updatedAt automatically
        )
    );

    export default ProjectSchema;