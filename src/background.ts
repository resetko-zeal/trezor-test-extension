declare const TrezorConnect: any;
declare const importScripts: any;

importScripts("../trezor-connect-webextension.js");

const fetchAddresses = async (count: number) => {
  try {
    await TrezorConnect.init({
      lazyLoad: false, // this param will prevent iframe injection until TrezorConnect.method will be called
      connectSrc: "https://connect.trezor.io/9/",
      debug: true,
      hostLabel: "Zeal wallet",
      webusb: false,
      manifest: {
        email: "hi@zeal.app",
        appUrl: "https://www.zeal.app/",
      },
    });
  } catch (e) {
    console.log("trezor init error", e);
  }

  const result = await TrezorConnect.ethereumGetAddress({
    bundle: new Array(count).fill(1).map((_, index) => ({
      path: `m/44'/60'/0'/0/${index}`,
      showOnTrezor: false,
    })),
  }).then((response: any) => {
    if (response.success) {
      return response.payload.map((item: any) => ({
        address: item.address,
        path: item.serializedPath,
      }));
    } else {
      throw new Error(
        `TrezorError ${response.payload.error}${response.payload.code}`
      );
    }
  });

  return result;
};

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: chrome.runtime.getURL("./index.html"),
  });
});

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message === "trezor-test") {
    console.log("Received message in service worker: ", message);

    fetchAddresses(2)
      .then((result) => {
        sendResponse(result);
      })
      .catch((error) => {
        console.log("failed to fetch addresses", error);
        sendResponse(error.message);
      });

    return true;
  }

  if (message == "create-tab") {
    chrome.tabs.create({
      url: "https://google.com/search?q=trezor",
    });
  }
});
