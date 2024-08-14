import React from "react";

export default function SimpleProgressiveBlur() {
  return (
    <>
      <style jsx>
        {`
          .card {
            width: 420px;
            height: 280px;
            border-radius: 24px;
            overflow: hidden;
            position: relative;
          }
          img {
            width: 100%;
            height: 100%;
          }
          .blur {
            position: absolute;
            z-index: 2;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 60%;
            -webkit-backdrop-filter: blur(40px);
            backdrop-filter: blur(40px);
            -webkit-mask-image: linear-gradient(
              to bottom,
              transparent 0%,
              black 70%
            );
            mask-image: linear-gradient(to bottom, transparent 0%, black 70%);
          }
        `}
      </style>
      <div className="grid w-full place-content-center rounded-2xl border py-16">
        <div>
          <div className="card relative">
            <img
              src="https://images.unsplash.com/photo-1501908734255-16579c18c25f?q=80&w=3628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="blur" />
            <div className="absolute inset-x-0 bottom-0 pb-5 pl-5 z-10">
              <p className="text-lg font-semibold">Progressive blur</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
