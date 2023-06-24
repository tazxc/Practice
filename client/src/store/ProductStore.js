import {makeAutoObservable} from "mobx"

export default class ProductStore{
    constructor(){
        this._types = [
            {id: 1, name: 'Чай'},
            {id: 2, name: 'Кофе'},
            {id: 3, name: 'Печенье'},
            {id: 4, name: 'Кексы'},
        ]
        this._positions = [
            {id: 1, name: 'Латте', price: 1200, img: 'https://www.manusurf.com/wp-content/uploads/2014/07/placehold.it-500x750b.gif'},
            {id: 2, name: 'Липтон', price: 1200, img: 'https://www.manusurf.com/wp-content/uploads/2014/07/placehold.it-500x750b.gif'},
            {id: 3, name: 'АйсРаф', price: 1200, img: 'https://www.manusurf.com/wp-content/uploads/2014/07/placehold.it-500x750b.gif'},
            {id: 4, name: 'Капучино', price: 1200, img: 'https://www.manusurf.com/wp-content/uploads/2014/07/placehold.it-500x750b.gif'},
        ]
        this._selectedType = {}
        this._selectedPosition = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setPositions(positions){
        this._positions = positions
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedPosition(position) {
        this._selectedPosition = position
    }

    get types(){
        return this._types
    }

    get positions(){
        return this._positions
    }

    get selectedType(){
        return this._selectedType
    }

    get selectedPosition(){
        return this._selectedPosition
    }
}