const mongoose = require("mongoose");

const Me = require("./schemas/me");
const Projects = require("./schemas/projects");
const Experience = require("./schemas/experience");

module.exports = class ResumeDB{
    constructor(){
        this.Me = null;
        this.Projects = null;
        this.Experience = null;
    }

    initialize (connectionStringDB){
        return new Promise ( ( resolve, reject ) => {
            const db = mongoose.createConnection( connectionStringDB );

            db.once( 'error', (error) => { reject(error) });

            db.once('open', () => { 
                this.Me = db.model( "me", Me );
                this.Projects = db.model( "projects", Projects );
                this.Experience = db.model( "experience", Experience );
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
            return this.Experience.find().sort({_id: +1}).skip((page - 1) * +perPage).limit(+perPage).exec();
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
        return this.Trip.deleteOne({_id: id}).exec();
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
        return this.Trip.deleteOne({_id: id}).exec();
    }
}