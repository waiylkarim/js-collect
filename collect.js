class Constructor {
    constructor(obj) {
        this.collection = obj
    }

    isObject(obj) {
        return typeof obj === 'object'
            && !Array.isArray(obj)
            && obj !== null

    }
    
    pluck(k) {
        let r = []

        for (const [_k, _v] of Object.entries(this.collection)) {
            if (this.isObject(_v)) {
                for (const [_kk, _vv] of Object.entries(_v)) {
                    if (_kk == k) {
                        r.push(_vv)
                    }
                }
            } else {
                if (_k == k) {
                    r.push(_v)
                }
            }
        }

        return new Constructor(r)
    }

    all() {
        return this.collection
    }
}

export default Constructor