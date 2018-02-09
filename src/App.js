import React, { Component } from "react";
import logo from "./logo.svg";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  EmailShareButton,
  // import icons
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  EmailIcon,
  // import share counts
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount
} from "react-share";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <FacebookShareButton
            url="https://devmountain.com/"
            quote="I love this place"
            hashtag="#DevMountain"
          >
            <div className="share_container">
              <FacebookIcon size={50} round={true} />
              <FacebookShareCount url="https://devmountain.com/" />
            </div>
          </FacebookShareButton>

          <GooglePlusShareButton url="https://devmountain.com/">
            <div className="share_container">
              <GooglePlusIcon size={50} round={true} />
              <GooglePlusShareCount url="https://devmountain.com/" />
            </div>
          </GooglePlusShareButton>

          <LinkedinShareButton
            url="https://devmountain.com/"
            title="I love Devmountain"
            description="Learn to Code, change your career"
          >
            <div className="share_container">
              <LinkedinIcon size={50} round={true} />
              <LinkedinShareCount url="https://devmountain.com/" />
            </div>
          </LinkedinShareButton>

          <TwitterShareButton
            url="https://devmountain.com/"
            title="Coolest place on Earth"
            hashtags={["Devmountain", "Javascript"]}
          >
            <TwitterIcon size={50} round={true} />
          </TwitterShareButton>

          <TelegramShareButton
            url="https://devmountain.com/"
            title="Change your career, change your life, learn to code"
          >
            <TelegramIcon size={50} round={true} />
          </TelegramShareButton>

          <WhatsappShareButton
            url="https://devmountain.com/"
            title="Change your career, change your life, learn to code"
          >
            <WhatsappIcon size={50} round={true} />
          </WhatsappShareButton>

          <PinterestShareButton
            url="https://devmountain.com/"
            description="Change your career, change your life, learn to code"
          >
            <div className="share_container">
              <PinterestIcon size={50} round={true} />
              <PinterestShareCount url="https://devmountain.com/" />
            </div>
          </PinterestShareButton>

          <VKShareButton
            url="https://devmountain.com/"
            title="Change your career, change your life, learn to code"
            description="Change your career, change your life, learn to code"
            image="http://placekitten.com/202/201"
          >
            <div className="share_container">
              <VKIcon size={50} round={true} />
              <VKShareCount url="https://devmountain.com/" />
            </div>
          </VKShareButton>

          <OKShareButton
            url="https://devmountain.com/"
            title="Change your career, change your life, learn to code"
            description="Change your career, change your life, learn to code"
            image="http://placekitten.com/202/201"
          >
            <div className="share_container">
              <OKIcon size={50} round={true} />
              <OKShareCount url="https://devmountain.com/" />
            </div>
          </OKShareButton>

          <RedditShareButton
            url="https://devmountain.com/"
            title="Change your career, change your life, learn to code"
          >
            <div className="share_container">
              <RedditIcon size={50} round={true} />
              <RedditShareCount url="https://devmountain.com/" />
            </div>
          </RedditShareButton>

          <TumblrShareButton
            url="https://devmountain.com/"
            title="Change your career, change your life, learn to code"
            caption="I love coding!"
            tags={["coding", "DevMountain"]}
          >
            <div className="share_container">
              <TumblrIcon size={50} round={true} />
              <TumblrShareCount url="https://devmountain.com/" />
            </div>
          </TumblrShareButton>

          <LivejournalShareButton
            url="https://devmountain.com/"
            title="Change your career, change your life, learn to code"
            description="Change your career, change your life, learn to code"
          >
            <LivejournalIcon size={50} round={true} />
          </LivejournalShareButton>

          <EmailShareButton
            url="https://devmountain.com/"
            subject="Change your career, change your life, learn to code"
            body="Change your career, change your life, learn to code"
          >
            <EmailIcon size={50} round={true} />
          </EmailShareButton>
        </div>
      </div>
    );
  }
}

export default App;
