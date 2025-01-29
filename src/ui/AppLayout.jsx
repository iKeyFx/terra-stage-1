import styled from "styled-components";
import Header from "./Header";
import HomeSection from "../sections/HomeSection";
import SectionTwo from "../sections/SectionTwo";
import DashboardSection from "../sections/DashboardSection";
import SectionThree from "../sections/SectionThree";
import PatnerSlideSection from "../sections/PatnerSlideSection";
import CardSection from "../sections/CardSection";
import ReadyToJoinSection from "../sections/ReadyToJoinSection";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

const StyledLoader = styled.div`
  display: flex;
  min-height: 100dvh;
  justify-content: center;
  align-items: center;
  background-color: var(--color--white);
`;
function AppLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <StyledLoader>
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
          />
        </StyledLoader>
      ) : (
        <>
          <Header />
          <main>
            <HomeSection />
            <SectionTwo />
            <DashboardSection />
            <SectionThree />
            <PatnerSlideSection />
            <CardSection />
            <ReadyToJoinSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default AppLayout;
