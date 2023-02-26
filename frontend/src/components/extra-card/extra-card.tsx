import React, { useEffect } from "react";
import { Title } from "../../global/GlobalStyle";
import { Card } from "./style";
import AOS from "aos";

type Props = {
  title: string;
  paragraph: string;
  buttonTitle?: string;
  btnIcon: any;
  link?: string;
  isEmailCard?: boolean;
};

export default function ExtraCard({
  title,
  paragraph,
  buttonTitle,
  btnIcon,
  link,
  isEmailCard,
}: Props) {
  const openLink = () => {
    window.open(link, "_blank");
  };

  const openGmail = ()=>{
    window.open("https://mail.google.com", "_blank");
  }

  const openOutlook = ()=>{
    window.open("https://outlook.live.com", "_blank");
  }

  useEffect(()=>{
    AOS.init({
        duration:1400
    })
  },[])

  return (
    <Card data-aos="fade-up" >
      <div className="title-div">
        <Title theme={{ color: "white", font_size: "1.5em" }}>{title}</Title>
      </div>
      <div className="div-paragraph">
        <p>{paragraph}</p>
      </div>
      <div className="div-btn">
        {isEmailCard ? (
          <>
            <button onClick={openGmail}>
              <h4>Gmail</h4>
              {btnIcon}
            </button>
            <button onClick={openOutlook}>
              <h4>Outlook</h4>
              {btnIcon}
            </button>
          </>
        ) : (
          <button onClick={openLink}>
            <h4>{title}</h4>
            {btnIcon}
          </button>
        )}
      </div>
    </Card>
  );
}
