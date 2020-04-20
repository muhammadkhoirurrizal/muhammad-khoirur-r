import React from "react";
import RashSelfIcon from "../assets/images/rizal.png";
import AboutBox from "../components/About/AboutBox";
import about from "../data/About";
import {
  UserWrapper,
  UserTitle,
  UserDescription,
  DownloadButton,
  UserTopic,
} from "../styles/indexStyle.js";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <UserWrapper>
        <UserTitle>
          Muhammad Khoirur <span>R.</span>
        </UserTitle>
        <UserDescription>
          <div>
            <p>
              Hello there. <br />
              Welcome to my portfolio. I am a game progammer and front end
              developer.
            </p>
            <DownloadButton
              href="https://drive.google.com/uc?export=download&id=1lXSscZce5MS7Kj6Cm8agU4-RprPrhIBG"
              download
              title="Resume"
            >
              Download Resume
            </DownloadButton>
          </div>
          <img className="profile-me" src={RashSelfIcon} alt="khoirur self" />
        </UserDescription>
        <UserTopic>
          {about.map((item) => (
            <AboutBox key={item.id} info={item} />
          ))}
        </UserTopic>
      </UserWrapper>
    </Layout>
  );
};

export default IndexPage;
