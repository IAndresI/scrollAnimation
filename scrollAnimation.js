function scrollAnimation({
  elements,
  triggerClass,
  triggerHeight,
  infinity = false,
  trough = {
    number: 0,
    withFirst: false
  }
}) {
  function calculated(element) {
    if ((pageYOffset + window.innerHeight - triggerHeight > element.getBoundingClientRect().y + pageYOffset) && (element.getBoundingClientRect().y + pageYOffset > pageYOffset - element.offsetHeight + triggerHeight)) {
      element.classList.add(triggerClass);
    } else {
      if (infinity) {
        element.classList.remove(triggerClass);
      }
    }
  }
  if (elements.length > 1) {
    if (trough) {
      let temp = trough.number;
      if (trough.withFirst) {
        elements.forEach((element, i) => {
          if (trough.withFirst) {
            calculated(element);
            trough.withFirst = false;
          }

          if (trough.withFirst == false) {
            if (i == temp + 1) {
              calculated(element);
              temp += trough.number + 1;
            }
          }
        });
      } else {
        elements.forEach((element, i) => {
          if (i == temp) {
            calculated(element);
            temp += trough.number + 1;
          }
        });
      }
    }
  } else {
    let element;
    elements.length == 1 ? element = elements[0] : element = elements;
    calculated(element);
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