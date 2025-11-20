import { connectDB } from "@/lib/mongodb";

import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String
});

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export async function POST(req) {
    await connectDB();
    const body = await req.json();

    const newProject = await Project.create(body);

    return Response.json(newProject);
}

export async function GET() {
    await connectDB();
    const projects = await Project.find();
    return Response.json(projects);
}