import { areaToRegion } from './area-to-region'
import { hello } from './hello'

console.log(areaToRegion({ x1: 1, y1: 1, x2: 2, y2: 2 }))

// Property 'y2' is missing
// console.log(areaToRegion({ x1: 1, y1: 1, x2: 2 }))

console.log(hello('TypeScript'))
