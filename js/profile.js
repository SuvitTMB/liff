

$(document).ready(function () {
    main()
	document.getElementById('CheckLogin').style.display='block';
	document.getElementById('CheckProfile').style.display='none';
});


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
  var db=firebase.firestore().collection("personal")
  Eid = "";
  ReadData();
*/

    async function main() {
      await liff.init({ liffId: "1655966947-5rJYErwX" })
      document.getElementById("isLoggedIn").append(liff.isLoggedIn())
      if(liff.isLoggedIn()) {
        getUserProfile()
      } else {
        liff.login()
      }
    }


    async function getUserProfile() {
      const profile = await liff.getProfile()
      document.getElementById("pictureUrl").src = profile.pictureUrl
      document.getElementById("pictureUrl1").src = profile.pictureUrl
      document.getElementById("userId").append(profile.userId)
      document.getElementById("userId1").append(profile.userId)
      document.getElementById("displayName").append(profile.displayName)
      document.getElementById("displayName1").append(profile.displayName)
      //document.getElementById("statusMessage").append(profile.statusMessage)
      //document.getElementById("decodedIDToken").append(liff.getDecodedIDToken().email)
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


	function ClickCheckLogin() {
	  document.getElementById('CheckLogin').style.display='none';
	  document.getElementById('CheckProfile').style.display='block';
	}

/*

  function ReadData() {
    db.orderBy("Firstname").onSnapshot(function(snapshot){
      snapshot.docChanges().forEach(function(change){
        if(change.type === "added") {
          ShowData(change.doc);
        }
        if(change.type === "modified") {
          UpdateData(change.doc);
        }
        if(change.type === "removed") {
          var node = document.getElementById("L_"+change.doc.id);
          node.parentNode.removeChild(node);
          //ShowData(change.doc);
        }       
      });
    });
  }



  function ShowData(doc) {
    var ul = document.getElementById("show");
    var node = document.createElement("LI");
    node.id = "L_"+doc.id;
    var t1 = document.createTextNode(doc.data().Firstname + " | ");
    var t2 = document.createTextNode(doc.data().Lastname + " | ");
    var t3 = document.createTextNode(doc.data().Age);
    node.appendChild(t1);
    node.appendChild(t2);
    node.appendChild(t3);

    //delete
    var b = document.createElement("BUTTON");
    b.innerHTML = "deleted";
    b.addEventListener("click",function(){
      RemoveData(doc.id);
    });
    node.appendChild(b);

    //edit
    var b2 = document.createElement("BUTTON");
    b2.innerHTML = "edit";
    b2.addEventListener("click",function(){
      EditData(
        doc.id,
        doc.data().Firstname,
        doc.data().Lastname,
        doc.data().Age
      );
    });
    node.appendChild(b2);
    ul.appendChild(node);
  }


  function UpdateData(doc) {
    var node = document.getElementById("L_" + doc.id);
    node.innerHTML = "";
    var t1 = document.createTextNode(doc.data().Firstname + " | ");
    var t2 = document.createTextNode(doc.data().Lastname + " | ");
    var t3 = document.createTextNode(doc.data().Age);
    node.appendChild(t1);
    node.appendChild(t2);
    node.appendChild(t3);

    //delete
    var b = document.createElement("BUTTON");
    b.innerHTML = "deleted";
    b.addEventListener("click",function(){
      RemoveData(doc.id);
    });
    node.appendChild(b);

    //edit
    var b2 = document.createElement("BUTTON");
    b2.innerHTML = "edit";
    b2.addEventListener("click",function(){
      EditData(
        doc.id,
        doc.data().Firstname,
        doc.data().Lastname,
        doc.data().Age
      );
    });
    node.appendChild(b2);
    //ul.appendChild(node);
  }






  //AddData("steven","wonder",66);
  function AddData(Fname,Lname,Age) {
    if (Eid == "") {
      if(Fname!="" && Lname!="" && Age!="") {
        db.add({
          Firstname : Fname,
          Lastname : Lname,
          Age : Age
        });       
      } else {
        alert("Please add First Name bofore Save");
      }
    } else {
      db.doc(Eid).update({
        Firstname : Fname,
        Lastname : Lname,
        Age : Age       
      });
      Eid = "";
      document.getElementById("txtFirstName").value = "";
      document.getElementById("txtLastName").value = "";
      document.getElementById("txtAge").value = "";   }

  }

  function RemoveData(id) {
    db.doc(id).delete();
  }


  function EditData(id,Fname,Lname,Age) {
    Eid = id;
    document.getElementById("txtFirstName").value = Fname;
    document.getElementById("txtLastName").value = Lname;
    document.getElementById("txtAge").value = Age;

  }

*/

