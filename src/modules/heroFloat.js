import { heroText } from "./selector";


window.onload = () => {
  heroText.animate([
    {opacity: 1}
  ], {duration: 1250, fill: 'forwards', easing: 'ease-in'})
}