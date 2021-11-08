import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useStore, ACTION } from "../store/Store";
import Image from "../components/Image";

export default function Player() {
  const [state, dispatch] = useStore();
  const [warning, setWarning] = useState(true);
  const close = () => {
    setWarning(true);
    dispatch({ type: ACTION.HIDE_PLAYER });
  };

  return state.showPlayer
    ? ReactDOM.createPortal(
        <div className="player">
          <div className="overlay" onClick={close}></div>
          <video id="player" controls>
            <source src="/videos/roll_everyone.mp4" type="video/mp4" />
          </video>
          <div
            className="player__text"
            data-show={warning}
            onClick={() => setWarning(false)}
          >
            <p className="warning">FBI Warning: Sensitive content</p>
            <p>
              Don{"'"}t click or you{"'"}ll ruin your NNN
            </p>
            <Image src="mlem.jpg" alt="mlem mlem" />
          </div>
        </div>,
        document.body
      )
    : null;
}
