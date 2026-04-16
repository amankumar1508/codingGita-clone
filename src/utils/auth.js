// export const loginCredentials ={
//     uid :"654321",
//     password:"12345"
// }

// export const loginDetails =()=>{
//       if(uid === loginCredentials.uid && password === loginCredentials.password){
//         const user ={
//      uid,
//       role:"Student",
//       name:"Student User"
//     }
//    localStorage.setItem("user",JSON.stringify(user));
//    return true;
// }
// return false;

// }


export const students = [
  {
    uid: "108500",
    password: "12345",
    name: "Aman kumar",
    email: "aman.kr.cg@gmail.com",
    mobile: "9279811913",
    university: "SUxCG 714",

    image:"https://res.cloudinary.com/dgg4scip6/image/upload/v1774864936/amanlinkdin_g8tmzs.jpg",

    attendance: {
      semester: "Semester 2",
      present: 126,
      total: 146,
      bonus: 2,
      percentLabel: 88,
      startDate: "29/01/2026",
      endDate: "30/06/2026",
    },

    subjects: [
      "SU11 - GIT & GITHUB",
      "SU12 - C Language",
      "SU13 - HTML/CSS/JS",
      "SU14 - UI/UX FIGMA",
      "SU15 - MATHS",
      "SU16 - JavaScript",
      "SU0201 - ReactJS",
      "SU0202 - NodeJS",
      "SU0203 - NoSQL",
      "SU0204 - OOPS",
      "SU0205 - Maths 2",
      "SU0206 - EVS",
      "SU0207 - IR 01",
      "SU0208 - IR 02",
    ],

    mentors: [
      {
        name: "Ankita",
        batch: "SUxCG 714",
      },
    ],

    assignments: 0,
    pendingAssignments: 0,
    events: [],
  },
];
export const loginDetails = (uid, password) => {
  const student = students.find(
    (s) => s.uid === uid && s.password === password,
  );

  if (!student) return false;

  localStorage.setItem("user", JSON.stringify(student));

  return true;
};
