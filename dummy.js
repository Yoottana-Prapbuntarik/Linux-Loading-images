const obj = {
    a: 1,
    b: 2,
    c: {
        d: 10,
        e: 'string'
    }
}

console.log(JSON.stringify(obj, 2, 2))