import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import data from "./assets/program.json";
function App() {
  return (
    <>
      <Header title="M6" />

      <main>
        {data.map((element) => {
          // console.log(element);
          return (
            <Section
              time={element.time}
              title={element.title}
              type={element.type}
              duration={element.duration}
              image={element.image}
              isUnseen={element.isUnseen}
              direct={element.direct}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
