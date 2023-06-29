import {makeAutoObservable} from "mobx"

export default class ProductStore{
    constructor(){
        this._types = []

        this._positions = [
            {id: 1, name: 'Липтон'},
            {id: 2, name: 'Нэскафе'},
            {id: 3, name: 'Коктейли'},
        ]

        this._products = [
            {id: 1, name: 'Капучино', price: 120, img: 'https://img.freepik.com/premium-photo/paper-cup-mockup-isolated-on-white-background-empty-white-disposable-paper-cup-with-black-plastic-lid-3d-rendering_120871-423.jpg'},
            {id: 2, name: 'Латте', price: 120, img: 'https://img.freepik.com/premium-photo/paper-cup-mockup-isolated-on-white-background-empty-white-disposable-paper-cup-with-black-plastic-lid-3d-rendering_120871-423.jpg'},
            {id: 3, name: 'Раф', price: 120, img: 'https://img.freepik.com/premium-photo/paper-cup-mockup-isolated-on-white-background-empty-white-disposable-paper-cup-with-black-plastic-lid-3d-rendering_120871-423.jpg'},
            {id: 4, name: 'Эспрессо', price: 120, img: 'https://img.freepik.com/premium-photo/paper-cup-mockup-isolated-on-white-background-empty-white-disposable-paper-cup-with-black-plastic-lid-3d-rendering_120871-423.jpg'},
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

    setProducts(products){
        this._products = products
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedPosition(position) {
        this._selectedPosition = position
    }

    setSelectedProduct(product) {
        this._selectedProduct = product
    }

    get types(){
        return this._types
    }

    get positions(){
        return this._positions
    }

    get products(){
        return this._products
    }

    get selectedType(){
        return this._selectedType
    }

    get selectedPosition(){
        return this._selectedPosition
    }

    get selectedProduct(){
        return this._selectedProduct
    }
}