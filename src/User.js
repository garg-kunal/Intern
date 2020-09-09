const { AccordionActions } = require("@material-ui/core")
const { load } = require("react-cookies")

const istate = {
    load: false
}

const User = (state = istate, action) => {
    switch (action.type) {
        case 'Loading':
            return { state: action.payload }

    }
}
export default User;