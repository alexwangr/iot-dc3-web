import {createStore} from 'vuex'

import token from '@/config/store/modules/token'
import interval from '@/config/store/modules/interval'

export default createStore({
    modules: {
        token,
        interval,
    }
})
