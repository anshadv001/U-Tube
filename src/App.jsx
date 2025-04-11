import PageHeader from "./layouts/PageHeader";

function App() {
  return (
    <div className="max-h-screen w-screen flex flex-col">
      <PageHeader/>
      <div className="grid grid-col-[auto,1fr] flex-grow-1 overflow-auto">
         <div>sidebar</div>
         <div className="">

         </div>
      </div>
    </div>
  );
}

export default App;
