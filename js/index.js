var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var CheckFoundData = 0;

$(document).ready(function () {
  //if(sessionStorage.getItem("News")==null) {
  //  document.getElementById('id01').style.display='block';
  //}
  /*
  sessionStorage.clear();
  var str = "";
  var sLineID = "Ua6b6bf745bd9bfd01a180de1a05c23b3";
  var sLineName = "Website";
  var sLinePicture = "https://profile.line-scdn.net/0hoLlg-mNNMGNRHiaTpMdPNG1bPg4mMDYrKX8qVnIYOgYpe3QwbCp2AXVKaVN_fnMzOC16V3NMagF8";
  sessionStorage.setItem("LineID", sLineID);
  sessionStorage.setItem("LineName", sLineName);
  sessionStorage.setItem("LinePicture", sLinePicture);
  str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="add-profile" width="100px"></div>';
  str += '<div class="NameLine">'+ sessionStorage.getItem("LineName")+'</div>';
  $("#MyProfile").html(str);  
  Connect_DB();
  */

  main();
});

async function main() {
  await liff.init({ liffId: "1655966947-pXxo14r9" });
  document.getElementById("isLoggedIn").append(liff.isLoggedIn());
  if(liff.isLoggedIn()) {
    getUserProfile();
  } else {
    liff.login();
  }
}


async function getUserProfile() {
  var str = "";
  const profile = await liff.getProfile();
  sessionStorage.setItem("LineID", profile.userId);
  sessionStorage.setItem("LineName", profile.displayName);
  sessionStorage.setItem("LinePicture", profile.pictureUrl);
  str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="add-profile" width="100px"></div>';
  str += '<div class="NameLine">'+ sessionStorage.getItem("LineName")+'</div>';
  $("#MyProfile").html(str);  
  Connect_DB();
}


function openWindow() {
  liff.openWindow({
    url: "https://line.me",
    external: true     
  })
}


function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    databaseURL: "https://file-upload-6f4fc.firebaseio.com",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);
  dbCheckProfile = firebase.firestore().collection("CheckProfile");
  //dbSongkarn = firebase.firestore().collection("Songkarn");
  //sessionStorage.setItem("News", "Songkarn");
  CheckData();
}



function CheckData() {
  dbCheckProfile.where('lineID','==',sessionStorage.getItem("LineID"))
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      CheckFoundData = doc.data().statusconfirm;
      if(doc.data().statusconfirm==1) {
	      sessionStorage.setItem("EmpID", doc.data().empID);
	      sessionStorage.setItem("EmpName", doc.data().empName);
        //ShowIMG();
        //location.href = "index.html";
      } else {
        location.href = "https://liff.line.me/1655966947-KxrAqdyp";
      }
    });
    if(CheckFoundData==0) {
      location.href = "https://liff.line.me/1655966947-KxrAqdyp";
    }
  });
}

/*
function ShowIMG() {
  var str = "";
  str += '<div class="grid">';
  dbSongkarn.orderBy('TimeStampDate','desc')
  .limit(8)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      str += '<figure class="effect-zoe" onclick="viewpage(\''+ doc.id +'\')">';
      str += '<img src="'+doc.data().SendImg+'"/>';
      str += '<figcaption><div style="font-weight: 600;font-size:11px;">'+doc.data().EmpName+'</div>';
      str += '</figcaption></figure>';
    });
    str += '</div>';
    $("#DisplayImg").html(str);
  });
}
*/

function ClipVDO(Clip) {
  var str = "";
  var sVDO = "";
  if(Clip==1) {
    sVDO = "https://firebasestorage.googleapis.com/v0/b/retailproject-6f4fc.appspot.com/o/APEclip%2FRH-1.mp4?alt=media&token=ec69964c-a5aa-4b15-959c-dfe3ce53ae80";
  } else if(Clip==2) { 
    sVDO = "https://firebasestorage.googleapis.com/v0/b/retailproject-6f4fc.appspot.com/o/APEclip%2FRH-2.mp4?alt=media&token=787a2cc0-8df6-4ed1-85bb-4fa771a198dd";
  } else if(Clip==3) { 
    sVDO = "https://firebasestorage.googleapis.com/v0/b/retailproject-6f4fc.appspot.com/o/APEclip%2FRH-3.mp4?alt=media&token=b9a7dfea-53a5-4f65-be55-956d7a5d54b7";
  } else if(Clip==4) { 
    sVDO = "https://firebasestorage.googleapis.com/v0/b/retailproject-6f4fc.appspot.com/o/APEclip%2FRH-4.mp4?alt=media&token=26375e0e-8921-4edd-8d64-405d6110f600";
  } else if(Clip==5) { 
    sVDO = "https://firebasestorage.googleapis.com/v0/b/retailproject-6f4fc.appspot.com/o/APEclip%2FRH-5.mp4?alt=media&token=8aa41517-93b2-48be-ae0e-d73d611f835a";
  } else if(Clip==6) { 
    sVDO = "https://firebasestorage.googleapis.com/v0/b/retailproject-6f4fc.appspot.com/o/APEclip%2FRH-6.mp4?alt=media&token=86d6c572-bc0d-4129-9dbf-1b8f0587833a";
  }
  //alert(Clip);
  str += '<div><div style="padding:20px 0;color:#f68b1f; font-weight:600; text-align:center;">APE CHEER UP<br><font color="#0056ff">Branch Banking Regional Office '+Clip+' - RH'+Clip+'</font>';
  str += '<br><font color="#000000">..... มาร่วมลุ้นเป้าหมายกัน .....</font></div>';
  str += '<video id="video" width="95%" controls="controls" autoplay>';
  //str += '<source src="https://retailsociety-33ea6.web.app/line/vdo/ttb_logo_story.mp4" type="video/mp4">';
  str += '<source src="'+sVDO+'" type="video/mp4">';
  str += '</video></div><div style="padding:20px;color:#666; text-align:left;font-size:11px;line-height:1.4;">รวมเพื่อนๆ ในสาขามาถ่ายคลิปวิดีโอสั้นๆ บูมเชียร์เป้า APE ของ RH ตัวเอง พร้อมท่าทางประกอบ ความยาวไม่เกิน 1 นาที เช่น “ RH 1 APE xxx ล้าน ต้องสู้! ต้องสู้! ต้องสู้! ”</div>';
  $("#DisplayClipVDO").html(str);

  document.getElementById('id01').style.display='block';
}



function CloseAll() {
  var video = document.querySelector("#video");
  video.pause();
  video.currentTime = 0;
  document.getElementById('id01').style.display='none';
}
