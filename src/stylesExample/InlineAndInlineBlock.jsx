import React from "react";

export default function InlineAndInlineBlock() {
  return (
    <div>
      <div>
        <title>inline</title>
        {/* <strong>strong</strong>
        <strong
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "Highlight",
            border: "1px solid red",
          }}
        >
          strong width/height 200px
        </strong>

        <strong
          style={{
            padding: "100px",
            backgroundColor: "Highlight",
            border: "1px solid red",
          }}
        >
          strong padding 100px
        </strong>

        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "GrayText",
            border: "1px solid blue",
          }}
        >
          div width 200px height 200px
        </div>

        <div
          style={{
            padding: "100px",
            backgroundColor: "GrayText",
            border: "1px solid blue",
          }}
        >
          block padding 100px
        </div>

        <strong
          style={{
            margin: "100px",
            backgroundColor: "Highlight",
            border: "1px solid red",
          }}
        >
          strong margin 100px
        </strong>
        <div
          style={{
            margin: "100px",
            backgroundColor: "GrayText",
            border: "1px solid blue",
          }}
        >
          margin margin 100px
        </div>
        <a>a</a>
        <span>span</span>
      </div>
      <div style={{ display: "inline-block" }}>
        <title>inline-blcok</title> */}
      </div>
      <div style={{ textAlign: "center" }}>inline -> inline-block</div>
      <strong
        style={{
          display: "inline-block",
          width: "200px",
          height: "200px",
          backgroundColor: "Highlight",
          border: "1px solid red",
        }}
      >
        inline-block strong width/height 200px
      </strong>
      <strong
        style={{
          display: "inline-block",
          padding: "200px",
          backgroundColor: "Highlight",
          border: "1px solid red",
        }}
      >
        inline-block strong padding 200px
      </strong>
    </div>
  );
}
