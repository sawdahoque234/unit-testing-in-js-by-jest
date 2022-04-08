const functions=require('./functions')
test('The Sum is:',()=>{
    expect(functions.add(3,4)).toBe(7)
})
test('Should be NUll',()=>{
    expect(functions.isNUll()).toBeNull()
})
test('Should be falsy',()=>{
    expect(functions.checkValue(0)).toBeFalsy()
})
test('My FUll Name :',()=>{
    expect(functions.createUser()).toEqual({
        firstName:'sawda',
        lastName:'hoque',
    });
});