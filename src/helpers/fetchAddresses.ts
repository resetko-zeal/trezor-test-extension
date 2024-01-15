export const fetchAddresses = async () => {
  const response = await chrome.runtime.sendMessage("trezor-test");

  return response;
};
