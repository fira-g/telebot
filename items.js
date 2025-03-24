export const items = [
    {
        name :"Dispensation-1",
        ids : Array.from({length:8}, (_, index) => 257 + index )},
    {
        name :"Dispensation-2",
        ids : Array.from({length:8}, (_, index) => 265 + index )},
    {
        name :"Dispensation-3",
        ids : Array.from({length:7}, (_, index) => 273 + index )},
    {
        name : "Eschatology(ye zemen ftsame)",
        ids :Array.from({length:8}, (_, index) => 215 + index )},
    {
        name : "sostu_wegenoch",
        ids :Array.from({length:5}, (_, index) => 223 + index )},
    {
        name : "F-1",
        ids :Array.from({length:5}, (_, index) => 280 + index )},
    {
        name : "F-2",
        ids :Array.from({length:5}, (_, index) => 285 + index )},
    {
        name : "F-3",
        ids :Array.from({length:5}, (_, index) => 290 + index )},
    {
        name :"YZ-1",
        ids : Array.from({length:10}, (_, index) => 228 + index )},
    {
        name :"YZ-2",
        ids : Array.from({length:10}, (_, index) => 238 + index )},
    {
        name :"YZ-3",
        ids : Array.from({length:9}, (_, index) => 248 + index )},

]

export const findIds = (item)=>{
    const foundItem = items.find((element) => element.name === item)
    const ids = foundItem?.ids
    return ids
}
