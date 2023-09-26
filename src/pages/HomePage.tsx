import Header from "../components/Header/Header";
import LandingPage from "../components/LandingPage/LandingPage";
import MainPage from "../components/MainPage/MainPage";

function HomePage() {
  return (
    <>
      <div className="bg-gray-100">
        <Header shadow={false} />
        <LandingPage />
        <MainPage />
      </div>
    </>
  );
}

export default HomePage;
