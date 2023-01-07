import ButtonArea from "./ButtonArea";

export default function Initial() {
  return (
    <div className="relative min-h-[100vh] w-[90%] lg:w-[50%] mx-auto py-20 md:py-0 flex justify-center items-center">
      <div>
        <svg
          className="md:scale-[2] lg:scale-[3]"
          width="340"
          height="90"
          viewBox="0 0 340 90"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.0273 70C25.4043 70 26.4004 69.0039 27.0156 67.0117V46.2695C27.0156 43.7207 26.0195 41.4355 24.0273 39.4141C26.0195 37.1582 27.0156 34.8145 27.0156 32.3828V19.7266C27.0156 18.8184 26.8398 17.8223 26.4883 16.7383C24.1445 11.6992 20.8047 9.17969 16.4688 9.17969H7.50391C6.12695 9.17969 5.13086 10.1758 4.51562 12.168V67.0117C4.51562 68.3887 5.51172 69.3848 7.50391 70H8.73438C10.2285 70 11.2246 68.8867 11.7227 66.6602V42.9297H15.4141C18.3438 43.252 19.8086 44.5996 19.8086 46.9727V66.6602C20.3066 68.8867 21.3027 70 22.7969 70H24.0273ZM15.2383 35.7227H11.7227V16.3867H15.9414C18.1973 16.3867 19.4863 17.8516 19.8086 20.7812V31.3281C19.8086 34.2578 18.2852 35.7227 15.2383 35.7227ZM0.912109 0.258789H30.6191V89.2041H0.912109V0.258789ZM52.6797 70C54.0566 70 55.0527 69.0039 55.668 67.0117V11.8164C55.668 10.4395 54.6719 9.44336 52.6797 8.82812H51.2734C49.3984 9.35547 48.4609 10.6445 48.4609 12.6953V35.7227H41.2539V12.168C40.7559 9.94141 39.7598 8.82812 38.2656 8.82812H37.0352C35.6582 8.82812 34.6621 9.82422 34.0469 11.8164V67.0117C34.0469 68.3887 35.043 69.3848 37.0352 70H38.4414C40.3164 69.4727 41.2539 68.1836 41.2539 66.1328V43.1055H48.4609V66.6602C48.959 68.8867 49.9551 70 51.4492 70H52.6797ZM30.4434 0.258789H59.2715V89.2041H30.4434V0.258789Z"
            fill="black"
          />
          <path
            className="first-logo"
            d="M59.0455 89V30.8182H78.7045C83.2689 30.8182 87 31.642 89.8977 33.2898C92.8144 34.9186 94.9735 37.125 96.375 39.9091C97.7765 42.6932 98.4773 45.7992 98.4773 49.2273C98.4773 52.6553 97.7765 55.7708 96.375 58.5739C94.9924 61.3769 92.8523 63.6117 89.9545 65.2784C87.0568 66.9261 83.3447 67.75 78.8182 67.75H64.7273V61.5H78.5909C81.7159 61.5 84.2254 60.9602 86.1193 59.8807C88.0133 58.8011 89.3864 57.3428 90.2386 55.5057C91.1098 53.6496 91.5455 51.5568 91.5455 49.2273C91.5455 46.8977 91.1098 44.8144 90.2386 42.9773C89.3864 41.1402 88.0038 39.7008 86.0909 38.6591C84.178 37.5985 81.6402 37.0682 78.4773 37.0682H66.0909V89H59.0455ZM125.376 89.9091C121.437 89.9091 117.98 88.9716 115.007 87.0966C112.052 85.2216 109.742 82.5985 108.075 79.2273C106.427 75.8561 105.603 71.9167 105.603 67.4091C105.603 62.8636 106.427 58.8958 108.075 55.5057C109.742 52.1155 112.052 49.483 115.007 47.608C117.98 45.733 121.437 44.7955 125.376 44.7955C129.316 44.7955 132.763 45.733 135.717 47.608C138.691 49.483 141.001 52.1155 142.649 55.5057C144.316 58.8958 145.149 62.8636 145.149 67.4091C145.149 71.9167 144.316 75.8561 142.649 79.2273C141.001 82.5985 138.691 85.2216 135.717 87.0966C132.763 88.9716 129.316 89.9091 125.376 89.9091ZM125.376 83.8864C128.369 83.8864 130.831 83.1193 132.763 81.5852C134.694 80.0511 136.124 78.0341 137.052 75.5341C137.98 73.0341 138.444 70.3258 138.444 67.4091C138.444 64.4924 137.98 61.7746 137.052 59.2557C136.124 56.7367 134.694 54.7008 132.763 53.1477C130.831 51.5947 128.369 50.8182 125.376 50.8182C122.384 50.8182 119.922 51.5947 117.99 53.1477C116.058 54.7008 114.628 56.7367 113.7 59.2557C112.772 61.7746 112.308 64.4924 112.308 67.4091C112.308 70.3258 112.772 73.0341 113.7 75.5341C114.628 78.0341 116.058 80.0511 117.99 81.5852C119.922 83.1193 122.384 83.8864 125.376 83.8864ZM185.492 55.1364L179.47 56.8409C179.091 55.8371 178.532 54.8617 177.793 53.9148C177.074 52.9489 176.089 52.1534 174.839 51.5284C173.589 50.9034 171.989 50.5909 170.038 50.5909C167.367 50.5909 165.142 51.2064 163.362 52.4375C161.6 53.6496 160.72 55.1932 160.72 57.0682C160.72 58.7348 161.326 60.0511 162.538 61.017C163.75 61.983 165.644 62.7879 168.22 63.4318L174.697 65.0227C178.598 65.9697 181.506 67.4186 183.418 69.3693C185.331 71.3011 186.288 73.7917 186.288 76.8409C186.288 79.3409 185.568 81.5758 184.129 83.5455C182.708 85.5152 180.72 87.0682 178.163 88.2045C175.606 89.3409 172.632 89.9091 169.242 89.9091C164.792 89.9091 161.108 88.9432 158.191 87.0114C155.275 85.0795 153.428 82.2576 152.651 78.5455L159.015 76.9545C159.621 79.303 160.767 81.0644 162.453 82.2386C164.157 83.4129 166.382 84 169.129 84C172.254 84 174.735 83.3371 176.572 82.0114C178.428 80.6667 179.356 79.0568 179.356 77.1818C179.356 75.6667 178.826 74.3977 177.765 73.375C176.704 72.3333 175.076 71.5568 172.879 71.0455L165.606 69.3409C161.61 68.3939 158.674 66.9261 156.799 64.9375C154.943 62.9299 154.015 60.4205 154.015 57.4091C154.015 54.947 154.706 52.7689 156.089 50.875C157.49 48.9811 159.394 47.4943 161.799 46.4148C164.223 45.3352 166.97 44.7955 170.038 44.7955C174.356 44.7955 177.746 45.7424 180.208 47.6364C182.689 49.5303 184.451 52.0303 185.492 55.1364ZM195.58 89V45.3636H202.285V89H195.58ZM198.989 38.0909C197.682 38.0909 196.555 37.6458 195.609 36.7557C194.68 35.8655 194.216 34.7955 194.216 33.5455C194.216 32.2955 194.68 31.2254 195.609 30.3352C196.555 29.4451 197.682 29 198.989 29C200.296 29 201.413 29.4451 202.341 30.3352C203.288 31.2254 203.762 32.2955 203.762 33.5455C203.762 34.7955 203.288 35.8655 202.341 36.7557C201.413 37.6458 200.296 38.0909 198.989 38.0909ZM232.742 45.3636V51.0455H210.128V45.3636H232.742ZM216.719 34.9091H223.424V76.5C223.424 78.3939 223.698 79.8144 224.247 80.7614C224.816 81.6894 225.535 82.3144 226.407 82.6364C227.297 82.9394 228.234 83.0909 229.219 83.0909C229.958 83.0909 230.564 83.053 231.037 82.9773C231.511 82.8826 231.889 82.8068 232.174 82.75L233.537 88.7727C233.083 88.9432 232.448 89.1136 231.634 89.2841C230.819 89.4735 229.787 89.5682 228.537 89.5682C226.643 89.5682 224.787 89.161 222.969 88.3466C221.17 87.5322 219.674 86.2917 218.48 84.625C217.306 82.9583 216.719 80.8561 216.719 78.3182V34.9091ZM242.027 89V45.3636H248.732V89H242.027ZM245.436 38.0909C244.129 38.0909 243.002 37.6458 242.055 36.7557C241.127 35.8655 240.663 34.7955 240.663 33.5455C240.663 32.2955 241.127 31.2254 242.055 30.3352C243.002 29.4451 244.129 29 245.436 29C246.743 29 247.86 29.4451 248.788 30.3352C249.735 31.2254 250.209 32.2955 250.209 33.5455C250.209 34.7955 249.735 35.8655 248.788 36.7557C247.86 37.6458 246.743 38.0909 245.436 38.0909ZM295.893 45.3636L279.757 89H272.939L256.802 45.3636H264.075L276.12 80.1364H276.575L288.62 45.3636H295.893ZM320.107 89.9091C316.168 89.9091 312.712 88.9716 309.738 87.0966C306.784 85.2216 304.473 82.5985 302.806 79.2273C301.159 75.8561 300.335 71.9167 300.335 67.4091C300.335 62.8636 301.159 58.8958 302.806 55.5057C304.473 52.1155 306.784 49.483 309.738 47.608C312.712 45.733 316.168 44.7955 320.107 44.7955C324.047 44.7955 327.494 45.733 330.448 47.608C333.422 49.483 335.732 52.1155 337.38 55.5057C339.047 58.8958 339.88 62.8636 339.88 67.4091C339.88 71.9167 339.047 75.8561 337.38 79.2273C335.732 82.5985 333.422 85.2216 330.448 87.0966C327.494 88.9716 324.047 89.9091 320.107 89.9091ZM320.107 83.8864C323.1 83.8864 325.562 83.1193 327.494 81.5852C329.426 80.0511 330.855 78.0341 331.784 75.5341C332.712 73.0341 333.176 70.3258 333.176 67.4091C333.176 64.4924 332.712 61.7746 331.784 59.2557C330.855 56.7367 329.426 54.7008 327.494 53.1477C325.562 51.5947 323.1 50.8182 320.107 50.8182C317.115 50.8182 314.653 51.5947 312.721 53.1477C310.789 54.7008 309.359 56.7367 308.431 59.2557C307.503 61.7746 307.039 64.4924 307.039 67.4091C307.039 70.3258 307.503 73.0341 308.431 75.5341C309.359 78.0341 310.789 80.0511 312.721 81.5852C314.653 83.1193 317.115 83.8864 320.107 83.8864Z"
            fill="black"
          />
        </svg>
      </div>
      <div></div>
    </div>
  );
}
