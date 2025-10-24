import React from "react";


export default function Navbar() {
  return (
    <nav
      style={{
        height: "60px",
        width: "100%",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontFamily: "futura",
        }}
      >
        <h1><i class="fa-solid fa-person-running"></i>LET'S FIT!</h1>
      </nav>
    </nav>
  );
}
