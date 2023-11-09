import TrezorConnect from "@trezor/connect-web";
import { trezorInit } from "./init";

export const fetchAddresses = async (count: number) => {
  await trezorInit();

  const result = await TrezorConnect.ethereumGetAddress({
    bundle: new Array(count).fill(1).map((_, index) => ({
      path: `m/44'/60'/0'/0/${index}`,
      showOnTrezor: false,
    })),
  }).then((response) => {
    if (response.success) {
      return response.payload.map((item) => ({
        address: item.address,
        path: item.serializedPath,
      }));
    } else {
      throw new Error(`${response.payload.error}${response.payload.code}`);
    }
  });

  return result;
};
