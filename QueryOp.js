//! Query Operator
// 1. $eq
// 2. $lt
// 3. $gt
// 4. $ne
// 5. $exist
// 6. $type
//! waqtd whose sal is  5000
db.emp.find({sal:{$eq:5000}})
[
  {
    _id: ObjectId('6720d481014cebfeb986b025'),
    empno: 7839,
    ename: 'king',
    job: 'president',
    mgr: null,
    hiredate: ISODate('1981-11-17T00:00:00.000Z'),
    sal: 5000,
    comm: null,
    deptno: 10
  }
]

//! waqtd who are earning < 3000
db.emp.find({sal:{$lt:3000}})

//! waqtd list all the emp whose comm is null
db.emp.find({comm:{$eq:null}})

//! waqtd list all the emp who dont have reporting manager
db.emp.find({mgr:{$eq:null}})

//! waqtd list all the emp who working in dept 30
db.emp.find({job:{$eq:30}})

//! waqtd ename and sal who are earning > than 3000
db.emp.find({job:{$gt:30}})

//! waqtd list all the emp whose design. is analyst
db.emp.find({job:{$eq:"analyst"}})
//! waqtd display all the emp name who are join after 1981
db.emp.find({hiredate:{$gt:"1981-01-19T00:00:00.000+00:00"}})

//! waqtd display deptname where the loc is dallas
db.dept.find({loc:{$eq:"dallas"}}, {dname:1})

//! waqtd display the loc is whose deptno is 30
db.dept.find({deptno:{$eq:30}}, {loc:1})

//! waqtd display all dept no.s except deptno 40
db.dept.find({deptno:{$ne:40}},{deptno:1})

//! founders of mongo db-  Kevin p ryan, Eliot horowidz, Dwitt merriman