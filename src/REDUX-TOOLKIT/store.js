


import counterslice from './Counterslice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        counter: counterslice
    },
})


//createstoere old methods ho gaya h wo deprecate ho chuka hai
//

//configure store use karte
//new methods redux toolkit

//redux toolkit   ===  react redux ka upgraded versions

//redux toolkit simplify karta h redux development


//action alag, reducer alag bnana hota tha
//redux toolkit me reducer action ek hi jgh bnate hai



//flow same hi hota hai


//toolkit me file km bnani padti hai


//action ,reducer alag alag nhi bnane padte hain
//slice file me ==> me action aur reducer bnate hai


//2nd file store ==> me state hota pure application ka