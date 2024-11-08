// array operator
// 1. $all
// 2. $elematch
// 3. $size
// 4. $in

// wqtd all details of emp whose deptno contains values of 10,20 exactly
db.emp.find({ deptno: { $in: [10, 20]} })

// wqtd all emp details who have atleast eny one one the skills java,html
db.emp.find({ skills: { $elematch: ["java", "html"] } })

// wqtd emp details where tags array contains both developer, tester, jobs
db.emp.find({ jobs: { $all: ["developer", "tester"] } })

// wqtd emp details where deptno array contains with dept 30 and location dullas
db.emp.find({$and:[{deptno:{$in:[30]}},{loc:'dallas'}]})

// wqtd emp details where order array contains item as laptop and quentity must be greater then 3
db.emp.find({ order: {$elemMatch: { item: "laptop", quantity: { $gt: 3 }}}})
 
// wqtd whose skills array have exactly 3 values
db.emp.find({ skills: { $size: 3 } })

// wqtd emp details who have skills atleast 2
db.emp.find({ skills: { $exists: true, $size: { $gte: 2 } } })

// wqtd where the quntities array fields contails less then 3 elements
db.emp.find({ quantities: { $exists: true, $size: { $lt: 3 } } })

// wqtd emp name, sal where commition array fields contins amount more then 5000 and status is paid
db.emp.find({comm: {$elemMatch: { amount: { $gt: 5000 }, status: "paid" }}})
 
// wqtd emp details who dont have reporting manager 
db.emp.find({ reporting_manager: { $elematch: false } })

// wqtd emp details who are not earning commition
db.emp.find({ comm: { $exists: false } })
db.emp.find({ comm: { $in: [null] } })

// explain diff between sql and nosql
// SQL (Structured Query Language): Used in relational databases (RDBMS) like MySQL, PostgreSQL, and Oracle. It follows a table-based schema with predefined columns and data types. SQL databases use relationships (joins) between tables to manage data, providing strong ACID (Atomicity, Consistency, Isolation, Durability) properties.
// NoSQL (Not Only SQL): Used in databases like MongoDB, Cassandra, and Couchbase. These databases store data in a variety of formats such as document (MongoDB), key-value, wide-column, and graph. NoSQL databases are typically more flexible with schema design, handle unstructured data well, and are often optimized for horizontal scaling, making them popular for big data applications.

// explain diff find and fineOne method
// find: This method retrieves all documents that match the query criteria
// findOne: This method retrieves only the first document that matches the query criteria.