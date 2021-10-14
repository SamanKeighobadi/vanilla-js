let data = [
    {
      id: 1,
      title: "React.js",
      text: "Incididunt esse amet laboris consectetur qui. Eu velit magna ea mollit nulla incididunt. Pariatur ad ipsum ex cillum dolore elit est consequat reprehenderit do anim. ",
    },
    {
      id: 2,
      title: "Vue.js",
      text: "Incididunt esse amet laboris consectetur qui. Eu velit magna ea mollit nulla incididunt. Pariatur ad ipsum ex cillum dolore elit est consequat reprehenderit do anim. ",
    },
    {
      id: 3,
      title: "Node.js",
      text: "Incididunt esse amet laboris consectetur qui. Eu velit magna ea mollit nulla incididunt. Pariatur ad ipsum ex cillum dolore elit est consequat reprehenderit do anim. ",
    },
    {
      id: 4,
      title: "Angular",
      text: "Incididunt esse amet laboris consectetur qui. Eu velit magna ea mollit nulla incididunt. Pariatur ad ipsum ex cillum dolore elit est consequat reprehenderit do anim. ",
    },
    {
      id: 5,
      title: "TailwindCSS",
      text: "Incididunt esse amet laboris consectetur qui. Eu velit magna ea mollit nulla incididunt. Pariatur ad ipsum ex cillum dolore elit est consequat reprehenderit do anim. ",
    },
    {
      id: 6,
      title: "Bootstrap",
      text: "Incididunt esse amet laboris consectetur qui. Eu velit magna ea mollit nulla incididunt. Pariatur ad ipsum ex cillum dolore elit est consequat reprehenderit do anim. ",
    },
    {
      id: 7,
      title: "Express.js",
      text: "Incididunt esse amet laboris consectetur qui. Eu velit magna ea mollit nulla incididunt. Pariatur ad ipsum ex cillum dolore elit est consequat reprehenderit do anim. ",
    },
    {
      id: 8,
      title: "CSS",
      text: "Incididunt esse amet laboris consectetur qui. Eu velit magna ea mollit nulla incididunt. Pariatur ad ipsum ex cillum dolore elit est consequat reprehenderit do anim. ",
    },
    {
      id: 9,
      title: "HTML",
      text: "Incididunt esse amet laboris consectetur qui. Eu velit magna ea mollit nulla incididunt. Pariatur ad ipsum ex cillum dolore elit est consequat reprehenderit do anim. ",
    },
    {
      id: 10,
      title: "Javascript",
      text: "Incididunt esse amet laboris consectetur qui. Eu velit magna ea mollit nulla incididunt. Pariatur ad ipsum ex cillum dolore elit est consequat reprehenderit do anim. ",
    },
  ];
  
  new draggable({
    el: document.querySelector("#list"),
    list: data,
    template: (item) => {
      return `
          <div class="list-item" id=${item.id}>
          <div class="list-item_header">
              <span class="header-id">${item.id}</span>
          </div>
          <div class="list-itme_content">
              <span class="item-title"> ${item.title} </span>
              <p> ${item.text} </p>
          </div>
      </div>`;
    },
    update: (list) =>{
        console.log(list)
    }
  });
  