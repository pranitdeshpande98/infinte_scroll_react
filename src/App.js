import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const onscroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 20
      ) {
        setCount(count + 50);
      }
    };

    window.addEventListener("scroll", onscroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, [count]);

  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}> {i + 1} </div>);
  }
  return (
    <div className="App">
      <h1> Infinite Scroll </h1>
      {elements}
    </div>
  );
}
