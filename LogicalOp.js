//! Logical operator
// 1. $and
// 2. $or
// 3. $not
// 4. $nor

//waqtd emp details whose sal is 800 and to 10 dept
db.emp.find({$and:[{sal:800},{deptno:10}]})

//waqtd emp details whose sal is 800 or to 10 dept
db.emp.find({$or:[{sal:800},{deptno:10}]})

//waqtd details of emp working as clerk and earning < 1500
db.emp.find({$and:[{job:"clerk"},{$lt:{sal:1500}}]})
//waqtd name, hd who working as manager in deptno 30
db.emp.find({$and:[{job:"manager"},{deptno:30}]},{ename:1, hiredate:1})
//waqtd emp details working in dept no 30 or as analyst
db.emp.find({$or:[{deptno:30},{job:"analyst"}]})
// whose sal is < 1100 and their designation(job) is clerk
db.emp.find({$and:[{sal:{$lt:1100}},{job:"clerk"}]})
// waqtd emp no and name who are working as salesman in deptno 20 or 30
db.emp.find({$or:[{job:"salesman"},{deptno:20},{deptno:30}]},{empno:1, ename:1})
// waqtd ename, sal working as president and earning 4000
db.emp.find({$and:[{job:"president"},{sal:4000}]},{ename:1, sal:1})
//waqtd emp details whose empno are 7902, 7839, 7698
db.emp.find({empno:{$in:[7902,7839,7698]}})
//waqtd ename hired after 1981 and before 1985
db.emp.find({$and:[{hiredate:{$gt:ISODate("1981-01-19T00:00:00.000+00:00")}},{hiredate:{$lt:ISODate("1985-01-19T00:00:00.000+00:00")}}]},{ename:1})
//waqtd ename who are working as manager, salesman, clerk
db.emp.find({$or:[{job:"manager"},{job:"salesman"},{job:"clerk"}]},{ename:1})
//waqtd ename , sal, hd who are joined after 1981 in deptno 10 or 30
db.emp.find({},{ename:1,sal:1,hiredate:1})
//write a command to find database version
db.version