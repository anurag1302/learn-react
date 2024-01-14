import "./App.css";
import Card from "./components/Card";

function App() {
  const cardContents1 = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    userName: "Sarah Lowe",
    designation: "Staff Engineer",
  };

  const cardContents2 = {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
