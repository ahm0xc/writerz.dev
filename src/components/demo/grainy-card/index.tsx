import React from "react";

export default function GrainyCard() {
  return (
    <>
      <style jsx>
        {`
          .card {
            height: 100%;
            width: 320px;
            border-radius: 12px;
            padding: 24px;
            background: rgb(15 23 42);
            position: relative;
            overflow: hidden;
            display: flex;
          }

          .card-content {
            position: relative;
            z-index: 1;
          }

          .card:before {
            content: "";
            background-color: transparent;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
            background-repeat: repeat;
            background-size: 182px;
            opacity: 0.12;
            top: 0;
            left: 0;
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .icon {
            margin-bottom: 1rem;
            display: inline-flex;
          }

          .icon > svg {
            border-radius: 0.375rem;
            width: 40px;
            height: 40px;
            display: inline-flex;
            background: #2563eb;
          }

          .title {
            font-size: 16px;
            margin-bottom: 0.5rem;
            color: #fff;
          }

          .description {
            font-size: 14px;
            color: rgb(148 163 184);
          }
        `}
      </style>
      <div className="grid py-20 w-full place-content-center rounded-2xl border bg-neutral-100">
        <div className="card">
          <div className="card-content">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              />
            </span>
            <h3 className="title">Hello!</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ex obcaecati natus eligendi delectus, cum deleniti sunt in labore
              nihil quod quibusdam expedita nemo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
