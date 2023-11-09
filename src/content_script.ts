const frameToInject = document.createElement("iframe");

frameToInject.src = `chrome-extension://ililejdeobkfpbibkmcacekjhgnobhho/content_iframe.html`;
frameToInject.height = "600";
frameToInject.width = "600";
frameToInject.style.position = "fixed";
frameToInject.style.top = "50px";
frameToInject.style.left = "50px";
frameToInject.style.zIndex = "100000000";
frameToInject.style.border = "1px solid cyan";

const observer = new MutationObserver(function () {
  if (document.body && window.location.host !== "connect.trezor.io") {
    document.body.appendChild(frameToInject);
    observer.disconnect();
  }
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
});
