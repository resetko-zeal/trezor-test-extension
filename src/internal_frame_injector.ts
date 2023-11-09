const frame = document.createElement("iframe");

frame.src = chrome.runtime.getURL("internal_iframe.html");
frame.height = "600";
frame.width = "600";
frame.style.border = "1px solid magenta";

document.body.appendChild(frame);
