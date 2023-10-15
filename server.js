const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const path = require("path");
const ResumeDB = require("./modules/resumeDB");
const app = express();

// Set up Global configuration access

const HTTP_PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const db = new ResumeDB();

const { MONGODB_CONNECTION_STR } = process.env;

db.initialize(MONGODB_CONNECTION_STR)
    .then( () => {
        app.listen( HTTP_PORT, () => {
            console.log(`🚀  Listen on http://localhost:${HTTP_PORT}`)
            console.log(`📭️ Ctrl+C to exit`);
        });
    })
    .catch ( (e) => {
        console.log(`ERROR init Mongoose: ${e}`);
    })

// Routes
app.get("/", (req, res) => {
    res.sendFile ( path.join(__dirname, '/index.html') );
})
// View full resume
app.get("/resume", (req, res) => {
    res.send ( ` all resume ` );
})
// Information about the projects
app.get("/projects", async (req, res) => {
    try{
        const { page, perPage } = req.query;
        const projects = await db.getAllProjects( page, perPage );
        res.json(projects)
        //console.log(`GET /projects :: ${projects}`) //✅

    }catch (err){
        res.status(500).json({
            error: err.message
        });
    }
})
// previous career experience
app.get("/experience", async (req, res) => {
    try{
        const { page, perPage } = req.query;
        const experience = await db.getAllExperience( page, perPage );
        res.json(experience)
        console.log(`GET /Experience :: ${Experience}`) //✅

    }catch (err){
        res.status(500).json({
            error: err.message
        });
    }
})
// Contact information
app.get("/contact", (req, res) => {
    res.send ( `contact info ` );
})
//Social Media
app.get("/networks", (req, res) => {
    res.send ( `social media ` );
})
