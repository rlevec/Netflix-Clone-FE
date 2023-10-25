import React from "react";
import { StyledMediaPlayer } from "./styledMediaPlayer";

import { ReactComponent as Close } from "../../../../Assets/svg/close.svg";

export default function MediaPlayer(props) {
  const { contentBeingWatched, setContentBeingWatched } = props;

  return (
    <StyledMediaPlayer>
      <div
        className="close-player-container"
        onClick={() => setContentBeingWatched(null)}
      >
        <Close />
      </div>
      <video controls autoPlay loop>
        <source src={contentBeingWatched} type="video/mp4" />
      </video>
    </StyledMediaPlayer>
  );
}
