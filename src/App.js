import React from 'react';
import './App.scss';
import BurgerMenu from './components/burgerMenu'
import Title from './components/title'
import Button from './components/button'
import DigitPresent from './components/digitPresent'
import TitleBlock from './components/titleBlock'
import MediaCard from './components/mediaCard'
import Pagination from './components/pagination'
import Banner from './components/banner'
import CarouselMediaObject from './components/carouselMediaObject'
import Logo from './components/logo'
import IconSocial from './components/iconSocial'

import IconArrow from './components/iconArrow'

import kid1 from './assets/kids/1.png'
import kid2 from './assets/kids/2.png'
import kid3 from './assets/kids/3.png'
import kid4 from './assets/kids/4.png'
import kid5 from './assets/kids/5.png'
import kid6 from './assets/kids/6.png'
import kid7 from './assets/kids/7.png'
import kid8 from './assets/kids/8.png'

import Img1 from './assets/image1.png'
import Img2 from './assets/image2.png'
import Img3 from './assets/image3.png'
import Img4 from './assets/image4.png'
import Ava1 from './assets/ava1.png'
import Ava2 from './assets/ava2.png'
import Ava3 from './assets/ava3.png'

import { YMaps, Map } from 'react-yandex-maps';

// rel="noopener noreferrer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <aside className="App-header-banner">
          <Banner media={[Img2,Img3,Img4]}>
            <aside className="App-logo">
              <Logo />
            </aside>
            <aside className="App-burger-menu">
              <BurgerMenu>
                <aside className="App-main-nav">
                  <a href="#"><p>Преподователи</p></a>
                  <a href="#"><p>О нас</p></a>
                  <a href="#"><p>Расписание</p></a>
                  <a href="#"><p>Контакты</p></a>
                </aside>
              </BurgerMenu>
            </aside>
          </Banner>
        </aside>
        {/* <Banner /> */}
        
      </header>
      <main className="App-main">

        <aside className="App-title-block">
          <TitleBlock text="Кто мы такие?" />
        </aside>

        <aside className="App-secondary-banner">
          <CarouselMediaObject media={[
            {avatar: Ava1, note: "Здесь будет описание преподователя, опыт его работы, достижения в фигурном катании и просто качества человека", sign: ["Марья", "Васильевна"]},
            {avatar: Ava2, note: "Здесь будет описание преподователя, опыт его работы, достижения в фигурном катании и просто качества человека", sign: ["Федор", "Петрович"]},
            {avatar: Ava3, note: "Здесь будет описание преподователя, опыт его работы, достижения в фигурном катании и просто качества человека", sign: ["Михаил", "Иванович"]},
            ]}  />
        </aside>

        <div className="App-wrapper-description">
          <div className="App-wrapper-description-digits">
          
            <svg className="App-wrapper-description-round blue" width={280} height={271}>
              <ellipse
                cx={140}
                cy={135.5}
                rx={140}
                ry={135.5}
                fill="#CDD2E9"
                fillRule="evenodd"
              />
            </svg>

            <svg className="App-wrapper-description-round red" width={855} height={829}>
              <ellipse
                cx={427.5}
                cy={414.5}
                rx={427.5}
                ry={414.5}
                fill="#FFB8C9"
                fillRule="evenodd"
              />
            </svg>

            <svg className="App-wrapper-description-round yellow" width={855} height={829}>
              <ellipse
                cx={427.5}
                cy={414.5}
                rx={427.5}
                ry={414.5}
                fill="#FFE4CF"
                fillRule="evenodd"
              />
            </svg>

            <aside className="App-description">
              <p className="App-description-text">
                Большое описание деятельности компании, конкрентные преимущества и не только. Достижения в художественной стилистике.  Большое описание деятельности компании, конкрентные преимущества и не только. Достижения в художественной стилистике. Большое описание деятельности компании, конкрентные преимущества и не только. Достижения в художественной стилистике.  Большое описание деятельности компании, конкрентные преимущества и не только. Достижения в художественной стилистике. Большое описание деятельности компании, конкрентные преимущества и не только. Достижения в художественной стилистике.  Большое описание деятельности компании, конкрентные преимущества и не только. Достижения в художественной стилистике. Большое описание деятельности компании, конкрентные преимущества и не только. Достижения в художественной стилистике.  Большое описание деятельности компании, конкрентные преимущества и не только. Достижения в художественной стилистике.  
              </p>
              <aside className="App-digits clearfix">
                  <DigitPresent digits="99" unit="чел." text="В команде наставников" />
                  <DigitPresent digits="99" unit="чел." text="В команде наставников" />
                  <DigitPresent digits="99" unit="чел." text="В команде наставников" />
                  <DigitPresent digits="99" unit="чел." text="В команде наставников" />
                
              </aside>
            </aside>
          </div>
          <div className="App-footer-description-digits">
            <aside className="App-wrapper-photogallery">

              <aside className="App-img-part n1st">
                <img rel="noopener noreferrer" src={kid1} />
              </aside>
              <aside className="App-img-part n2nd">
                <img rel="noopener noreferrer" src={kid2} />
              </aside>
              <aside className="App-img-part n3th">
                <img rel="noopener noreferrer" src={kid3} />
              </aside>
              <aside className="App-img-part n4th">
                <img rel="noopener noreferrer" src={kid4} />
              </aside>
              <aside className="App-img-part n5th">
                <img rel="noopener noreferrer" src={kid5} />
              </aside>
              <aside className="App-img-part n6th">
                <img rel="noopener noreferrer" src={kid6} />
              </aside>
              <aside className="App-img-part n7th">
                <img rel="noopener noreferrer" src={kid7} />
              </aside>
              <aside className="App-img-part n8th">
                <img rel="noopener noreferrer" src={kid8} />
              </aside>

            </aside>
          </div>
        </div>
            
        <aside className="App-title-block">
          <TitleBlock text="Подберем удобное время занятий?" />
        </aside>

        <aside className="App-media-cards">
          <MediaCard tags={["группа 2","10-16 лет"]} header="Москва, ул.Тверская 7" footer={["+7(988)111-28-28","noreply@mail.ru"]} main={[{title: "Пн-Пт", text: "12:00 - 18:00"},{title: "Сб-Вс", text: "Выходной"}]} />
          <MediaCard tags={["группа 2","10-16 лет"]} header="Москва, ул.Тверская 7" footer={["+7(988)111-28-28","noreply@mail.ru"]} main={[{title: "Пн-Пт", text: "12:00 - 18:00"},{title: "Сб-Вс", text: "Выходной"}]} />
          <MediaCard tags={["группа 2","10-16 лет"]} header="Москва, ул.Тверская 7" footer={["+7(988)111-28-28","noreply@mail.ru"]} main={[{title: "Пн-Пт", text: "12:00 - 18:00"},{title: "Сб-Вс", text: "Выходной"}]} />
          <MediaCard tags={["группа 2","10-16 лет"]} header="Москва, ул.Тверская 7" footer={["+7(988)111-28-28","noreply@mail.ru"]} main={[{title: "Пн-Пт", text: "12:00 - 18:00"},{title: "Сб-Вс", text: "Выходной"}]} />
        </aside>

        <div className="App-wrapper-footer">

          <span className="App-footer-line"></span>

          <aside className="App-footer-wrapper-welcome-block">
            <aside className="App-footer-welcome-text">
              <Title text="приезжайте!" desc="мы будем вам очень рады"/>
            </aside>
            <aside className="App-footer-social-icons">
              <IconSocial social="vk" />
              <IconSocial social="instagram" />
              <IconSocial social="twitter" />
            </aside>
            <aside className="App-footer-feedback">
              <p className="App-footer-feedback-text">Звоните прямо сейчас</p>
              <p className="App-footer-feedback-phone">+7(988)333-23-23</p>
            </aside>
          </aside>

          <aside className="App-yandex-map">
          <YMaps>
            <div>
              {/* My awesome application with maps! */}
              <Map width={540} height={340} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
            </div>
          </YMaps>
          </aside>

          <aside className="App-footer-nav">
            <a href="#"><p>Преподователи</p></a>
            <a href="#"><p>О нас</p></a>
            <a href="#"><p>Расписание</p></a>
            <a href="#"><p>Контакты</p></a>
          </aside>

          <aside className="App-footer-copyright">
            <p>© 2019 Все права защищены.</p>
          </aside>
        </div>
      </main>

    </div>
  );
}

export default App;
