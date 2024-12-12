import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./task/TaskBoard";

function App() {
  return (
    <>
      <div className="ps-24 pe-24">
        <Header />
        <HeroSection />
        <TaskBoard />
        <Footer />
      </div>
    </>
  );
}

export default App;
