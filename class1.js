// switched to db Employee
// test> use Employee
// to create table/collection
// Employee> db.createCollection("emp")
// Employee> db.createCollection("dept")

Employee> db.emp.find()
[
  {
    _id: ObjectId('6720d44f3a821a751f86b01d'),
    empno: 7369,
    ename: 'smith',
    job: 'clerk',
    mgr: 7902,
    hiredate: ISODate('1980-12-17T00:00:00.000Z'),
    sal: 800,
    comm: null,
    deptno: 20
  },
  {
    _id: ObjectId('6720d44f3a821a751f86b01e'),
    empno: 7499,
    ename: 'allen',
    job: 'salesman',
    mgr: 7698,
    hiredate: ISODate('1980-01-20T00:00:00.000Z'),
    sal: 1600,
    comm: 300,
    deptno: 30
  },
  {
    _id: ObjectId('6720d44f3a821a751f86b01f'),
    empno: 7521,
    ename: 'ward',
    job: 'salesman',
    mgr: 7698,
    hiredate: ISODate('1980-02-22T00:00:00.000Z'),
    sal: 1250,
    comm: 500,
    deptno: 30
  },
  {
    _id: ObjectId('6720d4a13a821a751f86b020'),
    empno: 7566,
    ename: 'jones',
    job: 'manager',
    mgr: 7839,
    hiredate: ISODate('1981-04-02T00:00:00.000Z'),
    sal: 2975,
    comm: null,
    deptno: 20
  },
  {
    _id: ObjectId('6720d4a13a821a751f86b021'),
    empno: 7654,
    ename: 'martin',
    job: 'salesman',
    mgr: 7698,
    hiredate: ISODate('1981-09-28T00:00:00.000Z'),
    sal: 1250,
    comm: 1400,
    deptno: 30
  },
  {
    _id: ObjectId('6720d4a13a821a751f86b022'),
    empno: 7698,
    ename: 'blake',
    job: 'manager',
    mgr: 7839,
    hiredate: ISODate('1981-05-01T00:00:00.000Z'),
    sal: 2850,
    comm: null,
    deptno: 30
  },
  {
    _id: ObjectId('6720d4a13a821a751f86b023'),
    empno: 7782,
    ename: 'clark',
    job: 'manager',
    mgr: 7839,
    hiredate: ISODate('1981-06-09T00:00:00.000Z'),
    sal: 2450,
    comm: null,
    deptno: 10
  },
  {
    _id: ObjectId('6720d4a13a821a751f86b024'),
    empno: 7788,
    ename: 'scott',
    job: 'analyst',
    mgr: 7566,
    hiredate: ISODate('1987-04-19T00:00:00.000Z'),
    sal: 3000,
    comm: null,
    deptno: 20
  },
  {
    _id: ObjectId('6720d4a13a821a751f86b025'),
    empno: 7839,
    ename: 'king',
    job: 'president',
    mgr: null,
    hiredate: ISODate('1981-11-17T00:00:00.000Z'),
    sal: 5000,
    comm: null,
    deptno: 10
  },
  {
    _id: ObjectId('6720d4a13a821a751f86b026'),
    empno: 7844,
    ename: 'turner',
    job: 'salesman',
    mgr: 7698,
    hiredate: ISODate('1981-09-08T00:00:00.000Z'),
    sal: 1500,
    comm: 0,
    deptno: 30
  },
  {
    _id: ObjectId('6720d4a13a821a751f86b027'),
    empno: 7876,
    ename: 'adams',
    job: 'clerk',
    mgr: 7788,
    hiredate: ISODate('1987-05-23T00:00:00.000Z'),
    sal: 1100,
    comm: null,
    deptno: 20
  },
  {
    _id: ObjectId('6720d4a13a821a751f86b028'),
    empno: 7900,
    ename: 'james',
    job: 'clerk',
    mgr: 7698,
    hiredate: ISODate('1981-12-03T00:00:00.000Z'),
    sal: 950,
    comm: null,
    deptno: 30
  },
  {
    _id: ObjectId('6720d4a13a821a751f86b029'),
    empno: 7902,
    ename: 'ford',
    job: 'analyst',
    mgr: 7566,
    hiredate: ISODate('1981-12-03T00:00:00.000Z'),
    sal: 3000,
    comm: null,
    deptno: 20
  },
  {
    _id: ObjectId('6720d4a13a821a751f86b02a'),
    empno: 7934,
    ename: 'miller',
    job: 'clerk',
    mgr: 7782,
    hiredate: ISODate('1982-01-23T00:00:00.000Z'),
    sal: 1300,
    comm: null,
    deptno: 10
  }
]
Employee> db.emp.find({},{ename:1,comm:1,sal:1,_id:0})
[
  { ename: 'smith', sal: 800, comm: null },
  { ename: 'allen', sal: 1600, comm: 300 },
  { ename: 'ward', sal: 1250, comm: 500 },
  { ename: 'jones', sal: 2975, comm: null },
  { ename: 'martin', sal: 1250, comm: 1400 },
  { ename: 'blake', sal: 2850, comm: null },
  { ename: 'clark', sal: 2450, comm: null },
  { ename: 'scott', sal: 3000, comm: null },
  { ename: 'king', sal: 5000, comm: null },
  { ename: 'turner', sal: 1500, comm: 0 },
  { ename: 'adams', sal: 1100, comm: null },
  { ename: 'james', sal: 950, comm: null },
  { ename: 'ford', sal: 3000, comm: null },
  { ename: 'miller', sal: 1300, comm: null }
]
Employee> db.emp.find({},{ename:1,sal:1,_id:0})
[
  { ename: 'smith', sal: 800 },
  { ename: 'allen', sal: 1600 },
  { ename: 'ward', sal: 1250 },
  { ename: 'jones', sal: 2975 },
  { ename: 'martin', sal: 1250 },
  { ename: 'blake', sal: 2850 },
  { ename: 'clark', sal: 2450 },
  { ename: 'scott', sal: 3000 },
  { ename: 'king', sal: 5000 },
  { ename: 'turner', sal: 1500 },
  { ename: 'adams', sal: 1100 },
  { ename: 'james', sal: 950 },
  { ename: 'ford', sal: 3000 },
  { ename: 'miller', sal: 1300 }
]
Employee> db.emp.find({},{ename:1,comm:1,_id:0})
[
  { ename: 'smith', comm: null },
  { ename: 'allen', comm: 300 },
  { ename: 'ward', comm: 500 },
  { ename: 'jones', comm: null },
  { ename: 'martin', comm: 1400 },
  { ename: 'blake', comm: null },
  { ename: 'clark', comm: null },
  { ename: 'scott', comm: null },
  { ename: 'king', comm: null },
  { ename: 'turner', comm: 0 },
  { ename: 'adams', comm: null },
  { ename: 'james', comm: null },
  { ename: 'ford', comm: null },
  { ename: 'miller', comm: null }
]
Employee> db.emp.find({},{_id:0,deptno:1})
[
  { deptno: 20 }, { deptno: 30 },
  { deptno: 30 }, { deptno: 20 },
  { deptno: 30 }, { deptno: 30 },
  { deptno: 10 }, { deptno: 20 },
  { deptno: 10 }, { deptno: 30 },
  { deptno: 20 }, { deptno: 30 },
  { deptno: 20 }, { deptno: 10 }
]
Employee> db.emp.find({},{_id:1,deptno:1})
[
  { _id: ObjectId('6720d44f3a821a751f86b01d'), deptno: 20 },
  { _id: ObjectId('6720d44f3a821a751f86b01e'), deptno: 30 },
  { _id: ObjectId('6720d44f3a821a751f86b01f'), deptno: 30 },
  { _id: ObjectId('6720d4a13a821a751f86b020'), deptno: 20 },
  { _id: ObjectId('6720d4a13a821a751f86b021'), deptno: 30 },
  { _id: ObjectId('6720d4a13a821a751f86b022'), deptno: 30 },
  { _id: ObjectId('6720d4a13a821a751f86b023'), deptno: 10 },
  { _id: ObjectId('6720d4a13a821a751f86b024'), deptno: 20 },
  { _id: ObjectId('6720d4a13a821a751f86b025'), deptno: 10 },
  { _id: ObjectId('6720d4a13a821a751f86b026'), deptno: 30 },
  { _id: ObjectId('6720d4a13a821a751f86b027'), deptno: 20 },
  { _id: ObjectId('6720d4a13a821a751f86b028'), deptno: 30 },
  { _id: ObjectId('6720d4a13a821a751f86b029'), deptno: 20 },
  { _id: ObjectId('6720d4a13a821a751f86b02a'), deptno: 10 }
]
Employee> db.emp.find({},{ename:1,_id:0})
Employee> db.emp.find({},{ename:1,hiredate:1,_id:0})
[
  { ename: 'smith', hiredate: ISODate('1980-12-17T00:00:00.000Z') },
  { ename: 'allen', hiredate: ISODate('1980-01-20T00:00:00.000Z') },
  { ename: 'ward', hiredate: ISODate('1980-02-22T00:00:00.000Z') },
  { ename: 'jones', hiredate: ISODate('1981-04-02T00:00:00.000Z') },
  { ename: 'martin', hiredate: ISODate('1981-09-28T00:00:00.000Z') },
  { ename: 'blake', hiredate: ISODate('1981-05-01T00:00:00.000Z') },
  { ename: 'clark', hiredate: ISODate('1981-06-09T00:00:00.000Z') },
  { ename: 'scott', hiredate: ISODate('1987-04-19T00:00:00.000Z') },
  { ename: 'king', hiredate: ISODate('1981-11-17T00:00:00.000Z') },
  { ename: 'turner', hiredate: ISODate('1981-09-08T00:00:00.000Z') },
  { ename: 'adams', hiredate: ISODate('1987-05-23T00:00:00.000Z') },
  { ename: 'james', hiredate: ISODate('1981-12-03T00:00:00.000Z') },
  { ename: 'ford', hiredate: ISODate('1981-12-03T00:00:00.000Z') },
  { ename: 'miller', hiredate: ISODate('1982-01-23T00:00:00.000Z') }
]
Employee> db.emp.find({},{ename:1,job:1,_id:0})
[
  { ename: 'smith', job: 'clerk' },
  { ename: 'allen', job: 'salesman' },
  { ename: 'ward', job: 'salesman' },
  { ename: 'jones', job: 'manager' },
  { ename: 'martin', job: 'salesman' },
  { ename: 'blake', job: 'manager' },
  { ename: 'clark', job: 'manager' },
  { ename: 'scott', job: 'analyst' },
  { ename: 'king', job: 'president' },
  { ename: 'turner', job: 'salesman' },
  { ename: 'adams', job: 'clerk' },
  { ename: 'james', job: 'clerk' },
  { ename: 'ford', job: 'analyst' },
  { ename: 'miller', job: 'clerk' }
]
Employee> db.emp.find({},{ename:1,job:1,sal:1,_id:0})
[
  { ename: 'smith', job: 'clerk', sal: 800 },
  { ename: 'allen', job: 'salesman', sal: 1600 },
  { ename: 'ward', job: 'salesman', sal: 1250 },
  { ename: 'jones', job: 'manager', sal: 2975 },
  { ename: 'martin', job: 'salesman', sal: 1250 },
  { ename: 'blake', job: 'manager', sal: 2850 },
  { ename: 'clark', job: 'manager', sal: 2450 },
  { ename: 'scott', job: 'analyst', sal: 3000 },
  { ename: 'king', job: 'president', sal: 5000 },
  { ename: 'turner', job: 'salesman', sal: 1500 },
  { ename: 'adams', job: 'clerk', sal: 1100 },
  { ename: 'james', job: 'clerk', sal: 950 },
  { ename: 'ford', job: 'analyst', sal: 3000 },
  { ename: 'miller', job: 'clerk', sal: 1300 }
]
Employee> db.dept.find({},{dname:1,_id:0})
[
  { dname: 'accounting' },
  { dname: 'research' },
  { dname: 'sales' },
  { dname: 'operation' }
]
Employee> db.dept.find({},{dname:1,loc:1,_id:0})
[
  { dname: 'accounting', loc: 'new york' },
  { dname: 'research', loc: 'dallas' },
  { dname: 'sales', loc: 'chicago' },
  { dname: 'operation', loc: 'boston' }
]