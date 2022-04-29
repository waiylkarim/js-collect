class collect {
    static isObject(obj) {
        return typeof obj === 'object' 
            && !Array.isArray(obj) 
            && obj !== null
    }

    static pluck(obj, k) {
        let r = []

        for(const [_k, _v] of Object.entries(obj)) {
            if(this.isObject(_v)) {
                for(const [_kk, _vv] of Object.entries(_v)) {
                    if(_kk == k) {
                        r.push(_vv)
                    }
                } 
            }else {
                if(_k == k) {
                    r.push(_v)
                }
            }
        }

        return r
    }
}

export default collect