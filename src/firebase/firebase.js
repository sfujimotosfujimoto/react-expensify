import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log("changed!!: ", snapshot.key, snapshot.val());
// });

// // child_added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log("added!!: ", snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "Cut hair",
//   note: "no notes",
//   amount: 12300,
//   createdAt: 0
// });

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "Angular, Redux, Vue"
// });

// database.ref("notes/-L1l0DXfHeGrjOXAApvO").remove();

// database
//   .ref("location")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log(("Enter fetching Data", e));
//   });

// database
//   .ref()
//   .set({
//     name: "SF",
//     age: 26,
//     isSingle: false,
//     location: {
//       city: "Philadelphia",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("This failed.", e);
//   });

// database.ref("isSingle").set(null);

// // database.ref().set('This is my data.');

// // database.ref("age").set({
// //   age: 27
// // });

// // database.ref("location/city").set("New York");

// database
//   .ref("attributes")
//   .set({
//     height: 170,
//     weight: 56
//   })
//   .then(() => {
//     console.log("Set!!!");
//   })
//   .catch(e => {
//     console.log("There was an error. ", e);
//   });

// database
//   .ref()
//   .remove()
//   .then(() => {})
//   .catch(e => {});

// console.log("I made a request to change data.");
