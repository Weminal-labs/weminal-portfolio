'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ParallaxBanner } from 'react-scroll-parallax'

import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { SECTION_IDS } from '@/constants'
import { Parallax } from '@/providers/Parallax'
import { useTheme } from 'next-themes'

const Hero = () => {
  const { theme } = useTheme()
  return (
    <Parallax>
      <div className="h-screen w-screen" id={SECTION_IDS.HERO}>
        <ParallaxBanner
          layers={[
            { image: '/images/cloud.png', speed: -40, translateY: [-10, 20] },
            {
              children: (
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div className="relative flex flex-col gap-4">
                    <p className="font-pp-neue-montreal text-3xl font-medium text-black">
                      WEMINAL
                    </p>
                    <div>
                      <TextGenerateEffect
                        className="font-bebas-neue text-8xl font-thin uppercase text-black"
                        words={'Road to the bangkok'}
                        duration={0.7}
                      />
                    </div>
                    <motion.div
                      animate={{
                        y: [10, 0],
                        x: [-120, 0],
                        opacity: [0, 1],
                        transition: {
                          delay: 1.5,
                          duration: 0.4,
                        },
                      }}
                      className="absolute -bottom-20 right-0 h-40 w-96"
                    >
                      <svg width="auto" height="auto" className='draw' viewBox="0 0 745 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6365 24.2047C11.7283 24.1223 6.82728 24.0126 1.92762 23.882C0.970354 23.8559 0.172898 24.6128 0.14773 25.5718C0.122561 26.5309 0.879312 27.3308 1.83658 27.3569C6.24709 27.4703 10.6585 27.5698 15.0673 27.6553C15.3132 27.8241 15.8073 28.0712 16.6535 28.2155C43.0228 32.5448 71.5266 29.2689 98.494 27.4267C123.775 26.8834 149.069 25.9649 174.369 24.845C171.354 25.1337 168.341 25.4154 165.326 25.6831C164.698 25.7406 163.072 25.8949 162.849 25.9503C161.572 26.2937 161.537 27.3913 161.542 27.67C161.544 27.8094 161.644 29.3473 163.371 29.3945C181.923 29.8852 200.473 28.2317 218.942 26.7331C225.813 26.1745 232.676 25.6015 239.544 25.015C241.932 24.8049 248.146 24.5108 249.003 24.3495C249.925 24.1715 250.283 23.5887 250.42 23.138C265.321 22.2339 280.237 21.4422 295.157 20.7551C298.079 20.7529 300.995 20.7574 303.913 20.762C335.704 20.8415 367.488 21.039 399.277 20.9793C381.566 21.7952 363.811 22.6779 346.127 23.8992C342.505 24.1492 338.889 24.497 335.268 24.7749C333.289 24.9206 328.174 24.992 327.453 25.2246C326.38 25.581 326.211 26.4057 326.183 26.8146C326.166 27.0642 326.245 28.4545 328.049 28.7989C361.503 35.2147 395.638 36.578 429.568 38.3459C438.493 38.8091 447.417 39.307 456.337 39.8325C435.022 40.1964 413.495 39.4191 392.216 38.9012C392.024 38.7219 391.747 38.5512 391.349 38.4355C390.766 38.2591 388.959 38.0327 385.667 37.7886C384.957 37.7365 384.316 38.1203 384.004 38.7131C378.948 38.6143 373.906 38.5373 368.888 38.5036C352.453 38.3912 336.018 38.8636 319.585 38.8279L315.866 38.7863L315.09 38.7788C312.242 38.7299 308.757 38.6545 306.442 38.6048C305.106 38.5685 301.63 38.5562 301.149 38.5674C299.699 38.6145 299.451 39.9561 299.441 40.0181C299.435 40.0526 299.455 42.01 301.439 42.0596C302.767 42.0953 307.778 42.1634 314.804 42.2482C316.569 42.277 318.117 42.2988 319.041 42.3019L319.751 42.3052C342.216 42.5436 378.217 42.7933 388.411 42.286C421.574 43.0307 455.412 44.6119 488.164 41.7452C489.238 41.6465 489.709 41.3006 489.802 41.2229C490.309 40.7749 490.416 40.2665 490.395 39.8266C490.383 39.5474 490.243 38.4177 488.884 38.1572C487.929 37.9712 481.044 37.8396 478.394 37.6781C462.182 36.6888 445.968 35.7203 429.747 34.8767C400.499 33.3507 371.095 32.142 342.107 27.695C343.526 27.5764 344.946 27.4648 346.366 27.3672C364.297 26.1268 382.301 25.232 400.256 24.4107C456.015 21.8586 513.069 25.2783 568.573 20.5519C569.71 20.4572 570.218 20.1137 570.316 20.0364C570.854 19.5832 570.96 19.0539 570.939 18.607C570.926 18.3347 570.775 17.1904 569.39 16.9352C568.247 16.7233 560.016 16.5967 556.847 16.4231C544.193 15.7297 531.53 15.0287 518.863 14.6339C497.955 13.9864 477.002 13.6005 456.053 13.5074C454.265 13.1013 452.412 12.726 450.499 12.3815C464.625 12.1383 478.744 12.0128 492.858 12.0472C550.713 12.1693 608.553 13.2302 666.382 14.7151C690.333 15.3333 714.624 17.2889 738.584 16.8913C739.433 16.8757 741.314 17.051 742.24 17.0333C742.769 17.0252 743.157 16.9315 743.342 16.8598C744.113 16.5468 744.364 15.985 744.448 15.5448C744.518 15.2012 744.652 14.075 743.225 13.4413C712.538 -0.191486 663.791 4.33798 631.865 2.95501C501.501 -2.69034 371.045 0.70141 240.799 7.60795C188.724 10.3665 136.781 13.1681 84.8137 17.5764C66.3718 19.1393 47.9057 20.4016 29.5578 22.8755C27.163 23.2035 22.0999 23.5359 18.8561 23.8865C17.9828 23.9841 17.2227 24.0958 16.6365 24.2047ZM733.432 13.4659C703.148 3.91025 660.507 7.67244 631.716 6.4262C501.463 0.787942 371.118 4.1728 240.983 11.0725C188.945 13.8334 137.039 16.6305 85.1072 21.041C71.8962 22.157 58.6716 23.1258 45.4892 24.4942C63.0939 24.5278 80.7053 24.3323 98.3421 23.9572C102.012 23.7033 105.657 23.4755 109.264 23.3012C153.563 21.141 197.96 19.043 242.357 17.989C257.043 17.2035 271.729 16.397 286.428 15.5984C314.879 13.0709 353.719 9.4916 389.45 8.88201C401.741 8.67513 413.666 8.82087 424.683 9.4867C447.428 8.86564 470.152 8.52172 492.864 8.57386C550.747 8.69077 608.613 9.76033 666.476 11.2474C688.678 11.817 711.168 13.5467 733.432 13.4659ZM455.707 16.98C442.284 16.9269 428.865 16.9994 415.465 17.1983C409.501 17.2924 403.536 17.3935 397.569 17.5083C400.827 17.5066 404.086 17.4981 407.344 17.4825C422.635 17.4317 437.964 17.404 453.255 17.0608C454.015 17.0395 455.034 17.0626 456.175 17.0934L455.728 16.9883L455.707 16.98ZM538.394 18.918C531.851 18.5993 525.305 18.3084 518.757 18.1078C501.763 17.584 484.74 17.2253 467.712 17.0613C468.12 17.3239 468.336 17.5745 468.435 17.7339C468.725 18.184 468.771 18.6253 468.705 19.0249C468.664 19.2729 468.571 19.5665 468.361 19.8455C491.747 19.8291 515.16 19.8629 538.394 18.918ZM432.667 13.5379C430.104 13.3122 427.478 13.1173 424.796 12.9536C411.5 13.3193 398.201 13.7685 384.918 14.2881C395.078 14.0711 405.247 13.8823 415.411 13.7282C421.161 13.6413 426.914 13.5757 432.667 13.5379Z" fill="black" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              ),
              speed: -20,
            },
            {
              image: '/images/city.png',
              speed: -40,
              translateY: [25, -20],
              className: "z-10"
            },
          ]}
          className="size-full"
        >
        </ParallaxBanner>
      </div>
    </Parallax>
  )
}

export default Hero
