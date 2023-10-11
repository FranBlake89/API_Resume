const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const ResumeDB = require("./modules/resumeDB");
const app = express();

// Set up Global configuration access
dotenv.config();

const HTPP_PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extend: true}));
app.use(cors());

const db = new ResumeDB();

// Routes
app.get("/", (req, res) => {
    res.send ( `<h1> It live!! </> ` );
})
// View full resume
app.get("/resume", (req, res) => {
    res.send ( ` all resume ` );
})
// Information about the projects
app.get("/projects", (req, res) => {
    res.send ( `projects` );
})
// previous career experience
app.get("/experience", (req, res) => {
    res.send ( `experience ` );
})
// Contact information
app.get("/contact", (req, res) => {
    res.send ( `contact info ` );
})
//Social Media
app.get("/networks", (req, res) => {
    res.send ( `social media ` );
})

app.listen( HTPP_PORT, () => {
    console.log(`🚀  Listen on port http://localhost:${HTPP_PORT}`)
    console.log(`📭️ Ctrl+C to exit`)
})