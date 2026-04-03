// function Keys() {
//   const users = [
//     { id: 1, name: "Ali", age: 22 },
//     { id: 2, name: "Zain", age: 25 }
//   ];

//   return (
//     <div>
//       {users.map((user) => (
//         <div key={user.id}>
//           <h2>{user.name}</h2>
//           <p>Age: {user.age}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Keys

import React from 'react';

function Keys() {
  const users = [
    { val: 1, Dept: "Engineering", Position: "ASR", Duration: "Newbie"},
    { val: 2, Dept: "SQA", Position: "Trainee", Duration: "Intern"},
    { val: 3, Dept: "Admin", Position: "Senior Staff", Duration: "Three-Years"},
    { val: 4, Dept: "Accounts", Position: "Executive Staff", Duration: "Two-Years"},
    { val: 5, Dept: "Marketing", Position: "Director", Duration: "Ten-Years"},
  ];

  return (
    <>
      {users.map((user) => (
        <div key={user.val}>
          <h5>Dept: {user.Dept}</h5>
          <h4>Position: {user.Position}</h4>
          <h3>Duration: {user.Duration}</h3>
          <hr /> 
        </div>
      ))}
    </>
  );
}

export default Keys;