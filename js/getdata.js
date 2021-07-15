var vLineID = "";
var vLineName = "";
var vLinePicture = "";


/*
var firebaseConfig = {
	apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
	authDomain: "retailproject-6f4fc.firebaseapp.com",
	projectId: "retailproject-6f4fc",
	storageBucket: "retailproject-6f4fc.appspot.com",
	messagingSenderId: "653667385625",
	appId: "1:653667385625:web:a5aed08500de80839f0588",
	measurementId: "G-9SKTRHHSW9"
};
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
//var db=firebase.firestore().collection("personal")
*/

    async function main() {
      await liff.init({ liffId: "1655966947-5rJYErwX" });
      document.getElementById("isLoggedIn").append(liff.isLoggedIn());
      if(liff.isLoggedIn()) {
        getUserProfile();
      } else {
        liff.login();
      }
    }
    main();


    async function getUserProfile() {
      const profile = await liff.getProfile();
      //document.getElementById("pictureUrl").src = profile.pictureUrl;
      //document.getElementById("userId").append(profile.userId);
      //document.getElementById("displayName").append(profile.displayName);
      vLinePicture = profile.pictureUrl;
      vLineID = profile.userId;
      vLineName = profile.displayName;
      alert(profile.userId);
    }


    function openWindow() {
      liff.openWindow({
        url: "https://line.me",
        external: true     
      })
    }
