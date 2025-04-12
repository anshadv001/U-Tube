import CategoryPills from "./Components/CategoryPills";
import PageHeader from "./layouts/PageHeader";

function App() {
  return (
    <div className="max-h-screen w-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto_1fr] grow overflow-auto">
        <div className="">sidebar</div>
        <div className="overflow-x-hidden px-8 pb-4 ">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
