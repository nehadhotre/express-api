let express=require("express");
let app=express();
let port=process.env.NODE_ENV||4800;
app.use(express.json());

let courses=[{id:1,name:"react"},
{id:2,name:"node"},
{id:3,name:"mongodb"},
]

//fetch all data


app.get("/api/courses",(req,res)=>{
    res.send(courses);
});

// fetch data by id
app.get("/api/courses/:id",(req,res)=>{
    // let id=req.params.id;
    // req.send(id);

    let course=courses.find(item=>item.id===parseInt(req.params.id));
    if(!course){return res.status(404).send({message:"Invalid course id"})};
    res.send(course);
});


//create new course

app.post("/api/courses/newcourse",(req,res)=>{
    let course={
        id:courses.length+1,
        name:req.body.name,
        // email:req.body.email
    };
    courses.push(course);
    res.send(courses);
})


app.listen(port,()=>{console.log(`port working on ${port}`)})




