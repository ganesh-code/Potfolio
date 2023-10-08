import { useRef, useState } from 'react'; // Import React and useRef
import AudioFile from "../assets/Audio.mp3"; // Import the audio file

const Social = () => {
  const style = {
    border: "none",
    borderRadius: "40px",
    maxWidth: "80px",
  };

  const audioRef = useRef(null); // Create a ref for the audio element
  const [isPlaying, setIsPlaying] = useState(false); // Add state to track audio playback

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the audio if it's currently playing
      } else {
        audioRef.current.play(); // Play the audio if it's paused
      }
      setIsPlaying(!isPlaying); // Toggle the play state
    }
  };

  return (
    <div className="col my-3 bg-light" style={style}>
      <div className="m-3">
        <h6 className="py-3 ">
          <a href="https://github.com/ganesh-code" target="blank">
            <i className="fa-brands fa-github fa-2xl text-black"></i>
          </a>
        </h6>
        <h6 className="py-3">
          <a
            href="https://www.linkedin.com/in/ganesh-muniganti-4454b0267/"
            target="blank"
          >
            <i className="fa-brands fa-linkedin fa-2xl text-black"></i>
          </a>
        </h6>
        <h6 className="py-3">
          <a href="/">
            <i className="fa-brands fa-instagram fa-2xl text-black"></i>
          </a>
        </h6>
        <h6 className="py-3">
          <a href="/">
            <i className="fa-solid fa-toggle-off fa-xl text-black"></i>
          </a>
        </h6>
        <h6 className="py-3">
          <a href="https://ganeshmuniganti27@gmail.com">
            <i className="fa-solid fa-envelope fa-xl text-black"></i>
          </a>
        </h6>
        <h6 className="py-3">
          <i onClick={handlePlay} className="fa-solid fa-music fa-xl text-black"></i>
        </h6>
      </div>
      <audio ref={audioRef} src={AudioFile} /> {/* Add the audio element with the ref and source */}
    </div>
  );
};

export default Social;
