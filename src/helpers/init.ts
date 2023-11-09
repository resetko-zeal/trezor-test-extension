import TrezorConnect from "@trezor/connect-web";

export const trezorInit = async () => {
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
};
