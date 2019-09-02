const initialState={
    projects: [
        {id: '1', title: 'bla bla', content: 'bla bla vla'},
        {id: '2', title: 'bla bla', content: 'bla bla vla'},
        {id: '3', title: 'bla bla', content: 'bla bla vla'}
    ]
}

const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
        return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        default: 
            return state;
    }
}
export default projectReducer;