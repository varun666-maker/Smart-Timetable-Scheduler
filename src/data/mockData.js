export const departments = ['Computer Science', 'Electronics', 'Mechanical', 'Civil']
export const semesters = [1,2,3,4,5,6,7,8]
export const batches = ['CSE-A','CSE-B','CSE-C','ECE-A','ECE-B']
export const days = ['Mon','Tue','Wed','Thu','Fri','Sat']
export const timeSlots = ['8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00']

export const subjects = [
  {name:'Data Structures',code:'CS301',credits:4,hours:5,type:'Theory'},
  {name:'Operating Systems',code:'CS302',credits:4,hours:4,type:'Theory'},
  {name:'DBMS',code:'CS303',credits:3,hours:4,type:'Theory'},
  {name:'Computer Networks',code:'CS304',credits:3,hours:3,type:'Theory'},
  {name:'DS Lab',code:'CS351',credits:2,hours:3,type:'Lab'},
  {name:'DBMS Lab',code:'CS352',credits:2,hours:3,type:'Lab'},
  {name:'OS Lab',code:'CS353',credits:2,hours:2,type:'Lab'},
  {name:'Mentoring',code:'CS000',credits:0,hours:1,type:'Mentoring'},
]

export const faculty = [
  {id:1,name:'Dr. Rajesh Kumar',subjects:['CS301','CS351'],maxHours:6,totalClasses:22,totalHours:28,maxLimit:30,utilization:93},
  {id:2,name:'Prof. Anita Sharma',subjects:['CS302','CS353'],maxHours:5,totalClasses:18,totalHours:24,maxLimit:30,utilization:80},
  {id:3,name:'Dr. Vikram Singh',subjects:['CS303','CS352'],maxHours:6,totalClasses:20,totalHours:26,maxLimit:30,utilization:87},
  {id:4,name:'Prof. Meera Patel',subjects:['CS304'],maxHours:5,totalClasses:15,totalHours:18,maxLimit:30,utilization:60},
  {id:5,name:'Dr. Suresh Reddy',subjects:['CS301','CS000'],maxHours:6,totalClasses:24,totalHours:30,maxLimit:30,utilization:100},
]

export const classrooms = [
  {name:'Room 101',type:'Lecture Hall',capacity:60,floor:'1st'},
  {name:'Room 102',type:'Lecture Hall',capacity:60,floor:'1st'},
  {name:'Lab A1',type:'Lab',capacity:30,floor:'Ground'},
  {name:'Lab A2',type:'Lab',capacity:30,floor:'Ground'},
  {name:'Seminar Hall',type:'Seminar Room',capacity:100,floor:'2nd'},
]

export const timetableData = {
  'CSE-A': {
    Mon:[{t:'8:00',sub:'Data Structures',fac:'Dr. Rajesh Kumar',room:'101',type:'theory'},{t:'9:00',sub:'Operating Systems',fac:'Prof. Anita Sharma',room:'102',type:'theory'},{t:'10:00',sub:'DBMS',fac:'Dr. Vikram Singh',room:'101',type:'theory'},null,null,{t:'1:00',sub:'DS Lab',fac:'Dr. Rajesh Kumar',room:'Lab A1',type:'lab'},{t:'2:00',sub:'DS Lab',fac:'Dr. Rajesh Kumar',room:'Lab A1',type:'lab'},null,null,null],
    Tue:[{t:'8:00',sub:'Computer Networks',fac:'Prof. Meera Patel',room:'102',type:'theory'},{t:'9:00',sub:'Data Structures',fac:'Dr. Rajesh Kumar',room:'101',type:'theory'},{t:'10:00',sub:'Mentoring',fac:'Dr. Suresh Reddy',room:'101',type:'mentoring'},null,null,{t:'1:00',sub:'DBMS Lab',fac:'Dr. Vikram Singh',room:'Lab A2',type:'lab'},{t:'2:00',sub:'DBMS Lab',fac:'Dr. Vikram Singh',room:'Lab A2',type:'lab'},null,null,null],
    Wed:[{t:'8:00',sub:'Operating Systems',fac:'Prof. Anita Sharma',room:'102',type:'theory'},{t:'9:00',sub:'DBMS',fac:'Dr. Vikram Singh',room:'101',type:'theory'},{t:'10:00',sub:'Data Structures',fac:'Dr. Rajesh Kumar',room:'101',type:'theory'},null,null,{t:'1:00',sub:'OS Lab',fac:'Prof. Anita Sharma',room:'Lab A1',type:'lab'},{t:'2:00',sub:'OS Lab',fac:'Prof. Anita Sharma',room:'Lab A1',type:'lab'},null,null,null],
    Thu:[{t:'8:00',sub:'DBMS',fac:'Dr. Vikram Singh',room:'101',type:'theory'},{t:'9:00',sub:'Computer Networks',fac:'Prof. Meera Patel',room:'102',type:'theory'},{t:'10:00',sub:'Operating Systems',fac:'Prof. Anita Sharma',room:'102',type:'theory'},null,null,null,null,null,null,null],
    Fri:[{t:'8:00',sub:'Data Structures',fac:'Dr. Rajesh Kumar',room:'101',type:'theory'},{t:'9:00',sub:'Operating Systems',fac:'Prof. Anita Sharma',room:'102',type:'theory'},{t:'10:00',sub:'Computer Networks',fac:'Prof. Meera Patel',room:'102',type:'theory'},null,null,{t:'1:00',sub:'DS Lab',fac:'Dr. Rajesh Kumar',room:'Lab A1',type:'lab'},{t:'2:00',sub:'DS Lab',fac:'Dr. Rajesh Kumar',room:'Lab A1',type:'lab'},null,null,null],
    Sat:[{t:'8:00',sub:'Data Structures',fac:'Dr. Suresh Reddy',room:'101',type:'theory'},{t:'9:00',sub:'DBMS',fac:'Dr. Vikram Singh',room:'101',type:'theory'},null,null,null,null,null,null,null,null],
  }
}

export const conflicts = [
  {id:1,type:'Faculty',details:'Dr. Rajesh Kumar assigned to CS301 and CS351 at Mon 1:00 PM',severity:'High',affected:'Mon 1:00-2:00 PM',suggestion:'Move CS351 to Tue 1:00 PM'},
  {id:2,type:'Room',details:'Room 101 double-booked on Wed 10:00 AM for CSE-A and CSE-B',severity:'High',affected:'Wed 10:00 AM',suggestion:'Move CSE-B to Room 102'},
  {id:3,type:'Subject',details:'CS303 exceeds weekly hour limit for CSE-A',severity:'Medium',affected:'Fri 3:00 PM',suggestion:'Remove extra session'},
  {id:4,type:'Faculty',details:'Prof. Meera Patel exceeds max daily hours on Thu',severity:'Medium',affected:'Thu all day',suggestion:'Redistribute to Fri'},
]

export const leaveRequests = [
  {id:1,faculty:'Dr. Rajesh Kumar',from:'2026-05-12',to:'2026-05-13',reason:'Medical appointment',classes:4,status:'Pending'},
  {id:2,faculty:'Prof. Anita Sharma',from:'2026-05-15',to:'2026-05-15',reason:'Family function',classes:3,status:'Pending'},
  {id:3,faculty:'Dr. Vikram Singh',from:'2026-05-10',to:'2026-05-10',reason:'Conference',classes:2,status:'Approved'},
  {id:4,faculty:'Prof. Meera Patel',from:'2026-05-08',to:'2026-05-09',reason:'Personal',classes:3,status:'Rejected'},
]

export const announcements = [
  {id:1,title:'Mid-Semester Exam Schedule Released',content:'The mid-semester examination schedule for all departments has been published. Please check the exam portal.',date:'2026-05-08',author:'HOD Office'},
  {id:2,title:'Faculty Meeting - Friday',content:'All faculty members are requested to attend the department meeting on Friday at 3 PM in the Seminar Hall.',date:'2026-05-07',author:'Dean Office'},
  {id:3,title:'Lab Maintenance Notice',content:'Lab A1 will be under maintenance on Saturday. All lab sessions will be moved to Lab A2.',date:'2026-05-06',author:'IT Department'},
]

export const todayScheduleFaculty = [
  {time:'8:00 AM',subject:'Data Structures',batch:'CSE-A',room:'Room 101',status:'Completed'},
  {time:'9:00 AM',subject:'Data Structures',batch:'CSE-B',room:'Room 102',status:'Completed'},
  {time:'10:00 AM',subject:'DS Lab',batch:'CSE-A',room:'Lab A1',status:'Ongoing'},
  {time:'1:00 PM',subject:'Mentoring',batch:'CSE-A',room:'Room 101',status:'Upcoming'},
  {time:'3:00 PM',subject:'Data Structures',batch:'CSE-C',room:'Room 101',status:'Upcoming'},
]

export const todayScheduleStudent = [
  {time:'8:00 AM',subject:'Data Structures',faculty:'Dr. Rajesh Kumar',room:'Room 101',status:'Completed'},
  {time:'9:00 AM',subject:'Operating Systems',faculty:'Prof. Anita Sharma',room:'Room 102',status:'Completed'},
  {time:'10:00 AM',subject:'DBMS',faculty:'Dr. Vikram Singh',room:'Room 101',status:'Ongoing'},
  {time:'1:00 PM',subject:'DS Lab',faculty:'Dr. Rajesh Kumar',room:'Lab A1',status:'Upcoming'},
  {time:'2:00 PM',subject:'DS Lab',faculty:'Dr. Rajesh Kumar',room:'Lab A1',status:'Upcoming'},
]

export const exams = [
  {subject:'Data Structures',code:'CS301',date:'2026-05-20',time:'9:00 AM',duration:'3 Hours',hall:'Exam Hall 1',daysLeft:11},
  {subject:'Operating Systems',code:'CS302',date:'2026-05-23',time:'9:00 AM',duration:'3 Hours',hall:'Exam Hall 2',daysLeft:14},
  {subject:'DBMS',code:'CS303',date:'2026-05-26',time:'2:00 PM',duration:'3 Hours',hall:'Exam Hall 1',daysLeft:17},
  {subject:'Computer Networks',code:'CS304',date:'2026-05-29',time:'9:00 AM',duration:'3 Hours',hall:'Exam Hall 3',daysLeft:20},
]

export const studentSubjects = [
  {name:'Data Structures',code:'CS301',faculty:'Dr. Rajesh Kumar',credits:4,classesWeek:5,room:'Room 101',attendance:82},
  {name:'Operating Systems',code:'CS302',faculty:'Prof. Anita Sharma',credits:4,classesWeek:4,room:'Room 102',attendance:78},
  {name:'DBMS',code:'CS303',faculty:'Dr. Vikram Singh',credits:3,classesWeek:4,room:'Room 101',attendance:65},
  {name:'Computer Networks',code:'CS304',faculty:'Prof. Meera Patel',credits:3,classesWeek:3,room:'Room 102',attendance:90},
  {name:'DS Lab',code:'CS351',faculty:'Dr. Rajesh Kumar',credits:2,classesWeek:2,room:'Lab A1',attendance:55},
  {name:'DBMS Lab',code:'CS352',faculty:'Dr. Vikram Singh',credits:2,classesWeek:2,room:'Lab A2',attendance:88},
]

export const notifications = [
  {id:1,icon:'calendar',msg:'Timetable for Sem 5 has been updated',time:'2 hours ago',read:false,cat:'Timetable Updates'},
  {id:2,icon:'bell',msg:'Your leave request has been approved',time:'5 hours ago',read:false,cat:'Requests'},
  {id:3,icon:'megaphone',msg:'Mid-semester exam schedule released',time:'1 day ago',read:true,cat:'Announcements'},
  {id:4,icon:'calendar',msg:'Room change: CS301 moved to Room 103',time:'1 day ago',read:true,cat:'Timetable Updates'},
  {id:5,icon:'bell',msg:'Swap request from Prof. Anita Sharma',time:'2 days ago',read:true,cat:'Requests'},
  {id:6,icon:'megaphone',msg:'Faculty meeting scheduled for Friday',time:'3 days ago',read:true,cat:'Announcements'},
]

export const calendarEvents = {
  '2026-05-01':[{type:'class',label:'Regular Classes'}],
  '2026-05-05':[{type:'assignment',label:'DS Assignment Due'}],
  '2026-05-08':[{type:'event',label:'Tech Fest'}],
  '2026-05-12':[{type:'class',label:'Regular Classes'},{type:'assignment',label:'DBMS Project'}],
  '2026-05-15':[{type:'exam',label:'DS Quiz'}],
  '2026-05-20':[{type:'exam',label:'Mid-Sem Exam'}],
  '2026-05-23':[{type:'exam',label:'OS Exam'}],
  '2026-05-26':[{type:'exam',label:'DBMS Exam'}],
  '2026-05-28':[{type:'event',label:'Cultural Day'}],
}

export const recentActivity = [
  {text:'Timetable v3 generated for CSE Sem-5',time:'10 min ago'},
  {text:'Dr. Rajesh Kumar submitted leave request',time:'1 hour ago'},
  {text:'Room 101 schedule updated',time:'2 hours ago'},
  {text:'New announcement posted by Dean Office',time:'3 hours ago'},
  {text:'Room 102 marked as occupied',time:'5 hours ago'},
]

export const classroomStatusData = [
  { name: 'Room 101', occupied: true, faculty: 'Dr. Rajesh Kumar', subject: 'Data Structures' },
  { name: 'Room 102', occupied: false, faculty: '', subject: '' },
  { name: 'Lab A1', occupied: true, faculty: 'Prof. Anita Sharma', subject: 'OS Lab' },
  { name: 'Lab A2', occupied: false, faculty: '', subject: '' },
  { name: 'Seminar Hall', occupied: false, faculty: '', subject: '' },
]
