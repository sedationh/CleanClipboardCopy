export default defineBackground(async () => {
  await storage.setItem("local:isStart", true);
});
