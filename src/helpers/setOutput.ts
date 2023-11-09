export const setOutput = (data: string) => {
  const outPre = document.getElementById("out");

  if (outPre) {
    outPre.innerHTML = data;
  }
};
