import { projects } from "./selector";

const option = {

};

const projectObserver = new IntersectionObserver(function (entries, projectObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.animate([
      { opacity: 1 }
    ], { duration: 500, fill: 'forwards', easing: 'ease-in' })
    projectObserver.unobserve(entry.target)
  })
}, option)

projects.forEach((project) => {
  projectObserver.observe(project)
})