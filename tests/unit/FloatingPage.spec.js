import { expect } from 'chai'
import { shallow } from '@vue/test-utils'
import FloatingPage from '@/components/FloatingPage.vue'
import FloatingPagePageObj from './FloatingPage.pageObj'

describe('FloatingPage.vue', function () {
  beforeEach(function () {
    this.mountFloatingPage = function (options) {
      let floatingPageElement = shallow(FloatingPage, options)
      return new FloatingPagePageObj(floatingPageElement)
    }
  })

  describe('when title is passed via props', function () {
    it('renders title', function () {
      let title = 'new title'
      let floatingPage = this.mountFloatingPage({
        propsData: { title }
      })

      expect(floatingPage.title.text()).to.equal(title)
    })
  })

  describe('when size is passed via props', function () {
    it('adds size class to content', function () {
      let size = 'mock-size'
      let floatingPage = this.mountFloatingPage({
        propsData: { size }
      })

      expect(floatingPage.isSize(size)).to.be.ok
    })
  })
})
