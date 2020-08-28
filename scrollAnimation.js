function startAnimation({
  elements,
  triggerClass,
  triggerHeight = 100,
  infinity = false,
  trough = {
    number: 0,
    withFirst: false
  }
}) {

  function animationTrigger(element) {
    if ((window.pageYOffset + window.innerHeight - triggerHeight > element.getBoundingClientRect().top + window.pageYOffset) && (element.getBoundingClientRect().top + window.pageYOffset > window.pageYOffset - element.offsetHeight + triggerHeight)) {
      element.classList.add(triggerClass);
      element.style.visibility = "visible";
    } else if (infinity) {
      element.classList.remove(triggerClass);
      element.style.visibility = "hidden";
    }
  }

  function trigger(element) {
    animationTrigger(element);
    window.addEventListener("scroll", () => {
      animationTrigger(element);
    });
  }

  if (elements.length > 1) {
    elements.forEach((element) => {
      element.style.visibility = "hidden";
    });
    if (trough) {
      let temp = trough.number;
      if (trough.withFirst) {
        elements.forEach((element, i) => {
          if (trough.withFirst) {
            trigger(element);
            trough.withFirst = false;
          }

          if (trough.withFirst == false) {
            if (i == temp + 1) {
              trigger(element);
              temp += trough.number + 1;
            }
          }
        });
      } else {
        elements.forEach((element, i) => {
          if (i == temp) {
            trigger(element);
            temp += trough.number + 1;
          }
        });
      }
    }
  } else {
    let element;
    elements.length == 1 ? element = elements[0] : element = elements;
    element.style.visibility = "hidden";
    trigger(element);
  }
}

export default scrollAnimation;


// Usage example

// scrollAnimation({
//   elements: section,
//   triggerClass: 'animate-left',
//   triggerHeight: 0,
//   trough: {
//     number: 1,
//     withFirst: true
//   }
// });