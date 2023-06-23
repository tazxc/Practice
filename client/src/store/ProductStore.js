import {makeAutoObservable} from "mobx"

export default class ProductStore{
    constructor(){
        this._types = [
            {id: 1, name: 'Чай'},
            {id: 2, name: 'Кофе'},
            {id: 3, name: 'Печенье'},
            {id: 4, name: 'Кексы'},
        ]
        this._products = [
            {id: 1, name: 'Латте', price: 1200},
            {id: 2, name: 'Липтон', price: 1200}
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setProducts(products){
        this._products = products
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    get types(){
        return this._types
    }

    get products(){
        return this._products
    }

    get selectedType(){
        return this._selectedType
    }
}