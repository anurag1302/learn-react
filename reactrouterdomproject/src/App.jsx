function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <div className="bg-red-500">Div1</div>
        <div className="bg-green-500">Div2</div>

        <div className="bg-blue-500">Div3</div>
        <div className="bg-teal-500">Div4</div>
        <div className="bg-yellow-500">Div5</div>
        <div className="bg-lime-500">Div6</div>
      </div>
    </>
  );
}

export default App;
