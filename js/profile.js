

$(document).ready(function () {
	main()
});



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


function openWindow() {
  liff.openWindow({
    url: "https://line.me",
    external: true     
  })
}

