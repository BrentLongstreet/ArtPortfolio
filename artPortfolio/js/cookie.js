function cookieConsent() {
  $(".toast").toast("show");
}

$("#btnDeny").click(() => {
  $(".toast").toast("hide");
});

$("#btnAccept").click(() => {
  $(".toast").toast("hide");
});

// load
cookieConsent();
