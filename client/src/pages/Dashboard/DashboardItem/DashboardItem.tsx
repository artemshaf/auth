import cn from "classnames";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../../../components/Layout/Container/Container";
import Badge from "../../../components/Plain/Badge/Badge";
import MicroCard from "../../../components/Plain/MicroCard/MicroCard";
import { Button } from "../../../components/UI";
import Icon from "../../../components/UI/Icon/Icon";
import { dashboardCards, microCard } from "../../../mock";
import { IDashboardItemProps } from "./DashboardItem.props";
import "./DashboardItem.scss";

const DashboardItem = ({ className, ...props }: IDashboardItemProps) => {
  const { id } = useParams();
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const [card, setCard] = useState(dashboardCards[+id! - 1]);

  return (
    <Container>
      <section className={cn("dasboard-item", className)}>
        <h1 className="dasboard-item__title">{card.title}</h1>
        {card.img && (
          <ul className="dasboard-item__img-list">
            <Swiper
              tag="ul"
              wrapperTag="ul"
              wrapperClass="swiper-wrapper"
              className="dasboard-item__img-list-big"
              spaceBetween={50}
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
              {card.img.map((item, i) => {
                if (i > 4) {
                  return <></>;
                }
                return (
                  <SwiperSlide key={i} tag="li">
                    <img
                      className="dasboard-item__img-list-big-item"
                      src={item}
                      alt={"img"}
                    />
                  </SwiperSlide>
                );
              })}
              <Button
                ref={nextRef}
                appearence="white"
                className="p-2 absolute top-[50%] right-[15px] -translate-y-[50%] z-10 slider__right-pagination"
              >
                <Icon className="rotate-[270deg]" icon="arrowDown" />
              </Button>
              <Button
                ref={prevRef}
                appearence="white"
                className="p-2 absolute top-[50%] left-[15px] z-10 -translate-y-[50%] slider__left-pagination"
              >
                <Icon className="rotate-[90deg]" icon="arrowDown" />
              </Button>
            </Swiper>
            {card.img.map((item, i) => {
              if (i > 3 && i !== 0) {
                return <></>;
              }
              return (
                <li key={i} className="dasboard-item__img-list-item">
                  <img src={item} />
                </li>
              );
            })}
          </ul>
        )}
        <div className="dasboard-item__description-block">
          <section className="dasboard-item__property">
            <div className="dasboard-item__property__info">
              <h2 className="dasboard-item__property__info__title">
                Property overview
              </h2>
              <Badge
                appearence="green-100"
                className="dasboard-item__property__info__badge"
              >
                Verified
              </Badge>
            </div>
            <div className="dasboard-item__property__description">
              {card.description}
            </div>
          </section>
          <section className="dasboard-item__details">
            <h2 className="dasboard-item__details__title">Details</h2>
            {microCard.length > 0 && (
              <ul className="dasboard-item__details__card-list">
                {microCard.map((card) => (
                  <MicroCard
                    card={card}
                    className="dasboard-item__details__card-list-item"
                  />
                ))}
              </ul>
            )}
          </section>
        </div>
      </section>
    </Container>
  );
};

export default DashboardItem;
