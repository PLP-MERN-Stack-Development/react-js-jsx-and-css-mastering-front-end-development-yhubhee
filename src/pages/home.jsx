// src/pages/Home.jsx
import React from "react";
import Layout from "../layout/layout";
import TaskManager from "../components/taskmanager";
import ApiData from "../components/apidata";
import Button from "../components/button";
import { useTheme } from "../context/themecontext";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout>
      <div className="flex justify-end mb-4">
        <Button variant="secondary" onClick={toggleTheme}>
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </Button>
      </div>

      <TaskManager />
      <ApiData />
    </Layout>
  );
};

export default Home;
