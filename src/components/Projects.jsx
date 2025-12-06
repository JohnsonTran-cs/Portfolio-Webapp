import ProjectCard from "./ProjectCard";
export default function Projects() {
  const projectList = [
    {
      title: "Scheduler App",
      youtubeId: "W7inGj80EKU",
      description: "A task scheduler and navigation application created along with Adam L. and Sean D. We used Python's tkinter for the GUI and networkx/matplotlib for the visualization of the map we made. This deepened my understanding of algorithms that I've learned in class, such as KMP, MST(Prim and Kruskal, Merge Sort, and Dijkstra."
    },
    {
      title: "Poker Analysis",
      youtubeId: "s6PA1NEYcgk",
      description: "A Poker odds visualizer that analyzes the chances of getting each type of hand in Poker. This was created using C++ and SFML. It does a random run and will return the odds of that given run."
    },
    {
      title: "Tetris Replica Demo",
      youtubeId: "CALy72VFQoQ",
      description: "A replica of the popular game, Tetris. Uses C++ and the SFML library to create this block stacking strategy game. "
    },
    {
      title: "Algorithm Analysis Demo",
      youtubeId: "po5dNSkyoko",
      description: "A Python Graphical User Interface (GUI) of different algorithms. This was a team effort with my team members, Adam S. and Adam L. This application compares each algorithm in real time and gives us a computation time for each. We used pygame and matplotlib for the GUI."
    },
    {
      title: "Huffman Compression Tool Demo",
      youtubeId: "TlAI2R-BeZg",
      description: "A Python application that allows us to compress and decompress text files using greedy algorithms and Huffman Coding. This was a collaborative effort with Josephine C. and Alex I. We used Tkinter and graphviz for the GUI, bitarray to compress the files, and imported os in order to compare the file sizes."
    },
    {
      title: "Galaga Replica Game",
      youtubeId: "40iYD17dcw8",
      description: "A replica of the old arcade game, Galaga. This was created using Python's pygame and Object Oriented Programming principles."
    },
  ];

  return (
    <div className="section">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {projectList.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </div>
  );
}
