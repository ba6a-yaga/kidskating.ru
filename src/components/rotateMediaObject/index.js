import React from 'react';
import './index.scss';
import IconArrow from '../iconArrow'
import Button from '../button'
import Pagination from '../pagination'

class RotateMediaObject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0,
            counterImage: 1,
            userAgent: window.navigator.userAgent,
            touchStartX: 0,
            touchEndX: 0,
        }; 
    }

    componentDidMount() {
        // let banner = document.querySelectorAll(`.${this.props.className} .by-wrapper-media-card`)
        // banner.forEach((el)=>{
        //         el.addEventListener('touchstart', e => this.setState({touchStartX: e.changedTouches[0].screenX}))
        //         el.addEventListener('touchend', e => {
        //         this.setState({touchEndX: e.changedTouches[0].screenX })
        //         this.detectingMove()
        //     })
        // })

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
        let media = document.querySelectorAll(`.${this.props.className} .by-wrapper-media-card`)

        if (found !== null && found.length > 0 && found[0] !== 'Safari' && media !== null) {
            media[this.state.currentImage].animate([
                {transform: 'translateX(0%)'},
                {transform: 'translateX(100%)'},
            ],{
                fill: 'forwards',
                duration: 500,
                easing: 'ease-in',
                direction: 'normal'
            })

            let prevImage = this.state.currentImage==0?media.length-1:this.state.currentImage-1
            let counterImage = prevImage+1

            this.setState({
                currentImage: prevImage,
                counterImage: counterImage,
            })

            setTimeout(()=>{
                media[prevImage].animate([
                    {transform: 'translateX(-100%)'},
                    {transform: 'translateX(0%)'},
                ],{
                    fill: 'forwards',
                    duration: 500,
                    easing: 'ease-in',
                    direction: 'normal',
                })
            }, 250)
            
        } else if(media.length > 1) {
            media[this.state.currentImage].style.setProperty("animation", ".5s ease-in forwards image-center-left")
            
            let prevImage = this.state.currentImage==0?media.length-1:this.state.currentImage-1
            let counterImage = prevImage+1

            this.setState({
                currentImage: prevImage,
                counterImage: counterImage,
            })

            setTimeout(()=>{
                media[prevImage].style.setProperty("animation", ".5s ease-in forwards image-right-center")
            },250)
        }
    }

    nextImage = (e) => {

        let re = /Safari|Firefox|Chrome/
        let found = this.state.userAgent.match(re)
        let media = document.querySelectorAll(`.${this.props.className} .by-wrapper-media-card`)

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

            let nextImage = this.state.currentImage==media.length-1?0:this.state.currentImage+1
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
    
        } else if(media.length > 1) {
            media[this.state.currentImage].style.setProperty("animation", ".5s ease-in forwards image-center-right")
            
            let nextImage = this.state.currentImage==media.length-1?0:this.state.currentImage+1
            let counterImage = nextImage+1

            this.setState({
                currentImage: nextImage,
                counterImage: counterImage,
            })

            setTimeout(()=>{
                media[nextImage].style.setProperty("animation", ".5s ease-in forwards image-left-center")
            }, 250)
        }
    }

    render() {

        return(
            <aside className="by-wrapper-rotate-media-object">
                {this.props.children}
            </aside>
        )
    }
}

export default RotateMediaObject;