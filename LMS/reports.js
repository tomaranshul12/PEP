//query to display course name and module name 
db.courses.aggregate([
    {
        $lookup:{
            from:'modules',
            localField:"_id",
            foreignField:"courseId",
            as:"modules"
        }
    },
    {
        $unwind:"$modules"
    },
    {
        $project:{
            _id:0,
            courseName:"$title",
            moduleName:"$modules.title"
        }
    }
])

//display the user nanme and the course they are enrolled in 
db.courses.aggregate([
    {
        $lookup:{
            from:'modules',
            localField:"studentId",
            foreignField:"_id",
            as:"student"
        }
    },
    
        {$unwind:"$student"},
        {
            $lookup:{
                from:"courses",
                localField:"courseId",
                foreignField:"_id",
                as:"course"
            }
        },
        {$unwind:"$course"},
    
        {
        $project:{
            _id:0,
            courseName:"$student.name",
            moduleName:"$course.title"
        }
    }
])