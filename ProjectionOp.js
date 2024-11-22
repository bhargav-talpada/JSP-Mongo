// Projection Operator
// 1. $[Positional Operator]
 //  syntax : { array:'value' },{array.$:1}
// 2. $elematch
   syntax : {array:'value'},{array.$elematch:'value'}
// 3. $slice
   syntax : {array:'value'},{array:{$skills:[starting index, no of ele]}}


db.emp.find({skills:'html'},{_id:0, 'skills.$':1, ename:1})

db.emp.find({skills:'html'},{_id:0, ename:1, skills:{$elemMatch:{$eq:'node'}}})

db.emp.find({skills:'html'},{_id:0, skills:{$slice:[0,3]}})
