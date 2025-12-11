import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAPfJ33H1MC4BEmIYcDeiICUwQy1oeccQ8",
  authDomain: "blog-f0e19.firebaseapp.com",
  projectId: "blog-f0e19",
  storageBucket: "blog-f0e19.firebasestorage.app",
  messagingSenderId: "691260882910",
  appId: "1:691260882910:web:deafc4bda64027bf09274f",
  measurementId: "G-7C9BWG28Z6"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;








// const firebaseConfig = {
//   apiKey: "AIzaSyAPfJ33H1MC4BEmIYcDeiICUwQy1oeccQ8",
//   authDomain: "blog-f0e19.firebaseapp.com",
//   projectId: "blog-f0e19",
//   storageBucket: "blog-f0e19.firebasestorage.app",
//   messagingSenderId: "691260882910",
//   appId: "1:691260882910:web:deafc4bda64027bf09274f",
//   measurementId: "G-7C9BWG28Z6"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// 4:45 PM
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {

//      match /courses/{docId} {
//       allow read: if true; // All users can view course
//            allow write: if request.auth != null; // Only admin can upload
//     }
    
//       match /blogs/{docId} {
//       allow read: if true;
//       allow write: if request.auth != null;
//      }
//   }
// }
// Hover over a message to pin it
// keep

// shivanshi gupta
// 4:50 PM
// duyiyyux5

// shivanshi gupta
// 4:52 PM
// Vxc5AaWO4ZW8q4vjGekuhfPzUF0
// 629648428324566


// blogsupload