// Evaluation Operators:

// 1. $expr :
//wqtd who are earning commision more than salary
db.emp.find({$expr:{$gt:["$comm","$sal"]}})

// 2. $regex:
// wqtd whose name start with 's'
db.emp.find({ename:{$regex:/^s/}})

// wqtd whose name end with 's'
db.emp.find({ename:{$regex:/s$/}})

// wqtd whose name contains exactly 4 character
db.emp.find({ename:{$regex:/^....$/}})

// wqtd who are having atleast two l's in their name
db.emp.find({ename:{$regex:/.*l.*l.*/}})

// wqtd whose name having last but one character is 'e'
db.emp.find({ename:{$regex:/.*e.$/}})