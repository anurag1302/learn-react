import "./App.css";
import Card from "./components/Card";

function App() {
  const cardContents1 = {
    text: "Lorem Ipsum 1",
    userName: "Sarah Lowe",
    designation: "Staff Engineer",
  };

  const cardContents2 = {
    text: "Lorem Ipsum 2",
    userName: "Jamie Howard",
    designation: "Senior Staff Engineer",
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 mb-5">Hello World</h1>
      <Card content={cardContents1} />
      <Card content={cardContents2} />
    </>
  );
}

export default App;
