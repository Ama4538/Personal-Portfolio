import { nav, hero } from "./selector";

const options = {
  threshold: 0.30,
};

const navObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add('nav-maincolor');
    } else {
      nav.classList.remove('nav-maincolor');
    }

  })
}, options)

navObserver.observe(hero)