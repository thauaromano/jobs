const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
    name: "Thauã",
    avatar: "https://github.com/thauaromano.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}


const jobs = [
    {
        id:1,
        name: "Pizzaria Guloso",
        "daily-hours": 2,
        "total-hours": 60,
        created_at: Date.now(),
    },
    {
        id:2,
        name: "OneTw Project",
        "daily-hours": 3,
        "total-hours": 47,
        created_at: Date.now(),
    
    }
]






// request, response
routes.get('/', (req, res) => {

    const updateJobs = jobs.map((job) => {
        //ajustes no job
        //calculo de tempo restante
        const remainingDays =  (job["total-hours"] / job["daily-hours"]).toFixed()

        const createdDate = new Date(job.created_at)
        const dueDay = createdDate.getDate() + Number(remainingDays)
        //const dueDay = createdDate.setDate
    
        return job
    })


    
    
    return res.render(views + "index",{jobs})

})







routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {
    //{req.body = { name: 'vewrg', 'daily-hours': '22', 'total-hours': '333' }
    const lastId = jobs[jobs.length - 1]?.id || 1;
        
    jobs.push({
        id: lastd + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now() //atribuindo data de hoje
    })

    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", {profile}))


module.exports = routes;