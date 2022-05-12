const { response } = require('express')
const Project = require('../models/Project')


const getProjects = async(req,res = response) => {

    const projects = await Project.find().populate()

    res.json({
        ok:true,
        projects
    })

}

const createProject = async(req,res = response) => {

    const project = new Project(req.body)

    try {
        const projectGuardado = await project.save()

        res.json({
            ok:true,
            project: projectGuardado
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'hable con el administrador'
        })
    }
}

const updateProject = async(req,res = response) => {

    const projectId = req.params.id

    try {
        const project = await Project.findById(projectId)

        if( !project ){
            return res.status(404).json({
                    ok:false,
                    msg:'evento no existe por ese id'
            })
        }

        const newProject = {
            ...req.body
        }

        const projectUpdated = await Project.findOneAndUpdate(project.id, newProject, { new:true })

        res.json({
            ok:true,
            project: projectUpdated
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'hable con el administrador'
        })
    }


    res.json({
        ok:true,
        msg:'actulizar project'
    })

}

const deleteProject = async(req,res = response) => {

    const projectId = req.params.id

    try {

        const project = await Project.findById(projectId)

        if(!project){
            return res.status(400).json({
                ok:false,
                msg:'el proyecto no existe'
            })
        }

        await Project.findByIdAndRemove(projectId)

        res.json({
            ok:true,
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'hable con el administrador'
        })
    }

}

module.exports = {
    getProjects,
    createProject,
    updateProject,
    deleteProject
}
