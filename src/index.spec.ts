import {areaToRegion} from './index'

test('OK', () => {
    expect(areaToRegion({x1: 10, y1: 10, x2: 15, y2: 15}))
        .toStrictEqual({left: 10, top: 10, width: 5, height: 5})
})