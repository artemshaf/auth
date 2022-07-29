import FilterPanel from "../../components/Bussiness/FIlterPanel/FilterPanel";
import { Container } from "../../components/Layout/Container/Container";
import LargeCards from "../../components/Plain/LargeCards/LargeCards";
import MicroCard from "../../components/Plain/MicroCard/MicroCard";
import { dashboardCards, microCard } from "../../mock";
import { IUnitsProps } from "./Units.props";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Units.scss";
import cn from "classnames";
import Icon from "../../components/UI/Icon/Icon";
import { Button } from "../../components/UI";
import { useRef } from "react";
import { Navigation } from "swiper";

const Units = ({ className, ...props }: IUnitsProps) => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <Container className={cn("relative", className)} {...props}>
      <h1>123</h1>
      <h2>Your favorites</h2>
      <div className="xl:max-w-5xl lg:max-w-4xl md:max-w-3xl sm:max-w-2xl">
        <Swiper
          className="w-[100%] pl-10 relative py-5"
          spaceBetween={30}
          slidesPerView={2.8}
          tag="div"
          wrapperTag="ul"
          modules={[Navigation]}
          navigation={{
            nextEl: nextRef.current
              ? nextRef.current
              : ".slider__right-pagination",
            prevEl: prevRef.current
              ? nextRef.current
              : ".slider__left-pagination",
          }}
          onInit={() => {
            setTimeout((swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          <Button
            ref={nextRef}
            appearence="white"
            className="p-2 absolute top-[50%] right-[0] -translate-y-[50%] z-10 slider__right-pagination"
          >
            <Icon className="rotate-[270deg]" icon="arrowDown" />
          </Button>
          <Button
            ref={prevRef}
            appearence="white"
            className="p-2 absolute top-[50%] left-[0] z-10 -translate-y-[50%] slider__left-pagination"
          >
            <Icon className="rotate-[90deg]" icon="arrowDown" />
          </Button>
          {microCard.map((item, ind) => (
            <SwiperSlide tag="li" key={ind}>
              <MicroCard className="" card={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h2>All listings</h2>
      {/* <FilterPanel /> */}
      <LargeCards cards={dashboardCards} />
    </Container>
  );
};

export default Units;
