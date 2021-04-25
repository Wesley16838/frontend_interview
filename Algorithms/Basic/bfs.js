const map = {
'武漢': {
'廣州': {},
'西藏': {},
'上海': {}
},
'上海': {
'武漢': {},
'廣州': {}
}
}
function breadthSearch(obj, goal, arr = ['北京']) {
    for(let key in obj) {
        //遍歷一度空間
        if (arr.indexOf(key) < 0) {
        //如果陣列中不存在當前的key，就push
            arr.push(key)
            if (key === goal) {
            //如果key是要查詢的目標節點，直接返回
                return arr
            } else {
            //如果key不是要查詢的目標節點，繼續遞迴
                return breadthSearch(obj[key], goal, arr)
            }
        }
    }
}
const s = breadthSearch(map, '廣州')
console.log(s) //["北京", "武漢", "廣州"]