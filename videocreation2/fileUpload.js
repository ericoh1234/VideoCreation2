  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
    import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-storage.js";
  // TODO: Add SDKs for Firebase products that you want to use
    
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBxeYKc1X0MCsZ6fz2n6cR738aGq3JOaxo",
    authDomain: "video-creation1.firebaseapp.com",
    projectId: "video-creation1",
    storageBucket: "video-creation1.firebasestorage.app",
    messagingSenderId: "793580142689",
    appId: "1:793580142689:web:c5a54b2258cc9c1e6eaa20",
    measurementId: "G-S7FJTK6KVH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

    // Initialize Cloud Storage and get a reference to the service
    const storage = getStorage(app);

    // Create a storage reference from our storage service
    export async function uploadFile(file) {
      console.log(file);
      const storageRef = ref(storage, `uploads/${file.name}`);
      try {
        // 'file' comes from the Blob or File API
        await uploadBytes(storageRef, file)
        console.log('Uploaded a blob or file!');
        
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }