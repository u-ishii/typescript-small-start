export { Area, Region, areaToRegion }

/**
 * 長方形の始点（左上）・終点（右下）の座標
 */
type Area = {
    x1: number,
    y1: number,
    x2: number,
    y2: number,
}

/**
 * 長方形の始点（左上）と大きさ
 */
type Region = {
    left: number,
    top: number,
    width: number,
    height: number,
}

const areaToRegion = (area: Area): Region => {
    return {
        left: area.x1,
        top: area.y1,
        width: area.x2 - area.x1,
        height: area.y2 - area.y1,
    }
}

areaToRegion({ x1: 1, y1: 2, x2: 3, y2: 4 }) // OK
// areaToRegion({ x1: 10, y1: 10, x2: 20 }) // Property 'y2' is missing

