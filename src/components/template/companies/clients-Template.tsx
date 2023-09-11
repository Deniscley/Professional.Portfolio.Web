"use client";
import "./clients-template.css";
import { clients } from "./../../../state/constants/constants";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function ClientsTemplate() {
  return (
    <section className="clients" id="clients">
      <h2 className="heading">
        Empresas em que <span>Atuei</span>
      </h2>

      <div className="clients__subtitle">
        <p>
          Tive a oportunidade de trabalhar com um grupo diversificado de
          empresas. Algumas das empresas notáveis ​com as quais trabalhei
          incluem.
        </p>
      </div>

      <Swiper
        className="container clients__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map(({ id, title, path, site }) => {
          return (
            <SwiperSlide className="clients__client" key={id}>
              <a href={site} target="_blank" rel="noreferrer noopener">
                <img src={path} width={500} height={300} alt="Logo Empresa" />
                <h5 className="clients__client-name">{title}</h5>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
