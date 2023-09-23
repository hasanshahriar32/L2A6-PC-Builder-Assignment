import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

const bogliasco = "https://i.ibb.co/KrqS9q7/20-232-482-V02.jpg";
const countyClare = "https://i.ibb.co/4MBNq7V/2020-09-28-16-24-50-Ge-Force-RTX-3080-GAMING-OC-10-G-Graphics-Card-GIGABYTE-Global.png";
const craterRock = "https://i.ibb.co/mFPNhCD/AMD-Ryzen-9-5900-X-review-1212x681.jpg";
const giauPass = "https://i.ibb.co/gFQmpVJ/Nvidia-RTX-3080-5.jpg";

export default function HeroBanner() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>Paradox Technology</Title>
          <Subtitle>Build your dream PC anywhere, anytime.</Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Nvidia-RTX-3080-5"
        background={{
          backgroundImageSrc: giauPass,
        }}
      />

      <Slide
        shouldRenderMask
        label="G.Skill Trident Z"
        background={{
          backgroundImageSrc: bogliasco,
        }}
      />

      <Slide
        shouldRenderMask
        label="Ge-Force-RTX-3080"
        background={{
          backgroundImageSrc: countyClare,
        }}
      />

      <Slide
        shouldRenderMask
        label="AMD-Ryzen-9-5900-X"
        background={{
          backgroundImageSrc: craterRock,
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
