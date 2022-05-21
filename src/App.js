import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* <Route exact path="/" component={Login} /> */}
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import { useState, useEffect } from "react";
// import "./App.css";
// import { db } from "./firebase-config";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";

// function App() {
//   const [newEmail, setNewEmail] = useState("");
//   const [newName, setNewName] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const [users, setUsers] = useState([]);
//   const usersCollectionRef = collection(db, "users");

//   const createUser = async () => {
//     await addDoc(usersCollectionRef, {
//       email: newEmail,
//       name: newName,
//       password: newPassword,
//     });
//   };

//   const deleteUser = async (id) => {
//     const userDoc = doc(db, "users", id);
//     await deleteDoc(userDoc);
//   };

//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getUsers();
//   }, []);

//   return (
//     <div className="App">
//       <input
//         type="email"
//         placeholder="Email..."
//         onChange={(event) => {
//           setNewEmail(event.target.value);
//         }}
//       />
//       <input
//         placeholder="Name..."
//         onChange={(event) => {
//           setNewName(event.target.value);
//         }}
//       />
//       <input
//         type="password"
//         placeholder="Password..."
//         onChange={(event) => {
//           setNewPassword(event.target.value);
//         }}
//       />
//       <button onClick={createUser}>SignUP</button>

//       {users.map((user) => {
//         return (
//           <div>
//             {" "}
//             <h1>Email: {user.email}</h1>
//             <h1>Name: {user.name}</h1>
//             <h1>Password: {user.password}</h1>
//             <button
//               onClick={() => {
//                 deleteUser(user.id);
//               }}
//             >
//               Delete User
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;
