import * as React from 'react'
import { shallow } from 'enzyme'
import { getMostCommittedRepos } from '../api'

describe('api', () => {
    it('should get repos by update', function () {
        expect(getMostCommittedRepos().every(val => val.name !== undefined))
    })
})
