import { useState } from "react";

function App() {
  const [isStart, setIsStart] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const isStart = await storage.getItem<boolean>("local:isStart");
      setIsStart(!!isStart);
    })();
  }, []);

  async function toggleStart(current: boolean) {
    if (current === isStart) {
      return;
    }
    const next = !isStart;
    await storage.setItem("local:isStart", next);
    setIsStart(next);
  }

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          minWidth: "fit-content",
        }}
      >
        <input
          onClick={() => toggleStart(true)}
          type="checkbox"
          id="true"
          name="true"
          checked={isStart}
        />
        <label htmlFor="true">开启</label>
      </div>

      <div>
        <input
          onClick={() => toggleStart(false)}
          type="checkbox"
          id="false"
          name="false"
          checked={!isStart}
        />
        <label htmlFor="false">关闭</label>
      </div>
    </div>
  );
}

export default App;
