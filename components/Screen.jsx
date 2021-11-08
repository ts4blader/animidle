import React from "react";
import Icon from "./Icon";
import { useStore, ACTION } from "../store/Store";

Screen.defaultProps = {
  content: {},
  showScreen: false,
  setShowScreen: () => {},
};

export default function Screen({ content, showScreen, setShowScreen }) {
  const { thumbnail, title, description, duration, episode } = content || "";
  const [state, dispatch] = useStore();

  const style = {
    backgroundImage: `url(${thumbnail})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div className="screen" style={style} data-show={showScreen}>
      <div className="close-btn" onClick={() => setShowScreen(false)}>
        <Icon src="close.png" alt="Close" />
      </div>
      <div className="overlay"></div>
      <div className="screen__text">
        <p className="episode">{`${episode} - ${duration}`}</p>
        <h4 className="title">{title}</h4>
        <p className="description">{description}</p>
        <div
          className="btn"
          onClick={() => dispatch({ type: ACTION.SHOW_PLAYER })}
        >
          Play
        </div>
      </div>
    </div>
  );
}
