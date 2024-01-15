import "./style.css";

import { fetchAddresses } from "./helpers/fetchAddresses";
import { setOutput } from "./helpers/setOutput";

const connect = async (e: MouseEvent) => {
  try {
    console.log("fetching via service worker", e.target);
    const addresses = await fetchAddresses();

    console.log(addresses);

    setOutput(JSON.stringify(addresses, null, 2));
  } catch (e) {
    console.log("failed to fetch addresses", e);
  }
};

const init = () => {
  const connectButton = document.getElementById("connect");
  const tabButton = document.getElementById("tab");

  if (tabButton) {
    tabButton.addEventListener("click", async () => {
      const response = await chrome.runtime.sendMessage("create-tab");

      console.log("response from tab", response);
    });
  }

  if (connectButton) {
    connectButton.addEventListener("click", connect);
  }
};

init();
