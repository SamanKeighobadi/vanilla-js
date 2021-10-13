class draggable {
  constructor(props) {
    this.setUpList(props);
  }

  setUpList(props) {
    let { list, el, template } = props;

    if (!el) throw Error("the list is not exists");
    if (!list) throw Error("the data is not exists");
    if (!Array.isArray(list))
      throw Error("the list is not an array please enter an array");
    if (!template) throw Error("the templage is not exist");
    if (typeof template !== "function") throw Error("the templage is function");

    list.forEach((item) => (el.innerHTML += template(item)));
  }
}
