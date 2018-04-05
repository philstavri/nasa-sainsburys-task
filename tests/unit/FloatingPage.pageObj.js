export default class FloatingPagePageObj {
  constructor (vm) {
    this.vm = vm
  }

  get content () {
    return this.find('.floating-page__content')
  }

  get title () {
    return this.find('h1')
  }

  find (query) {
    return this.vm.find(query)
  }

  isSize (size) {
    return this.content.classes().includes(`floating-page__content--size-${size}`)
  }
}
