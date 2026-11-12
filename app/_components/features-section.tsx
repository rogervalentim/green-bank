import React from "react";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FEATURES: FeatureItem[] = [
  {
    id: "security",
    title: "Security Guarantee",
    description: "Your data and funds will be securely protected.",
    icon: (
      <svg
        width="23"
        height="25"
        viewBox="0 0 23 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M9.96322 2.16793C10.7958 1.27048 11.212 0.821749 11.5501 0.766222C11.6832 0.744363 11.7457 0.744502 11.8786 0.766951C12.2164 0.823978 12.6323 1.27631 13.4641 2.18099C14.314 3.10528 15.3933 4.0403 16.5125 4.39114C17.4142 4.67381 18.6357 4.66935 19.6194 4.59651C20.3807 4.54014 20.7613 4.51196 21.0255 4.66172C21.1134 4.71153 21.1874 4.76938 21.257 4.84257C21.4663 5.06263 21.5231 5.39237 21.6367 6.05185C22.042 8.40512 22.5302 12.7366 21.3027 15.5539C20.1717 18.1499 17.1028 20.5647 14.7402 22.1272C13.6289 22.8621 13.0733 23.2295 12.1625 23.3511C11.9221 23.3832 11.5027 23.3915 11.2613 23.3689C10.3463 23.2834 9.77574 22.9377 8.63453 22.2462C6.10425 20.713 2.75121 18.2761 1.54303 15.5539C0.298002 12.7487 0.79044 8.42342 1.20184 6.06511C1.3179 5.39979 1.37593 5.06714 1.58905 4.84648C1.65959 4.77344 1.73556 4.71522 1.82442 4.66608C2.09288 4.51763 2.47441 4.55213 3.23748 4.62114C4.37784 4.72428 5.86271 4.75303 6.93204 4.39114C8.03833 4.01674 9.11304 3.08439 9.96322 2.16793Z"
          fill="white"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "investing",
    title: "Investing",
    description: "Your data and funds will be securely protected.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M27.75 16C27.8881 16 28.0003 16.1119 27.9974 16.25C27.9531 18.3762 27.3444 20.4541 26.2317 22.2699C25.0754 24.1569 23.4198 25.6873 21.4479 26.692C19.476 27.6967 17.2647 28.1366 15.0585 27.963C12.8523 27.7893 10.737 27.009 8.94658 25.7082C7.15617 24.4074 5.76036 22.6368 4.91345 20.5922C4.06655 18.5476 3.80154 16.3086 4.14774 14.1227C4.49394 11.9369 5.43786 9.88941 6.87513 8.20658C8.25824 6.58717 10.0464 5.36618 12.0548 4.66701C12.1852 4.62162 12.3264 4.69373 12.3691 4.82504L15.4948 14.4452C15.7961 15.3723 16.66 16 17.6347 16H27.75Z"
          fill="white"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M17.1445 4.59672C17.1018 4.46541 17.1736 4.32394 17.3062 4.28577C18.3363 3.98949 19.4199 3.92234 20.4805 4.09033C21.6235 4.27136 22.7075 4.72035 23.6437 5.40058C24.58 6.08081 25.342 6.97297 25.8674 8.00411C26.3549 8.96092 26.6259 10.0122 26.6624 11.0834C26.6671 11.2214 26.5547 11.3334 26.4167 11.3334L20.2415 11.3334C19.7 11.3334 19.22 10.9847 19.0527 10.4696L17.1445 4.59672Z"
          fill="white"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: "multiple-method",
    title: "Multiple Method",
    description: "Your data and funds will be securely protected.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M9.41667 24.75H3.41667V20.3976C3.41667 18.1478 3.41667 17.0229 3.98962 16.2343C4.17465 15.9796 4.39863 15.7556 4.65331 15.5706C5.44191 14.9976 6.56683 14.9976 8.81667 14.9976H9.41667V14.8833C9.41667 12.391 9.41667 11.1449 9.95257 10.2167C10.3036 9.60859 10.8086 9.10364 11.4167 8.75257C12.3449 8.21667 13.591 8.21667 16.0833 8.21667V3.75C16.0833 2.09315 17.4265 0.75 19.0833 0.75C20.7402 0.75 22.0833 2.09315 22.0833 3.75V24.75H16.0833H9.41667Z"
          fill="white"
        />
        <path
          d="M9.41667 24.75H3.41667M9.41667 24.75H16.0833M9.41667 24.75V14.9976M3.41667 24.75V20.3976C3.41667 18.1478 3.41667 17.0229 3.98962 16.2343C4.17465 15.9796 4.39863 15.7556 4.65331 15.5706C5.44191 14.9976 6.56683 14.9976 8.81667 14.9976H9.41667M3.41667 24.75H0.75M9.41667 14.9976V14.8833C9.41667 12.391 9.41667 11.1449 9.95257 10.2167C10.3036 9.60859 10.8086 9.10364 11.4167 8.75257C12.3449 8.21667 13.591 8.21667 16.0833 8.21667M16.0833 24.75V8.21667M16.0833 24.75H22.0833M16.0833 8.21667V3.75C16.0833 2.09315 17.4265 0.75 19.0833 0.75C20.7402 0.75 22.0833 2.09315 22.0833 3.75V24.75M24.75 24.75H22.0833"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section
      aria-labelledby="features-heading"
      className="max-w-310 mx-auto w-full px-6 mb-24 md:mb-32"
      id="our-process"
    >
      <h2
        id="features-heading"
        className="text-white font-bold text-3xl md:text-[40px] text-center mb-12 md:mb-16"
      >
        What do we offer?
      </h2>

      <div className="grid justify-center items-center grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {FEATURES.map(({ id, title, description, icon }) => (
          <div key={id} className="flex items-start gap-6">
            <div className="bg-[#3D544D] shrink-0 h-16 w-16 rounded-3xl flex justify-center items-center">
              {icon}
            </div>
            <div>
              <h3 className="text-white text-xl lg:text-2xl font-medium mb-2">
                {title}
              </h3>
              <p className="font-normal text-[#ADB2B1] text-base max-w-xs leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
