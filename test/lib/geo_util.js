'use strict'

const { expect } = require('code')
const Lab = require('lab')
const GeoUtil = require('../../lib/geo_util')
const { after, before, describe, it } = (exports.lab = Lab.script())

describe('GeoUtil', () => {
  before(() => {})
  after(() => {})

  describe('GeoUtil#getCenter', () => {
    it('returns the center', () => {
      const points = [
        { lat: 68.03753844, lon: -162.89217382 },
        { lat: 68.05426488, lon: -162.90296771 },
        { lat: 68.04542113, lon: -162.85990343 },
        { lat: 68.05604169, lon: -162.82840091 }
      ]

      const center = GeoUtil.getCenter(points)
      // lon: -162.86568431, lat: 68.04679006500001
      expect(center.lat).to.be.about(68.04679006, 0.000001)
      expect(center.lon).to.be.about(-162.865684, 0.000001)
    })
  })
})
