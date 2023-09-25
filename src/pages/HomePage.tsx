import Header from "../components/Header/Header";
import LandingPage from "../components/LandingPage/LandingPage";
import MainPage from "../components/MainPage/MainPage";

function HomePage() {
  return (
    <>
      <div className="w-full h-screen flex flex-cols text-center">
        <Header shadow={false} />
        <LandingPage />
        <MainPage />
      </div>
    </>
  );
}

export default HomePage;
