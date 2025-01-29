import { BsArrowUpRight } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImInstagram, ImLinkedin2 } from "react-icons/im";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 0 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1020px) {
    padding: 0 1rem;
  }

  @media (max-width: 740px) {
    grid-template-columns: 1fr;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const StyledPLogo = styled.p`
  font-weight: 700;
`;

const StyledPAchieve = styled.p`
  width: 58%;
  font-size: 0.875rem;
  color: #ffffff94;
  line-height: 1.25rem;
  margin-bottom: 4rem;

  @media (max-width: 1020px) {
    width: 100%;
  }
`;

const StyledCLinkP = styled.p`
  color: var(--color--green);
  align-items: center;
  display: flex;
  gap: 0.2rem;
  cursor: pointer;

  a {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 0.5px;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
  }

  a:hover {
    color: var(--color--green);
  }
`;

const StyledCUl = styled.ul`
  line-height: 2rem;
  font-size: 0.75rem;
`;

const StyledConnectWithUs = styled.div`
  h3 {
    font-weight: 600;
    margin: 18px 0;
  }

  ul {
    display: flex;
    gap: 1.5rem;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: var(--color--green);
    border-radius: 50%;
    color: var(--color--bg);
  }
`;

const StyledGrid2 = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-left: 10rem;

  ul {
    font-size: 0.75rem;
  }
  li {
    margin-bottom: 1rem;
  }
  @media (max-width: 1020px) {
    padding-left: 3rem;
  }
`;

const StyledGrid2H3 = styled.h3`
  font-weight: 600;
`;
function FooterSectionTwo() {
  return (
    <StyledMain>
      <section>
        <div>
          <StyledLogo>
            <img src="/assets/terra_logo.svg" alt="terra logo" />
            <StyledPLogo>Building Africa’s workforce</StyledPLogo>
          </StyledLogo>
          <StyledPAchieve>
            To achieve the future that we dream of, we must equip ourselves with
            the required skills to put us on the radar of employers all over the
            world
          </StyledPAchieve>
        </div>

        <div>
          <StyledCLinkP>
            <a href="mailto:hello@sidehustle.ng">CONTACT US</a>

            <BsArrowUpRight />
          </StyledCLinkP>
          <StyledCUl>
            <li>Get in touch</li>
            <li>
              <a href="tel:+234-907-957-7366">+234-907-957-7366</a>
            </li>
            <li>
              <a href="mailto:hello@sidehustle.ng">hello@sidehustle.ng</a>
            </li>
            <li>
              <address>Olorunda abaa, Akobo, Ibadan, NG</address>
            </li>
          </StyledCUl>
        </div>

        <StyledConnectWithUs>
          <h3>CONNECT WITH US</h3>
          <ul>
            <a href="https://www.facebook.com/TerraLearningHQ" target="_blank">
              <li>
                <FaFacebookF />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/company/terra-learning"
              target="_blank"
            >
              <li>
                <ImLinkedin2 />
              </li>
            </a>
            <a href="https://twitter.com/terralearning" target="_blank">
              <li>
                <FaTwitter />
              </li>
            </a>
            <a href="https://www.instagram.com/terralearning/" target="_blank">
              <li>
                <ImInstagram />
              </li>
            </a>
          </ul>
        </StyledConnectWithUs>
      </section>
      <StyledGrid2>
        <div>
          <StyledGrid2H3>Quick Links</StyledGrid2H3>
          <ul>
            <a href="/questions">
              <li>FAQ</li>
            </a>
            <a href="/blog">
              <li>Blog</li>
            </a>
          </ul>
        </div>

        <div>
          <StyledGrid2H3>Company</StyledGrid2H3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </StyledGrid2>
    </StyledMain>
  );
}

export default FooterSectionTwo;
