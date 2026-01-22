import { useEffect, useState } from "react";
import "./App.css";
function useIsMobile(breakpoint: any = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);
  return isMobile;
}

export function App() {
  const isMoblie = useIsMobile();
  return (
    <div>
      {isMoblie ? (
        <h1 style={{ color: "blue" }}>This is a mobile device 1</h1>
      ) : (
        <h1 style={{ color: "green" }}>This is a desktop device 2</h1>
      )}
    </div>
  );
}

export default App;
