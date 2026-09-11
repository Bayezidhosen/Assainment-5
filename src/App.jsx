import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import TechnologyGrid from "./assets/components/TechnologyGrid";
import Footer from "./assets/components/Footer";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [stack, setStack] = useState([]);

  // Add Technology
  const handleAdd = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove Technology
  const handleRemove = (id) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack(
      stack.filter((item) => item.id !== id)
    );

    toast.info(
      `${removedTechnology?.name} removed from your stack.`
    );
  };

  // Remove All
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <Hero />

      <TechnologyGrid
        stack={stack}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

    </div>
  );
}

export default App;