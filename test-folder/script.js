// import collect from "../collect.js"

import Collect from '../collect.js'

const c = new Collect({id: 3, name: 'Noama'})


console.log(c.pluck('name').all())