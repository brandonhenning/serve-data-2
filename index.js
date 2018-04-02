const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())


const instructors = [{
    id: 1,
    fullName: 'Kyle Coberly',
    title: 'Faculty Director',
    NumberOfDogs: 0
}, {
    id: 2,
    fullName: 'Danny Fritz',
    title: 'Lead Instructor',
    NumberOfDogs: 0
}, {
    id: 3,
    fullName: 'CJ Reynolds',
    title: 'Lead Instructor',
    NumberOfDogs: 0
}, {
    id: 4,
    fullName: 'Brooks Patton',
    title: 'Lead Instructor',
    NumberOfDogs: 0
}, {
    id: 5,
    fullName: 'Roberto Ortega',
    title: 'Lead Instructor',
    NumberOfDogs: 1
}, {
    id: 6,
    fullName: 'Chad Drummond',
    title: 'Instructor',
    NumberOfDogs: 0
}, {
    id: 7,
    fullName: 'Kim Schlesinger',
    title: 'Instructor',
    NumberOfDogs: 0
}, {
    id: 8,
    fullName: 'Peter Ostiguy',
    title: 'Associate Instructor',
    NumberOfDogs: 1
}, {
    id: 9,
    fullName: 'Cass Torske',
    title: 'Resident',
    NumberOfDogs: 1
}, {
    id: 10,
    fullName: 'Matt Winzer',
    title: 'Resident',
    NumberOfDogs: 2
}, {
    id: 11,
    fullName: 'Aaron Goodman',
    title: 'Resident',
    NumberOfDogs: 0
}, {
    id: 12,
    fullName: 'Michelle Bergquist',
    title: 'Resident',
    NumberOfDogs: 1
}]

function findById (data, id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i]
        }
    }
    return null
}

app.get('/', function (req, res) {
    res.json({data: instructors})
})

app.get('/:id', function (req, res) {
    let record = findById(instructors, req.params.id)
    if (!record) {
        res.status = 404
        res.json({
            error: 'No record found!'
        })
    }
    res.json({data: record})
})

app.listen(9000)