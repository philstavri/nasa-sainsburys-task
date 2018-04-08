import { expect } from 'chai'
import { shallow } from '@vue/test-utils'
import ResultItem from '@/components/ResultItem.vue'

describe('ResultItem component', function () {
  beforeEach(function () {
    this.mountResultItem = function (options) {
      let resultItemElement = shallow(ResultItem, options)
      return resultItemElement
    }
  })

  describe('when result is NOT passed via props', function () {
    it('throws error', function () {
      let mountResultItemWithoutResult = () => { this.mountResultItem({}) }

      expect(mountResultItemWithoutResult).to.throw
    })
  })

  describe('when result is passed via props', function () {
    it('does not throw', function () {
      let result = {}
      let mountResultItemWithResult = () => { this.mountResultItem({propsData: { result }}) }

      expect(mountResultItemWithResult).not.to.throw
    })

    describe('when result contains a title', function () {
      beforeEach(function () {
        this.mockTitle = 'some title'
        let resultData = {
          data: [{
            title: this.mockTitle
          }]
        }

        this.resultItem = this.mountResultItem({
          propsData: {
            result: resultData
          }
        })
      })

      it('displays title', function () {
        expect(this.resultItem.find('.result-item__title').text()).to.equal(this.mockTitle)
      })

      it('adds title to image', function () {
        expect(this.resultItem.find('.result-item__preview').attributes().title).to.equal(this.mockTitle)
      })
    })

    describe('getPreviewUrl()', function () {
      beforeEach(function () {
        this.mountAndGetPreviewUrl = function (resultData) {
          resultData.data = [{title: 'foo'}]
          let resultItem = this.mountResultItem({
            propsData: {
              result: resultData
            }
          })
          return resultItem.vm.getPreviewUrl()
        }
      })

      describe('when links is undefined', function () {
        it('should return empty string', function () {
          let previewUrl = this.mountAndGetPreviewUrl({})
          expect(previewUrl).to.equal('')
        })
      })

      describe('when links is defined', function () {
        beforeEach(function () {
          this.links = []
        })

        describe('when first link is undefined', function () {
          it('should return empty string', function () {
            let previewUrl = this.mountAndGetPreviewUrl({ links: this.links })
            expect(previewUrl).to.equal('')
          })
        })

        describe('when first link exists', function () {
          it('should return href', function () {
            let mockUrl = 'mock/url'
            this.links[0] = { href: mockUrl }
            let previewUrl = this.mountAndGetPreviewUrl({ links: this.links })
            expect(previewUrl).to.equal(mockUrl)
          })
        })
      })
    })
  })
})
