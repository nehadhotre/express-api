let express =require("express");
let app =express();
let port= process.env.NODE_ENV ||4800;

let course=[{id:1,name:"React"},
{id:2,name:"Node"},
{id:3,name:"Mongo"}
]

//fetch all data

app.get("/api/courses",(req,res)=>{
    res.send(course);
});
 
// app.get("/api/courses/:id",(req,res)=>{
//     let id=req.params.id;
//     res.send(id);
// });


//fetch data by id

app.get("/api/courses/:id",(req,res)=>{
    let courses=course.find(item=>item.id===parseInt(req.params.id));
    if(!courses){return res.status(404).send({message:"Invaild course id"})};
    res.send(courses);
});


//create a new course

app.post("/api/courses/newcourse",(req,res)=>{
    let course={
        id: course.length+1,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    };
    courses.push(course);
    res.send(courses);
});


app.listen(port,()=>{console.log(`port working on ${port}`)}); 