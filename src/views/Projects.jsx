import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {Card("Daily Dining Hall Rater", "A social media app that allows users to rate the different dining halls around UMass Lowell's campus and interact with other users", "https://cdn.vox-cdn.com/thumbor/5pPMxUTKBNpj7_KdnwnxHmG-CTg=/0x0:6000x4000/1200x800/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/67170592/shutterstock_1123253738.0.jpg", "https://github.com/TheoOP/RateMyDiningHallApp")}
          {Card("Schedgy", "A web application paired with a discord bot that helps users schedule events", "https://images.emojiterra.com/google/android-12l/512px/1f5d3.png", "https://github.com/GarbageCan622/Schedgy")}
          {Card("Gradebook Skeleton", "A gradebook skeleton showcasing future functionality that existing gradebook apps could add in like GPA calculation, end result prediction, and individual assignment measurement and curving", "https://cdn1.iconfinder.com/data/icons/school-5/512/school-education-gradebook-512.png", "https://github.com/CliftonLandry/Software-Engineer-F22")}
          {Card("Student Portfolio", "A portfolio of assignments completed during my time at Umass Lowell, showcasing my skills in C++ and shell script ", "https://t3.ftcdn.net/jpg/03/05/08/94/360_F_305089447_DiZIpTudIMvwALA9rdXJh2nDIxzFKHLO.jpg", "https://drive.google.com/file/d/10ZkoQv17qVWrcTjIE7NM9jIMU_BlkgpB/view?usp=sharing")}
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
