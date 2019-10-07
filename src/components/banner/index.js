import React from 'react';
import './index.css';
import Button from '../button'
import IconArrow from '../iconArrow'
import Title from '../title'
import { thisExpression } from '@babel/types';


class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0,
            counterImage: 1,
            userAgent: window.navigator.userAgent,
            isOpacityVisible: false,
            touchStartX: 0,
            touchEndX: 0,
        };
    }

    componentDidMount() {
        let banner = document.querySelector('.by-wrapper-banner')
        banner.addEventListener('touchstart', e => this.setState({touchStartX: e.changedTouches[0].screenX}))
        banner.addEventListener('touchend', e => {
            this.setState({touchEndX: e.changedTouches[0].screenX })
            this.detectingMove()
        })
        // banner.addEventListener('touchmove', e => e.preventDefault())
    }

    detectingMove = () => {
        // move on right
        if (this.state.touchStartX > this.state.touchEndX) {
            this.prevImage()
        }
        // move on left
        if (this.state.touchStartX < this.state.touchEndX) {
            this.nextImage()
            
        }
    }

    prevImage = () => {
        let re = /Safari|Firefox|Chrome/
        let found = this.state.userAgent.match(re)
        let media = document.querySelectorAll('.by-banner-photo')
        
        if (media.length > 1 && !this.state.isOpacityVisible) {
            media.forEach(el =>
                el.style.setProperty("opacity", 100)
            )
            this.setState({
                isOpacityVisible: true
            })
        }

        if (found !== null && found.length > 0 && found[0] !== 'Safari' && media.length > 1) {

            media[this.state.currentImage].animate([
                {transform: 'translateX(0%)'},
                {transform: 'translateX(100%)'},
            ],{
                fill: 'forwards',
                duration: 500,
                easing: 'ease-in',
                direction: 'normal'
            })

            let prevImage = this.state.currentImage==0?this.props.media.length-1:this.state.currentImage-1
            let counterImage = prevImage+1

            this.setState({
                currentImage: prevImage,
                counterImage: counterImage,
            })

            media[prevImage].animate([
                {transform: 'translateX(-100%)'},
                {transform: 'translateX(0%)'},
            ],{
                fill: 'forwards',
                duration: 500,
                easing: 'ease-in',
                direction: 'normal',
            })
        } else if (media.length > 1) {
            media[this.state.currentImage].style.setProperty("animation", ".5s ease-in forwards image-center-left")
            
            let prevImage = this.state.currentImage==0?this.props.media.length-1:this.state.currentImage-1
            let counterImage = prevImage+1

            this.setState({
                currentImage: prevImage,
                counterImage: counterImage,
            })

            media[prevImage].style.setProperty("animation", ".5s ease-in forwards image-right-center")
        }
    }

    nextImage = (e) => {

        let re = /Safari|Firefox|Chrome/
        let found = this.state.userAgent.match(re)
        let media = document.querySelectorAll('.by-banner-photo')
        
        if (media.length > 1 && !this.state.isOpacityVisible) {
            media.forEach(el =>
                el.style.setProperty("opacity", 100)
            )
            this.setState({
                isOpacityVisible: true
            })
        }

        if (found !== null && found.length > 0 && found[0] !== 'Safari' && media.length > 1) {
            media[this.state.currentImage].animate([
                {transform: 'translateX(0%)'},
                {transform: 'translateX(-100%)'},
            ],{
                fill: 'forwards',
                duration: 500,
                easing: 'ease-in',
                direction: 'normal'
            })

            let nextImage = this.state.currentImage==this.props.media.length-1?0:this.state.currentImage+1
            let counterImage = nextImage+1

            this.setState({
                currentImage: nextImage,
                counterImage: counterImage,
            })

            setTimeout(()=>{
                media[nextImage].animate([
                    {transform: 'translateX(100%)'},
                    {transform: 'translateX(0%)'},
                ],{
                    fill: 'forwards',
                    duration: 500,
                    easing: 'ease-in',
                    direction: 'normal',
                })
            }, 250)
    
        } else if (media.length > 1) {
            media[this.state.currentImage].style.setProperty("animation", ".5s ease-in forwards image-center-right")
            
            let nextImage = this.state.currentImage==this.props.media.length-1?0:this.state.currentImage+1
            let counterImage = nextImage+1

            this.setState({
                currentImage: nextImage,
                counterImage: counterImage,
            })

            media[nextImage].style.setProperty("animation", ".5s ease-in forwards image-left-center")
        }
    }

    ShapeForMobile(props) {
        return(
            <svg className="by-banner-shape-mini" width={414} height={639} {...props}>
                <g fill="none" fillRule="evenodd">
                <path
                    d="M11.65 175.719c29.577 106.835 58.034 173.277 85.37 199.328 41.003 39.077 120.536 66.068 178.235 43.662 38.466-14.937 84.714-48.044 138.745-99.321v187.504H0V292.309l11.65-116.59z"
                    fillOpacity={0.2}
                    fill="#FF4D77"
                />
                <path
                    d="M414 87.16c-208.089 5.528-335.187 18.074-381.293 37.639-56.94 24.161 15.048 105.16-9.77 164.38C-32.028 420.327 98.326 492.89 414 506.868v131.907H0V0h414v87.16z"
                    fill="#8299DC"
                />
                </g>
            </svg>
        )
    }
  

    ShapeForTablet(props) {
        return(
            <svg className="by-banner-shape-mid" width={657} height={462} {...props}>
                <g fill="none" fillRule="evenodd">
                <path
                    d="M331.283 0c45.16 78.244 50.692 158.183 16.594 239.818C313.779 321.454 416.651 395.514 656.495 462H76L78.865 0h252.418z"
                    fill="#8299DC"
                />
                <path
                    d="M79.001 0C258.67 111.772 331.455 208.3 297.356 289.583 263.258 370.867 383.14 428.34 657 462H0V0h79.001z"
                    fill="#A289C2"
                />
                </g>
            </svg>
        )
    }

    Shape(props) {
        return (
            <svg className="by-banner-shape" width={650} height={527} {...props}>
                <g fill="none" fillRule="evenodd">
                <path
                    d="M409.589 0c119.202 93.607 159.405 186.695 120.61 279.265S531.338 454.131 650 526.152H0V0h409.589z"
                    fill="#8299DC"
                />
                <path
                    d="M77.709 0c119.202 93.607 159.405 186.695 120.61 279.265s1.138 174.866 119.8 246.887H0V0h77.709z"
                    fillOpacity={0.3}
                    fill="#F06787"
                />
                </g>
            </svg>
        )
    }
      
    render() {
        let media = this.props.media
        return (
            <aside className="by-wrapper-banner clearfix">
                {this.props.children}
                {media.map((img, i) => 
                    i == 0? 
                    <img className="by-banner-photo" src={img} key={i} />
                    :
                    <img className="by-banner-photo invise" src={img} key={i} />
                )}
                <this.ShapeForMobile />
                <this.ShapeForTablet />
                <this.Shape />
                <aside className="by-banner-title">
                    <Title text="Заголовок новости" desc="может быть длинным и при этом с описанием" />
                </aside>
                <aside className="by-banner-control second">
                    <Button text="Назад" iconFloat="left" onClick={this.prevImage}>
                        <IconArrow iconInvert={true} color="#FF4D77" width={22} height={14} />
                    </Button>
                </aside>
                <aside className="by-banner-control first">
                    <Button className="first" text="Далее" iconFloat="right" onClick={this.nextImage} >
                        <IconArrow color="#FFF" width={23} height={15} />
                    </Button>
                </aside>
            </aside>
        )
    }
}

export default Banner;

