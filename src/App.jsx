import TopNavigation from "./components/Topnavigation";
import HomepageBody from "./components/Homepagebody";
import Footer from "./components/Footer";
import Copyright from "./components/copyright";
import homePageContents from "./components/Homepagecontent";

function App() {
  return (
    <div>
      <TopNavigation />
      {homePageContents.map((item, i) => {
        return(<HomepageBody
          key={i}
          title={item.title}
          content={item.content}
          image={item.image}
        />);
      })}

      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
