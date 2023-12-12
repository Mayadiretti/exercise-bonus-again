export const CustomFromElement = function ({mode}){
    switch (mode){
        case 'input':
            return(
                <input type="text" />
            )
        case 'select':
            return(
                <select name="" id="">

                </select>
            )
        case 'checkbox':
            return(
                <input type="checkbox" />
            )
        case 'radio':
            return(
                <input type="radio" />
            )    
    }
}