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
import RotateMediaObject from './components/rotateMediaObject'

import IconArrow from './components/iconArrow'

import kid1 from './assets/kids/1.jpg'
import kid2 from './assets/kids/2.jpg'
import kid3 from './assets/kids/33.png'
import kid4 from './assets/kids/4.jpg'
import kid5 from './assets/kids/5.jpg'
import kid6 from './assets/kids/66.png'
import kid7 from './assets/kids/77.png'
import kid8 from './assets/kids/1.png'

import banner1 from './assets/banner1+.png'
import banner2 from './assets/banner2+.png'
import banner3 from './assets/banner3+.png'

import anastaciaKirilovna from './assets/anastaciaKirilovna.png'
import dariaAleksandrovna from './assets/dariaAleksandrovna.png'

import { YMaps, Map, Placemark } from 'react-yandex-maps';

// rel="noopener noreferrer

class App extends React.Component {

  state = {
    appWrapperDescription: null,
    appDigits: null,
    appWrapperPhotogallery: null,
    appMediaCards: null,
    appFooterWrapperWelcomeBlock: null,
    appTitleBlock: null,
    appSecondaryBanner: null,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollEventHandler, true)
    this.state.appWrapperDescription = document.querySelector('.App-description-text')
    this.state.appDigits = document.querySelector('.App-digits')
    this.state.appWrapperPhotogallery = document.querySelector('.App-wrapper-photogallery')
    this.state.appMediaCards = document.querySelector('.App-media-cards')
    this.state.appFooterWrapperWelcomeBlock = document.querySelector('.App-footer-wrapper-welcome-block')
    this.state.appTitleBlock = document.getElementsByClassName('App-title-block')
    this.state.appSecondaryBanner = document.querySelectorAll('.App-secondary-banner')
    
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollEventHandler, true)
  }

  isScrolledIntoView(el) {
    let elemTop = el.getBoundingClientRect().top;
    
    let elemBottom = el.getBoundingClientRect().bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
  }

  scrollEventHandler = e => {
    if(this.isScrolledIntoView(this.state.appWrapperDescription)) {
      this.state.appWrapperDescription.style.setProperty("animation", ".75s ease-in-out forwards show-up-block")
    }
    if(this.isScrolledIntoView(this.state.appDigits)) {
      this.state.appDigits.style.setProperty("animation", ".75s ease-in-out forwards show-up-block")
    }
    // if(this.isScrolledIntoView(this.state.appWrapperPhotogallery)) {
    //   if (window.width > 414) {
    //     this.state.appWrapperPhotogallery.style.setProperty("animation", ".75s ease-in-out forwards show-up-block")
    //   }
    // }
    if(this.isScrolledIntoView(this.state.appMediaCards)) {
      this.state.appMediaCards.style.setProperty("animation", ".75s ease-in-out forwards show-up-block")
    }
    if(this.isScrolledIntoView(this.state.appFooterWrapperWelcomeBlock)) {
      this.state.appFooterWrapperWelcomeBlock.style.setProperty("animation", ".75s ease-in-out forwards show-up-block")
    }
    if(this.isScrolledIntoView(this.state.appTitleBlock[0])) {
      this.state.appTitleBlock[0].style.setProperty("animation", ".75s ease-in-out forwards show-up-block")
    }
    if(this.isScrolledIntoView(this.state.appTitleBlock[1])) {
      this.state.appTitleBlock[1].style.setProperty("animation", ".75s ease-in-out forwards show-up-block")
    }
    if(this.isScrolledIntoView(this.state.appTitleBlock[2])) {
      this.state.appTitleBlock[2].style.setProperty("animation", ".75s ease-in-out forwards show-up-block")
    }
    if(this.isScrolledIntoView(this.state.appSecondaryBanner[0])) {
      this.state.appSecondaryBanner[0].style.setProperty("animation", ".75s ease-in-out forwards show-up-block")
    }
    if(this.isScrolledIntoView(this.state.appSecondaryBanner[1])) {
      this.state.appSecondaryBanner[1].style.setProperty("animation", ".75s ease-in-out forwards show-up-block")
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <aside className="App-header-banner">
            <Banner media={[banner3,banner2,banner1]}>
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
  
          <aside className="App-secondary-banner trainers">
            <CarouselMediaObject nameObject="trainers" media={[
              {
                avatar: anastaciaKirilovna, 
                note: [
                  "Кандидат в мастера спорта, тренерский стаж с 2014 года.",
                  "Образование - РГУФКСМиТ (ГЦОЛИФК) с отличием, \n2019 г. В этом же году поступила на заочное отделение магистратуры.",
                  "Призёр всероссийских и международных соревнований в одиночном и синхронном катании.",
                "- Проведение групповых и индивидуальных тренировок\n- Проведение летних сборов \n- Руководство командой по синхронному катанию во время соревнований \n(Кубок России, Первенство России)"], 
                sign: ["Анастасия", "Кирилловна"]},
              {avatar: dariaAleksandrovna, note: ["Кандидат в мастера спорта, тренерский стаж с 2013 года","Образование - РГУФКСМиТ (ГЦОЛИФК) с отличием, \n2019 г.", 
              "Участница международных соревнований, призёр всероссийских соревнований в одиночном катании.",
              "- Проведение индивидуальных и групповых тренировок\n- Проведение летних сборов\n- Постановка соревновательных программ "], sign: ["Дарья", "Александровна"]},
              ]}  />
          </aside>
  
          <div className="App-wrapper-description" >
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
              {/* <svg className="App-wrapper-description-round yellow" width={855} height={829}>
                <ellipse
                  cx={427.5}
                  cy={414.5}
                  rx={427.5}
                  ry={414.5}
                  fill="#FFE4CF"
                  fillRule="evenodd"
                />
              </svg> */}
  
              <aside className="App-description" >
                <p className="App-description-text">
                Главное отличие нашего клуба фигурного катания от других - маленькое количество детей в группах. В большинстве школ в группы начальной подготовки набирают от 20 детей и пытаются их научить кататься. У нас же максимальное количество человек в группе 3-4. Это позволяет наиболее качественно обучить ребёнка выполнению базовых элементов на льду. 
                Наши тренеры имеют большой опыт в работе со спортивными и досуговыми группами и считают, что чтобы прогресс был заметен, необходимо делать акцент на занятиях в мини-группах. 
                Мы в 𝓚𝓲𝓭𝓼_𝓼𝓴𝓪𝓽𝓲𝓷𝓰_𝓬𝓵𝓾𝓫 делаем акцент на качественном обучении детей, их всестороннем развитии и хорошем настроении после тренировок в целом!  
                </p>
              
                <aside className="App-digits">
                    <DigitPresent digits="5" unit="чел." text="В команде тренеров" />
                    <DigitPresent digits="3" unit="чел." text="На 1 тренера в группе" />
                    <DigitPresent digits="50" unit="" text="Довольных клиентов" />
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
          {/* <div className="margin-for-mobile"></div> */}
          <aside className="App-title-block">
            <TitleBlock text="То, что важно знать!" />
          </aside>

          <aside className="App-secondary-banner notes">
            <CarouselMediaObject nameObject="notes" media={[
              {
                avatar: null, 
                note: ["Одежда для фигуриста обязательно должна быть удобной, не стеснять движений. Так как в большинстве случаев на ледовых аренах довольно холодно, одним из главных критериев по подбору одежды является ее возможность сохранять тепло. Необходимо надевать тёплые перчатки, спина обязательно должна быть прикрыта."], 
                sign: ["Экипировка:","Одежда"]},
              {
                avatar: null, 
                note: ["Коньки являются самым важным атрибутом фигуриста. Очень важно точно определить размер. Так как у юных фигуристов очень быстро растёт нога, коньки необходимо покупать на размер больше."], 
                sign: ["Экипировка:","Коньки"]},
              {
                avatar: null, 
                note: ["Чехлы для коньков обеспечивают сохранность лезвий. Они бывают мягкие и жёсткие. Мягкие чехлы предназначены для хранения коньков. Жесткие нужны для того, чтобы по пути от раздевалки до ледовой арены коньки лишний раз не тупились и на них не прилипала различная грязь и пыль."], 
                sign: ["Экипировка:","Чехлы для коньков"]},
            ]}/>
          </aside>
              
          <aside className="App-title-block">
            <TitleBlock text="Подберем удобное время занятий?" />
          </aside>
  
          <aside className="App-media-cards class-media-cards">
            <RotateMediaObject className="class-media-cards">
              <MediaCard k={1} tags={["группа 1"]} header="ул. Яблочкова, 7, ЛД «АПИА АРЕНА»" footer={["+7(916)243-13-21","kidsskatingclub@gmail.com"]} main={[{title: "Пн-Пт", text: "10:00 - 11:00"},{title: "Сб-Вс", text: "Выходной"}]} />
              <MediaCard k={2} tags={["группа 2"]} header="ул. Яблочкова, 7, ЛД «АПИА АРЕНА»" footer={["+7(968)098-72-32","kidsskatingclub@gmail.com"]} main={[{title: "Пн-Пт", text: "11:00 - 12:00"},{title: "Сб-Вс", text: "Выходной"}]} />
            </RotateMediaObject>
          </aside>
  
          <div className="App-wrapper-footer">
  
            <span className="App-footer-line"></span>
  
            <aside className="App-footer-wrapper-welcome-block">
              <aside className="App-footer-welcome-text">
                <Title text="приезжайте!" desc="мы будем вам очень рады"/>
              </aside>
              <aside className="App-footer-social-icons">
                <IconSocial social="vk" link="" />
                <IconSocial social="instagram" link="https://instagram.com/kids_skating_club" />
                <IconSocial social="twitter" link="" />
              </aside>
              <aside className="App-footer-feedback">
                <p className="App-footer-feedback-text">Звоните прямо сейчас</p>
                <p className="App-footer-feedback-phone">
                +7 (916) 243-13-21
                </p>
              </aside>
            </aside>
  
            <aside className="App-yandex-map">
            <YMaps>
              <div >
                {/* My awesome application with maps! */}
                <Map height={340} defaultState={{ center: [55.816529, 37.579236], zoom: 16 }}>
                </Map>
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
    )
  }
  
}

export default App;
