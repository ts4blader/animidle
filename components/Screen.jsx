import React, { useContext } from "react";
import Icon from "./Icon";
import { StoreContext, ACTION } from "../store/Store";

Screen.defaultProps = {
  content: {},
  setItem: () => {},
};

export default function Screen({ content }) {
  const { thumbnail, title, description, duration, episode } = content || "";
  const [state, dispatch] = useContext(StoreContext);
  const style = {
    backgroundImage: `url(${thumbnail})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div className="screen" style={style} data-show={state.showScreen}>
      <div
        className="close-btn"
        onClick={() => dispatch({ type: ACTION.HIDE_SCREEN })}
      >
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
