import "./App.css";
import StoryOverview from "./components/StoryOverview/StoryOverview";
import linearStory from "./stories/linearStory";

// import bustedStory from "./stories/bustedStory";
// import loopingStory from "./stories/loopingStory";

function App() {
	return <StoryOverview story={linearStory} />;
}

export default App;
