f = document.location.hash.slice(1) + a;
c = `${location.hash.split("#")[1]}/foo`;
p = window.location.search.split("=")[1];

// ruleid: tainted-redirect
document.location = "https://" + t + a;
// ruleid: tainted-redirect
document.location = "https://" + d;
// ruleid: tainted-redirect
document.location = "//" + f;
// ruleid: tainted-redirect
document.location = "//" + c;
// ruleid: tainted-redirect
document.location = "//" + f;
// ruleid: tainted-redirect
document.location = "//" + s;
// ruleid: tainted-redirect
document.location = p;
// ok: tainted-redirect
document.location = "https://google.com/" + p;

// ok: tainted-redirect
document.location = "//" + parseInt(d) + "google.com";
// ok: tainted-redirect
document.location = "//" + Number.parseInt(d) + "google.com";

const url = JSON.parse(JSON.stringify(window.location));
if (!window.shell) {
  redirect(url.href);
}

function redirect(href) {
  // this works in Pro version:
  document.location = href.split("=")[1];
}

if (smth()) {
  // ruleid: tainted-redirect
  document.location = url.href.split("=")[1];
}
