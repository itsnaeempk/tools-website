import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="p-10 max-w-[1440px] mx-auto">
      <div className="bg-muted text-center flex items-center justify-center py-32 rounded-3xl flex-col gap-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="243"
          height="115"
          viewBox="0 0 243 115"
          fill="none"
          data-aos="fade-up"
        >
          <mask
            id="mask0_3_35"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="243"
            height="115"
          >
            <path
              d="M0.665161 0.875977H242.311V114.948H0.665161V0.875977Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_3_35)">
            <path
              d="M240.859 23.0746C237.832 12.1771 225.19 4.29366 205.257 0.875986C205.01 0.823907 204.769 0.999673 204.73 1.25356C204.691 1.50093 204.853 1.74831 205.107 1.78086C224.676 5.12692 237.064 12.776 239.98 23.3155C247.005 48.6518 199.405 84.1956 133.87 102.527C68.3351 120.866 9.32326 115.176 2.29913 89.8332C-0.480577 79.808 5.22206 67.8819 18.4501 55.6369C20.7806 57.9674 22.1933 61.2223 23.7556 66.4693C26.8673 56.0145 29.3866 53.4821 39.8024 50.3444C29.3997 47.2196 26.8803 44.6808 23.7556 34.213C20.6504 44.6678 18.1246 47.2066 7.70882 50.3444C12.4154 51.7505 15.5011 53.0655 17.7731 55.0119C4.3237 67.4978 -1.44403 79.7234 1.4203 90.087C5.77539 105.789 29.4648 114.16 62.1963 114.147C83.3273 114.147 108.227 110.665 134.111 103.426C200.121 84.9508 248.014 48.9057 240.859 23.0811V23.0746Z"
              fill="black"
            />
          </g>
        </svg>
        <h1
          className="text-5xl leading-[1.2]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Unlock <span className="text-[#A55BDF]">Innovation</span> & Automation
          with <br />
          Our Curated <span className="text-[#26C7EA]">Tools & Scripts</span>
        </h1>
        <button
          className="px-8 py-3.5 bg-[#252525] text-white rounded-full "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Subscribe
        </button>
      </div>
      <Container />
    </div>
  );
}
