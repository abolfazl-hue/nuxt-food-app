export const state = () => ({
    fooddata: []
})

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }

export const mutations = {
    UPDATE_FOOD_DATA: (state, data) => {
        state.fooddata = data
    }
}

export const actions = {
    async getFoodData({ commit, state }) {
        if (state.fooddata.length) return
        try {
            await fetch("https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants", {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": 'Ni9tok2QGz9xOSKsfBp6q87dnjS8zVmo5t45SGsp'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    commit('UPDATE_FOOD_DATA', data)
                })
        } catch (err) {
            console.log(err)
        }
    }
}