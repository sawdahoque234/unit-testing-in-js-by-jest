const functions=require('./functions')
test('The Sum is:',()=>{
    expect(functions.add(3,4)).toBe(7)
})