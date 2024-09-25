import React from "react";

const Stars = ({ className }: { className?: string }) => {
  return (
    <svg
      width="1920"
      height="1016"
      viewBox="0 0 1920 1016"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}  min-h-[100vh] bg-cover h-full object-cover absolute inset-0`}
    >
      <g opacity="0.1">
        <path
          d="M1939 75.1785C1913.84 76.1134 1886.96 75.7424 1871.77 76.3063C1794.8 79.1258 1737.84 85.9224 1669.89 100.154C1561.94 122.769 1450.26 126.524 1329.9 126.731C1143.51 127.058 957.017 123.467 770.968 119.148C636.119 116.032 502.41 112.723 372.209 97.1856C319.38 90.8936 311.683 81.0401 273.819 68.0406C222.588 50.4408 134.055 43.5404 70.5685 36.6994C40.1351 33.4346 10.1013 30.1254 -19 26V63.9746C64.2184 67.8329 168.989 62.0157 219.938 89.291C235.066 97.3786 235.999 105.481 258.779 112.085C288.798 120.795 333.916 124.179 369.071 127.918C423.84 133.75 498.399 126.345 541.636 142.966C567.732 152.983 583.082 168.49 610.97 177.349C673.939 197.323 790.877 204.654 867.582 207.845C969.807 212.104 1061.06 203.986 1159.01 193.332C1238.16 184.725 1317.16 178.047 1397.16 170.953C1436.48 167.451 1499.74 164.187 1529.61 152.048C1545.7 145.503 1544.71 136.065 1561.13 130.085C1581.41 122.665 1620.19 121.671 1645.32 119.326C1683.54 115.75 1718.34 112.144 1755.14 107.009C1785.07 102.686 1815.29 100.815 1845.52 101.415C1874.34 102.083 1907.69 105.674 1939 105.763V75.1785Z"
          fill="url(#paint0_linear_1949_4715)"
        />
        <path
          d="M1939 846.271C1925.25 841.018 1913.54 833.633 1909.78 824.444C1920.81 820.833 1928.18 816.024 1939 812.309V773.42C1874.46 778.954 1812.49 778.57 1749.18 792.184C1646.76 814.218 1538.79 796.002 1433.54 808.861C1373.5 816.26 1319.46 825.272 1257.73 825.139C1113.81 824.917 970.569 819.457 827.269 831.798C722.81 840.781 619.565 857.044 516.424 833.929C465.948 822.624 418.729 805.103 369.32 791.74C332.314 781.722 294.924 779.591 256.246 774.633C235.716 772.014 214.46 765.754 193.589 765.607C168.81 765.399 151.314 770.875 124.818 766.894C83.3717 760.664 47.7281 736.587 7.52548 733.391C-1.04497 732.696 -9.92628 732.266 -19 732V774.915C-5.26292 775.745 8.40446 777.48 21.9132 780.109C43.776 784.548 53.6786 794.907 70.5087 800.826C101.194 811.584 162.282 806.553 195.261 809.601C252.797 814.929 309.504 822.032 365.205 834.003C385.217 838.31 439.319 844.673 451.176 858.938C460.057 869.563 450.273 878.768 465.282 890.887C496.811 916.34 565.019 920.38 607.635 926.403C685.02 937.353 810.424 964.33 881.948 934.186C910.768 922.037 915.742 909.548 896.055 891.79C888.313 884.805 877.197 883.266 876.072 872.715C898.586 868.276 916.348 857.103 940.772 854.957C1040.55 846.389 1147.37 884.642 1247.59 866.47C1247.12 864.177 1248.61 860.374 1248.32 857.887C1300.51 848.165 1370.75 845.738 1422.63 857.887C1519.09 880.588 1621.55 903.066 1724.59 889.289C1756.58 885.012 1758.72 872.271 1782.56 863.008C1802.98 855.061 1825.48 856.763 1845.18 862.652C1877.16 872.212 1907.84 884.139 1938.91 895.297L1939 846.271Z"
          fill="url(#paint1_linear_1949_4715)"
        />
        <path
          d="M1939 435.915C1922.72 435.076 1906.32 433.928 1889.78 432.382C1823.96 426.186 1755.65 412.011 1688.85 409.42C1644.19 407.683 1559.67 411.231 1521.9 421.961C1491.4 430.616 1496.48 439.433 1455.45 442.171C1414.12 444.923 1367.66 439.094 1325.92 438.918C1285.42 438.726 1244.92 439.404 1204.44 438.918C1125.34 437.917 1054.45 438.918 976.489 445.335C926.163 449.457 875.969 457.332 825.021 458.171C727.121 459.79 639.879 437.107 546.641 427.393C389.015 410.995 203.917 411.819 44.2043 418.561C21.1576 419.532 0.671772 420.106 -19 421.313V434.796C59.0506 438.329 137.649 440.095 215.966 441.773C338.2 444.393 455.757 453.549 575.919 462.616C659.906 468.96 739.584 484.887 825.776 486.27C938.715 488.051 1042.94 465.781 1155.9 467.253C1213.72 468.062 1263.75 462.837 1320.07 458.774C1390.04 453.74 1457.08 474.171 1525.45 470.447C1582.18 467.37 1569.62 448.176 1603.08 437.74C1631.62 428.835 1708.65 441.273 1735.01 446.866C1778.96 456.184 1747.43 454.226 1757.72 467.576C1768.64 481.81 1809.28 491.967 1838.75 494.852C1869.83 497.898 1912.76 498.134 1939 492.732V435.915Z"
          fill="url(#paint2_linear_1949_4715)"
        />
      </g>
      <circle cx="261" cy="189" r="3" fill="#9767BB" />
      <circle cx="495" cy="304" r="3" fill="#9767BB" />
      <circle cx="363" cy="528" r="3" fill="#9767BB" />
      <circle cx="246" cy="537" r="3" fill="#9767BB" />
      <circle cx="578" cy="674" r="3" fill="#9767BB" />
      <circle cx="898" cy="722" r="3" fill="#9767BB" />
      <circle cx="766" cy="837" r="3" fill="#9767BB" />
      <circle cx="854" cy="298" r="3" fill="#9767BB" />
      <circle cx="766" cy="41" r="3" fill="#9767BB" />
      <circle cx="1114" cy="85" r="3" fill="#9767BB" />
      <circle cx="1291" cy="266" r="3" fill="#9767BB" />
      <circle cx="1143" cy="406" r="3" fill="#9767BB" />
      <circle cx="1021" cy="571" r="3" fill="#9767BB" />
      <circle cx="1169" cy="984" r="3" fill="#9767BB" />
      <circle cx="301" cy="1013" r="3" fill="#9767BB" />
      <circle cx="1657" cy="226" r="3" fill="#9767BB" />
      <circle cx="1538" cy="369" r="3" fill="#9767BB" />
      <circle cx="1834" cy="697" r="3" fill="#9767BB" />
      <circle cx="1698" cy="1006" r="3" fill="#9767BB" />
      <circle cx="1391" cy="680" r="3" fill="#9767BB" />
      <circle
        cx="1738.5"
        cy="825.5"
        r="1.5"
        transform="rotate(180 1738.5 825.5)"
        fill="white"
      />
      <circle
        cx="1504.5"
        cy="710.5"
        r="1.5"
        transform="rotate(180 1504.5 710.5)"
        fill="white"
      />
      <circle
        cx="1636.5"
        cy="486.5"
        r="1.5"
        transform="rotate(180 1636.5 486.5)"
        fill="white"
      />
      <circle
        cx="1753.5"
        cy="477.5"
        r="1.5"
        transform="rotate(180 1753.5 477.5)"
        fill="white"
      />
      <circle
        cx="1421.5"
        cy="340.5"
        r="1.5"
        transform="rotate(180 1421.5 340.5)"
        fill="white"
      />
      <circle
        cx="1101.5"
        cy="292.5"
        r="1.5"
        transform="rotate(180 1101.5 292.5)"
        fill="white"
      />
      <circle
        cx="1233.5"
        cy="177.5"
        r="1.5"
        transform="rotate(180 1233.5 177.5)"
        fill="white"
      />
      <circle
        cx="1145.5"
        cy="716.5"
        r="1.5"
        transform="rotate(180 1145.5 716.5)"
        fill="white"
      />
      <circle
        cx="1233.5"
        cy="973.5"
        r="1.5"
        transform="rotate(180 1233.5 973.5)"
        fill="white"
      />
      <circle
        cx="885.5"
        cy="929.5"
        r="1.5"
        transform="rotate(180 885.5 929.5)"
        fill="white"
      />
      <circle
        cx="708.5"
        cy="748.5"
        r="1.5"
        transform="rotate(180 708.5 748.5)"
        fill="white"
      />
      <circle
        cx="856.5"
        cy="608.5"
        r="1.5"
        transform="rotate(180 856.5 608.5)"
        fill="white"
      />
      <circle
        cx="978.5"
        cy="443.5"
        r="1.5"
        transform="rotate(180 978.5 443.5)"
        fill="white"
      />
      <circle
        cx="830.5"
        cy="30.5"
        r="1.5"
        transform="rotate(180 830.5 30.5)"
        fill="white"
      />
      <circle
        cx="1698.5"
        cy="1.5"
        r="1.5"
        transform="rotate(180 1698.5 1.5)"
        fill="white"
      />
      <circle
        cx="342.5"
        cy="788.5"
        r="1.5"
        transform="rotate(180 342.5 788.5)"
        fill="white"
      />
      <circle
        cx="461.5"
        cy="645.5"
        r="1.5"
        transform="rotate(180 461.5 645.5)"
        fill="white"
      />
      <circle
        cx="165.5"
        cy="317.5"
        r="1.5"
        transform="rotate(180 165.5 317.5)"
        fill="white"
      />
      <circle
        cx="301.5"
        cy="8.5"
        r="1.5"
        transform="rotate(180 301.5 8.5)"
        fill="white"
      />
      <circle
        cx="608.5"
        cy="334.5"
        r="1.5"
        transform="rotate(180 608.5 334.5)"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1949_4715"
          x1="959.993"
          y1="1196.92"
          x2="959.993"
          y2="158.325"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFE6" />
          <stop offset="0.04" stopColor="#FFF2E4" />
          <stop offset="0.19" stopColor="#FFBDDE" />
          <stop offset="0.31" stopColor="#FF9CDA" />
          <stop offset="0.37" stopColor="#FF90D8" />
          <stop offset="0.41" stopColor="#F789D5" />
          <stop offset="0.69" stopColor="#BE5AC3" />
          <stop offset="0.89" stopColor="#9B3DB7" />
          <stop offset="1" stopColor="#8E32B3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1949_4715"
          x1="960"
          y1="1801.67"
          x2="960"
          y2="765.977"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFE6" />
          <stop offset="0.04" stopColor="#FFF2E4" />
          <stop offset="0.19" stopColor="#FFBDDE" />
          <stop offset="0.31" stopColor="#FF9CDA" />
          <stop offset="0.37" stopColor="#FF90D8" />
          <stop offset="0.41" stopColor="#F789D5" />
          <stop offset="0.69" stopColor="#BE5AC3" />
          <stop offset="0.89" stopColor="#9B3DB7" />
          <stop offset="1" stopColor="#8E32B3" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1949_4715"
          x1="960.015"
          y1="1234.81"
          x2="960.015"
          y2="204.629"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFE6" />
          <stop offset="0.04" stopColor="#FFF2E4" />
          <stop offset="0.19" stopColor="#FFBDDE" />
          <stop offset="0.31" stopColor="#FF9CDA" />
          <stop offset="0.37" stopColor="#FF90D8" />
          <stop offset="0.41" stopColor="#F789D5" />
          <stop offset="0.69" stopColor="#BE5AC3" />
          <stop offset="0.89" stopColor="#9B3DB7" />
          <stop offset="1" stopColor="#8E32B3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Stars;
