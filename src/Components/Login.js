import React from "react";
import "../css/Login.css";
import { loginUrl } from "./Spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      ></img>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;

//https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg
