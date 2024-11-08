// 1. $exists
// 2. $type

// wqtd all emp details in which comm fields is present(exist)
db.emp.find({ comm: { $exists: true } })

// wqtd emp name, sal where mgr fields is not present
db.emp.find({ mgr: { $exists: false }},{ename:1, sal:1})
 
// wqtd emp details who dont have designation
db.emp.find({ job: { $exists: false } })

// wqtd emp details where job fields is does not exist
db.emp.find({ job: { $exists: false } })

// wqtd emp details where sal fields is exist but value is higher than 2000
db.emp.find({$and:[{ sal: { $exists: true }, sal: {$gt: 2000} }]})

// wqtd emp name where sal is double(type)
db.emp.find({ sal: { $type: "double" }})
 
// wqtd name, mgr number where commition is null datatype
db.emp.find({ comm: {$type: 'null'} }, {ename:1, mgr:1})
 
// wqtd where joinig date datatype of date
db.emp.find({ hiredate: { $type: "date" }})
 
// wqtd emp who are earning sal >= 1000 and <= 3000
db.emp.find({$and:[{sal:{$gt:1000,$lt:3000}}]})

// wqtd emp who hire after 81 and before 83
db.emp.find({$and:[{hiredate:{$gt:new Date('1981-12-31'),$lt:new Date('1983-01-01')}}]})

// wqtd emp name, sal except deptno 20,30
db.emp.find({deptno:{$nin:[20,30]}}, {ename:1, sal:1})