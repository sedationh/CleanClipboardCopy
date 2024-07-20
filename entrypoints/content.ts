let isStart = true;

const stopFunction = async (e: any) => {
  if (!isStart) {
    return;
  }
  e.stopImmediatePropagation();
};

export default defineContentScript({
  matches: ["<all_urls>"],
  main() {
    storage.getItem("local:isStart").then((newIsStart) => {
      isStart = !!newIsStart;
    });
    storage.watch<number>("local:isStart", (newIsStart) => {
      isStart = !!newIsStart;
    });
    document.addEventListener("copy", stopFunction, true);
  },
  runAt: "document_start",
});
