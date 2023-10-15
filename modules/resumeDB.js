const mongoose = require("mongoose");

const Me = require("../schemas/me.js");
const Projects = require("../schemas/projects.js");
const Experience = require("../schemas/experience.js");
const Certification = require("../schemas/certification.js");
const Education = require("../schemas/education.js");


module.exports = class ResumeDB{
    constructor() {
        this.Certification = null;
        this.Education = null;
        this.Experience = null;
        this.Me = null;
        this.Projects = null;
    }

    initialize (connectionStringDB){
        return new Promise ( ( resolve, reject ) => {
            const db = mongoose.createConnection( connectionStringDB );
            
            db.once( 'error', (error) => { 
                console.error('Database connection error:', error);
                reject(error); 
            });
            db.once('open', () => {
                this.Certification = db.model( "Certification", Certification );
                this.Education = db.model( "Education", Education );
                this.Experience = db.model( "Experience", Experience );
                this.Me = db.model( "Me", Me );
                this.Projects = db.model( "Projects", Projects );
                resolve();
            });
        });
    }
// Me    
    getAllInfoMe () {
        return this.Me.find().exec();
    }
    updateInfoMe( data, id ){
        return this.Me.updateOne({_id: id}, { $set: data }).exec();
    }
// Projects
    async addNewProject ( data ){
        const newProj = new this.Projects(data);
        await newProj.save();
        return newProj;
    }
    getAllProjects ( page, perPage ){
        if(+page && +perPage){
            return this.Projects.find().sort({id: +1}).skip((page - 1) * +perPage).limit(+perPage).exec();
        }
        
        return Promise.reject(new Error('page and perPage query parameters must be valid numbers'));
    }
    getProjectById ( id ){
        return this.Projects.findOne({_id:id}).exec();
    }
    updateProjectById ( data, id ){
        return this.Projects.updateOne({_id: id}, { $set: data }).exec();
    }
    deleteProjectById ( id ){
        return this.Projects.deleteOne({_id: id}).exec();
    }
// Experience
    async addNewExperience ( data ){
        const newExp = new this.Experience(data);
        await newExp.save();
        return newExp;
    }
    getAllExperience ( page, perPage ) {
        if(+page && +perPage){
            return this.Experience.find().sort({_id: +1}).skip((page - 1) * +perPage).limit(+perPage).exec();
        }
        
        return Promise.reject(new Error('page and perPage query parameters must be valid numbers'));
    }
    getExperienceById( id ){
        return this.Experience.findOne({ _id: id }).exec();
    }
    updateExperienceById ( data, id ){
        return this.Experience.updateOne({_id: id}, { $set: data }).exec();
    }
    deleteExperienceById ( id ){
        return this.Experience.deleteOne({_id: id}).exec();
    }
}