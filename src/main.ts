import "./style.css";

import { fetchAddresses } from "./helpers/fetchAddresses";
import { setOutput } from "./helpers/setOutput";

const connect = async () => {
  try {
    const addresses = await fetchAddresses(2);

    console.log(addresses);

    setOutput(JSON.stringify(addresses, null, 2));
  } catch (e) {
    console.log("failed to fetch addresses", e);
  }
};

const init = () => {
  const connectButton = document.getElementById("connect");

  if (connectButton) {
    connectButton.addEventListener("click", connect);
  }
};

init();
