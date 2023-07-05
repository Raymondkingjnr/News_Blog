import React from "react";
import { styled } from "styled-components";
import aboutusImg from "../assets/aboutus.jpg";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

function AboutUs() {
  const socialsLink = [
    {
      id: 1,
      icon: <FiFacebook />,
    },
    {
      id: 2,
      icon: <FiTwitter />,
    },
    {
      id: 3,
      icon: <FiInstagram />,
    },
  ];
  return (
    <Wrapper>
      <main>
        <h4>
          Our Vision
          <div className="line"></div>
        </h4>
        <p>
          In today's information-driven world, the thirst for knowledge is
          unquenchable. It is in this era of constant connectivity and
          ever-evolving information that "Daily Info" emerges, a blog website
          with a resolute vision to become the beacon of credible and
          enlightening content. Daily Info seeks to be the go-to Dlatform,
          enriching lives through its diverse range of articles and empowering
          users with valuable insights on various topics. Let us delve into the
          profound vision that propels this blog website forward.
        </p>
        <div className="about-links">
          {socialsLink.map((social, index) => {
            return (
              <ul className="socials-link" index={` ${social.id} ${index}`}>
                {social.icon}
              </ul>
            );
          })}
        </div>
      </main>
      <img src={aboutusImg} alt="aboutus" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  .about-links {
    display: flex;
    gap: 10px;
  }
  .socials-link {
    background: #000;
    cursor: pointer;
    color: #fff;
    padding: 12px;
    font-size: 12px;
    border-radius: 2px;
  }
  .line {
    width: 40px;
    height: 2px;
    background: #010048;
    margin-left: 1.5rem;
  }
  max-width: 1200px;
  margin: auto;
  img {
    width: 500px;
    height: 400px;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 1px 0px 50px 25px rgba(0, 0, 0, 0.1);
  }
  main {
    width: 500px;
  }
  h4 {
    font-weight: 800px;
    font-size: 20px;
    line-height: 2rem;
    font-family: "Roboto";
    text-align: left;
  }
  p {
    font-weight: 600px;
    font-size: 15px;
    line-height: 2rem;
    font-family: "Roboto";
  }
`;

export default AboutUs;
