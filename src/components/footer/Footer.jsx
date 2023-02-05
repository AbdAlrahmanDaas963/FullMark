import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import LandingBarItem from "../landingBar/LandingBarItem";

import "./footer.css";

const logo = (
  <svg
    width="49"
    height="48"
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.5 45.2174C36.2181 45.2174 45.7174 35.718 45.7174 24C45.7174 12.282 36.2181 2.78261 24.5 2.78261C12.782 2.78261 3.28261 12.282 3.28261 24C3.28261 35.718 12.782 45.2174 24.5 45.2174ZM24.5 43.4244C35.2278 43.4244 43.9244 34.7278 43.9244 24C43.9244 13.2722 35.2278 4.57562 24.5 4.57562C13.7722 4.57562 5.07562 13.2722 5.07562 24C5.07562 34.7278 13.7722 43.4244 24.5 43.4244Z"
      fill="#151D26"
    />
    <path
      d="M28.2544 0.295483C24.5136 -0.297005 20.6857 0.00426011 17.0836 1.17465L17.7085 3.09789C19.8472 2.40346 22.1298 2.02815 24.5 2.02815C36.6347 2.02815 46.4718 11.8653 46.4718 24L48.5 24C48.5 20.2126 47.6036 16.4789 45.8842 13.1042C44.1647 9.7296 41.671 6.80981 38.6068 4.5836C35.5427 2.35739 31.9952 0.887971 28.2544 0.295483Z"
      fill="#151D26"
    />
    <path
      d="M29.6304 45.3696C27.9845 45.7633 26.2666 45.9718 24.5 45.9718C12.3653 45.9718 2.5282 36.1347 2.5282 24C2.5282 23.4198 2.55069 22.8449 2.59484 22.276L0.57399 22.117C0.276827 25.8927 0.877497 29.6852 2.32689 33.1844C3.77628 36.6835 6.03325 39.79 8.91325 42.2497C11.7932 44.7095 15.2145 46.4527 18.8973 47.3369C22.5801 48.221 26.4199 48.221 30.1027 47.3369L29.6304 45.3696Z"
      fill="#151D26"
    />
    <path
      d="M18.916 19.5254V17.7504H20.1641V18.1387H19.3979V18.4438H20.0879V18.8321H19.3979V19.5254H18.916Z"
      fill="#C53030"
    />
    <path
      d="M22.3925 17.7504H22.8744V18.8875C22.8744 19.0227 22.842 19.1397 22.7773 19.2385C22.7132 19.3368 22.6236 19.4128 22.5086 19.4665C22.3937 19.5196 22.2602 19.5462 22.1082 19.5462C21.9551 19.5462 21.8211 19.5196 21.7061 19.4665C21.5911 19.4128 21.5015 19.3368 21.4374 19.2385C21.3738 19.1397 21.342 19.0227 21.342 18.8875V17.7504H21.8239V18.8459C21.8239 18.9008 21.8361 18.9499 21.8603 18.9933C21.8846 19.036 21.9181 19.0695 21.9609 19.0938C22.0042 19.1181 22.0533 19.1302 22.1082 19.1302C22.1637 19.1302 22.2128 19.1181 22.2556 19.0938C22.2983 19.0695 22.3318 19.036 22.3561 18.9933C22.3804 18.9499 22.3925 18.9008 22.3925 18.8459V17.7504Z"
      fill="#C53030"
    />
    <path
      d="M24.1041 19.5254V17.7504H24.586V19.1371H25.3036V19.5254H24.1041Z"
      fill="#C53030"
    />
    <path
      d="M26.4991 19.5254V17.7504H26.981V19.1371H27.6987V19.5254H26.4991Z"
      fill="#C53030"
    />
    <path
      d="M18.822 26.6995H19.4217L19.8343 27.7049H19.8551L20.2676 26.6995H20.8674V28.4746H20.3959V27.4484H20.382L19.9868 28.4607H19.7025L19.3073 27.4415H19.2934V28.4746H18.822V26.6995Z"
      fill="#C53030"
    />
    <path
      d="M22.0816 28.4746H21.5616L22.1475 26.6995H22.8062L23.3921 28.4746H22.8721L22.4838 27.1884H22.4699L22.0816 28.4746ZM22.293 27.7743H22.6607L22.7695 28.1348H22.1842L22.293 27.7743Z"
      fill="#C53030"
    />
    <path
      d="M24.0878 28.4746V26.6995H24.854C24.9857 26.6995 25.101 26.7235 25.1998 26.7715C25.2986 26.8194 25.3755 26.8885 25.4304 26.9786C25.4852 27.0688 25.5127 27.1768 25.5127 27.3028C25.5127 27.4299 25.4844 27.5371 25.4278 27.6243C25.3717 27.7116 25.2928 27.7775 25.1911 27.8219C25.09 27.8664 24.9719 27.8887 24.8367 27.8887H24.5697V27.5143H24.7396C24.7962 27.5143 24.8445 27.5073 24.8843 27.4935C24.9248 27.479 24.9557 27.4562 24.9771 27.425C24.999 27.3938 25.01 27.353 25.01 27.3028C25.01 27.2519 24.999 27.2106 24.9771 27.1788C24.9557 27.1465 24.9248 27.1228 24.8843 27.1078C24.8445 27.0922 24.7962 27.0844 24.7396 27.0844H24.5697V28.4746H24.0878ZM25.079 27.8604L25.5716 28.4746H25.0481L24.7396 27.8887L25.079 27.8604Z"
      fill="#C53030"
    />
    <path
      d="M26.2429 28.4746V26.6995H26.7247V27.4172H26.749L27.2829 26.6995H27.8445L27.2448 27.49L27.8584 28.4746H27.2829L26.8842 27.8089L26.7247 28.017V28.4746H26.2429Z"
      fill="#C53030"
    />
    <path
      d="M18.409 17.6869C17.6426 17.7297 16.9733 17.942 16.4009 18.3236C15.7595 18.75 15.2655 19.3723 14.9188 20.1905C14.5755 21.0087 14.4039 21.9985 14.4039 23.1599C14.4005 24.3247 14.5703 25.3215 14.9136 26.15C15.2603 26.9786 15.7543 27.6113 16.3957 28.0481C16.9683 28.4361 17.6394 28.6531 18.409 28.6993V26.8161C18.1247 26.7653 17.8696 26.6386 17.6437 26.4361C17.3421 26.1622 17.1081 25.7531 16.9417 25.2088C16.7787 24.661 16.6973 23.978 16.6973 23.1599C16.7007 21.9499 16.8845 21.0416 17.2485 20.4349C17.5514 19.9302 17.9382 19.6354 18.409 19.5505V17.6869Z"
      fill="#151D26"
    />
    <path
      d="M28.1717 28.6488C28.7425 28.5566 29.2517 28.3582 29.6992 28.0533C30.3406 27.6165 30.8329 26.9838 31.1761 26.1552C31.5228 25.3266 31.6962 24.3282 31.6962 23.1599C31.6996 21.9985 31.528 21.0104 31.1813 20.1957C30.8346 19.3775 30.3389 18.7535 29.694 18.3236C29.2472 18.024 28.7397 17.8289 28.1717 17.738V19.7255C28.2696 19.782 28.3627 19.8503 28.4512 19.9305C28.7528 20.2009 28.9851 20.6048 29.148 21.1421C29.3144 21.6795 29.3976 22.3521 29.3976 23.1599C29.4011 24.3871 29.2208 25.3076 28.8568 25.9212C28.6632 26.2475 28.4349 26.4871 28.1717 26.6398V28.6488Z"
      fill="#151D26"
    />
    <path
      d="M13.3887 28.4746V17.8243H11.2722L8.6356 19.4936V21.4906L11.0745 19.9617H11.1369V28.4746H13.3887Z"
      fill="#151D26"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.7775 28.0481C34.4223 28.485 35.192 28.7051 36.0864 28.7086C36.9809 28.7086 37.7488 28.4902 38.3902 28.0533C39.0315 27.6165 39.5238 26.9838 39.8671 26.1552C40.2137 25.3266 40.3871 24.3282 40.3871 23.1599C40.3905 21.9985 40.2189 21.0104 39.8722 20.1957C39.5256 19.3775 39.0298 18.7535 38.385 18.3236C37.7436 17.8937 36.9774 17.6787 36.0864 17.6787C35.1954 17.6787 34.4275 17.8937 33.7827 18.3236C33.1413 18.75 32.6473 19.3723 32.3006 20.1905C31.9574 21.0087 31.7858 21.9985 31.7858 23.1599C31.7823 24.3247 31.9522 25.3215 32.2954 26.15C32.6421 26.9786 33.1361 27.6113 33.7775 28.0481ZM37.5477 25.9212C37.1837 26.5349 36.6966 26.8417 36.0864 26.8417C35.6808 26.8417 35.3272 26.7065 35.0256 26.4361C34.7239 26.1622 34.4899 25.7531 34.3235 25.2088C34.1606 24.661 34.0791 23.978 34.0791 23.1599C34.0826 21.9499 34.2663 21.0416 34.6303 20.4349C34.9944 19.8282 35.4797 19.5248 36.0864 19.5248C36.492 19.5248 36.8439 19.66 37.1421 19.9305C37.4437 20.2009 37.676 20.6048 37.8389 21.1421C38.0053 21.6795 38.0885 22.3521 38.0885 23.1599C38.092 24.3871 37.9117 25.3076 37.5477 25.9212Z"
      fill="#151D26"
    />
    <path
      d="M10.0561 29.1402V30.9153H9.57424V29.1402H10.0561Z"
      fill="#C53030"
    />
    <path
      d="M13.8583 29.1402V30.9153H13.4561L12.8148 29.9827H12.8044V30.9153H12.3225V29.1402H12.7316L13.3625 30.0693H13.3764V29.1402H13.8583Z"
      fill="#C53030"
    />
    <path
      d="M17.0811 29.6949C17.0765 29.6371 17.0548 29.5921 17.0161 29.5597C16.9779 29.5274 16.9199 29.5112 16.8419 29.5112C16.7922 29.5112 16.7514 29.5172 16.7197 29.5294C16.6885 29.5409 16.6653 29.5568 16.6503 29.577C16.6353 29.5973 16.6275 29.6204 16.6269 29.6464C16.6258 29.6678 16.6295 29.6871 16.6382 29.7045C16.6474 29.7212 16.6619 29.7365 16.6815 29.7504C16.7012 29.7637 16.7263 29.7758 16.7569 29.7868C16.7875 29.7978 16.824 29.8076 16.8661 29.8163L17.0117 29.8475C17.11 29.8683 17.194 29.8957 17.264 29.9298C17.3339 29.9639 17.3911 30.004 17.4356 30.0503C17.4801 30.0959 17.5127 30.1473 17.5335 30.2045C17.5549 30.2618 17.5659 30.3242 17.5664 30.3918C17.5659 30.5085 17.5367 30.6073 17.4789 30.6882C17.4211 30.7691 17.3385 30.8306 17.231 30.8728C17.1241 30.915 16.9956 30.9361 16.8453 30.9361C16.6911 30.9361 16.5564 30.9132 16.4414 30.8676C16.327 30.8219 16.2381 30.7517 16.1745 30.657C16.1115 30.5616 16.0797 30.4397 16.0792 30.2912H16.5368C16.5397 30.3455 16.5532 30.3912 16.5775 30.4282C16.6018 30.4651 16.6359 30.4932 16.6798 30.5122C16.7243 30.5313 16.7771 30.5408 16.8384 30.5408C16.8898 30.5408 16.9329 30.5345 16.9675 30.5218C17.0022 30.5091 17.0285 30.4914 17.0464 30.4689C17.0643 30.4464 17.0736 30.4207 17.0741 30.3918C17.0736 30.3646 17.0646 30.3409 17.0473 30.3207C17.0305 30.2999 17.0028 30.2814 16.9641 30.2652C16.9254 30.2485 16.8731 30.2329 16.8072 30.2184L16.6304 30.1803C16.4732 30.1462 16.3493 30.0893 16.2586 30.0095C16.1684 29.9292 16.1236 29.8197 16.1242 29.6811C16.1236 29.5684 16.1537 29.4699 16.2144 29.3855C16.2756 29.3006 16.3603 29.2344 16.4683 29.187C16.5769 29.1396 16.7015 29.116 16.8419 29.116C16.9852 29.116 17.1091 29.1399 17.2137 29.1879C17.3183 29.2358 17.3989 29.3034 17.4555 29.3907C17.5127 29.4774 17.5416 29.5788 17.5422 29.6949H17.0811Z"
      fill="#C53030"
    />
    <path
      d="M19.7392 29.5285V29.1402H21.2819V29.5285H20.748V30.9153H20.2731V29.5285H19.7392Z"
      fill="#C53030"
    />
    <path
      d="M23.9832 29.1402V30.9153H23.5013V29.1402H23.9832Z"
      fill="#C53030"
    />
    <path
      d="M26.201 29.5285V29.1402H27.7437V29.5285H27.2098V30.9153H26.7349V29.5285H26.201Z"
      fill="#C53030"
    />
    <path
      d="M31.0135 29.1402H31.4954V30.2774C31.4954 30.4126 31.4631 30.5296 31.3983 30.6284C31.3342 30.7266 31.2446 30.8026 31.1297 30.8563C31.0147 30.9095 30.8812 30.9361 30.7292 30.9361C30.5761 30.9361 30.4421 30.9095 30.3271 30.8563C30.2121 30.8026 30.1225 30.7266 30.0584 30.6284C29.9948 30.5296 29.9631 30.4126 29.9631 30.2774V29.1402H30.445V30.2358C30.445 30.2906 30.4571 30.3398 30.4814 30.3831C30.5056 30.4259 30.5391 30.4594 30.5819 30.4836C30.6252 30.5079 30.6743 30.52 30.7292 30.52C30.7847 30.52 30.8338 30.5079 30.8766 30.4836C30.9193 30.4594 30.9529 30.4259 30.9771 30.3831C31.0014 30.3398 31.0135 30.2906 31.0135 30.2358V29.1402Z"
      fill="#C53030"
    />
    <path
      d="M33.7139 29.5285V29.1402H35.2566V29.5285H34.7227V30.9153H34.2478V29.5285H33.7139Z"
      fill="#C53030"
    />
    <path
      d="M37.476 30.9153V29.1402H38.7552V29.5285H37.9579V29.8336H38.6894V30.2219H37.9579V30.527H38.7518V30.9153H37.476Z"
      fill="#C53030"
    />
  </svg>
);

const email = (
  <svg
    width="16"
    height="13"
    viewBox="0 0 16 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0.866667C0 0.38802 0.358172 0 0.8 0H15.2C15.6418 0 16 0.38802 16 0.866667V11.7C16 12.418 15.4627 13 14.8 13H1.2C0.537259 13 0 12.418 0 11.7V0.866667ZM1.6 1.73333V2.90344L8 6.85159L14.4 2.90344V1.73333H1.6ZM14.4 4.80026L8.48736 8.51375C8.17709 8.66314 7.82291 8.66314 7.51263 8.51375L1.6 4.80026V11.2667H14.4V4.80026Z"
      fill="#151D26"
    />
  </svg>
);

const phone = (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.52338 17C1.09654 17 0.735931 16.8526 0.441558 16.5579C0.147186 16.2631 0 15.8947 0 15.4525V12.3576C0 11.9007 0.121428 11.5249 0.364286 11.2302C0.607143 10.9354 0.95671 10.7291 1.41299 10.6112L3.5987 10.0806C3.95195 9.9922 4.27944 9.99588 4.58117 10.0917C4.8829 10.1875 5.16623 10.368 5.43117 10.6333L7.63896 12.8661C8.6987 12.2765 9.65909 11.5581 10.5201 10.7107C11.3812 9.86324 12.1797 8.85739 12.9156 7.69311L10.5974 5.59298C10.3619 5.38665 10.2 5.13979 10.1117 4.85241C10.0234 4.56502 10.0234 4.22237 10.1117 3.82445L10.6857 1.39272C10.7887 0.935847 10.9838 0.58951 11.2708 0.353706C11.5578 0.117902 11.9368 0 12.4078 0H15.4766C15.9035 0 16.2641 0.147378 16.5584 0.442133C16.8528 0.736888 17 1.09796 17 1.52536C17 3.38231 16.5437 5.23559 15.6312 7.08518C14.7186 8.93476 13.5264 10.5928 12.0545 12.0592C10.5827 13.5256 8.92684 14.7156 7.08701 15.6294C5.24719 16.5431 3.39264 17 1.52338 17Z"
      fill="#151D26"
    />
  </svg>
);

function Footer() {
  return (
    <div className="footer">
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        columns={{ xs: 1, sm: 6, md: 12 }}
        alignItems={"center"}
        justifyContent={"space-between"}
        justifyItems={"center"}
        height={"100%"}
        className={"footer-grid-container"}
      >
        <Grid>
          <div className="grid-item footer-brand">
            <div>{logo} FULL MARK</div>
            <div>©2023 - DAOD frontline All rights reserved</div>
          </div>
        </Grid>
        <Grid>
          <div className="grid-item footer-contact">
            <div>Contact:</div>
            <div>{email} abdalrahmanDass@gmail.com</div>
            <div>{phone} +963 934 619 443</div>
          </div>
        </Grid>
        <Grid>
          <div className="grid-item footer-pages">
            <div>UX/UI : Nourz</div>
            <div>frontend : da’ass</div>
            <div>backend: shantout</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
