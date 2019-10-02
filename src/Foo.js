export default class Foo{
  constructor(bar) {
    this.bar = bar
  }
  sayName(){
    console.log(this.bar)
  }
  mount(el){
    const p = el || document.body
    const d = document.createElement('div')
    d.innerHTML = `${this.bar}`
    p.appendChild(d)
  }
}
