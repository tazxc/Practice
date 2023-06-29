import {makeAutoObservable} from "mobx"

export default class UserStore{
    constructor(){
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._isAuth = user
    }

    get IsAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }
}