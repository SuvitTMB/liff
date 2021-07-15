var vLineID = "";
var vLineName = "";
var vLinePicture = "";

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
  var db=firebase.firestore().collection("personal")


    async function main() {
      //alert("LINE Developers x Skooldio")
      await liff.init({ liffId: "1655966947-5rJYErwX" })
      document.getElementById("isLoggedIn").append(liff.isLoggedIn())
      if(liff.isLoggedIn()) {
        getUserProfile()
      } else {
        liff.login()
      }
    }
    main()


    async function getUserProfile() {
      const profile = await liff.getProfile()
      document.getElementById("pictureUrl").src = profile.pictureUrl
      document.getElementById("userId").append(profile.userId)
      document.getElementById("displayName").append(profile.displayName)
      document.getElementById("statusMessage").append(profile.statusMessage)
      document.getElementById("decodedIDToken").append(liff.getDecodedIDToken().email)
    }


    function logOut() {
      liff.logout()
      window.location.reload()
    }

    function closed() {
      liff.closeWindow()
    }

    async function scanCode() {
      alert("Scan QRCode")
      const result = await liff.scanCode()
      document.getElementById("scanCode").append(result.value)
    }

    function openWindow() {
      liff.openWindow({
        url: "https://line.me",
        external: true     
      })
    }



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
  //var db = firebase.firestore().collection("CheckProfile");
  //firebase.analytics();
  //var db=firebase.firestore().collection("personal")


    async function main() {
      await liff.init({ liffId: "1655966947-5rJYErwX" });
      document.getElementById("isLoggedIn").append(liff.isLoggedIn());
      if(liff.isLoggedIn()) {
        getUserProfile();
      } else {
        liff.login();
      }
    }
    main()


    async function getUserProfile() {
      const profile = await liff.getProfile()
      document.getElementById("pictureUrl").src = profile.pictureUrl
      document.getElementById("userId").append(profile.userId)
      document.getElementById("displayName").append(profile.displayName)
      document.getElementById("statusMessage").append(profile.statusMessage)
      document.getElementById("decodedIDToken").append(liff.getDecodedIDToken().email)
      alert(profile.pictureUrl);
    }


    function logOut() {
      liff.logout()
      window.location.reload()
    }

    function closed() {
      liff.closeWindow()
    }



/*
async function getUserProfile() {
	const profile = await liff.getProfile()
	document.getElementById("pictureUrl").src = profile.pictureUrl
	document.getElementById("userId").append(profile.userId)
	document.getElementById("displayName").append(profile.displayName)
	document.getElementById("statusMessage").append(profile.statusMessage)
	document.getElementById("decodedIDToken").append(liff.getDecodedIDToken().email)
	alert(profile.userId);
	vLineID = append(profile.userId);
	vLineName = append(profile.displayName);
	vLinePicture = profile.pictureUrl;

}

//alert(vLineID);

function logOut() {
  liff.logout()
  window.location.reload()
}

function closed() {
  liff.closeWindow()
}

*/











/*

alert(vLineID);


alert(vLineID);

var vLoginStatus = "0";

var vSurvey2 = "0";
var vSurvey2Result = "0.00%";
*/
//sessionStorage.clear();