export default function mentorReducer(state, action) {
  switch (action.type) {
    case 'changed': {
      const { prev, current } = action
      return state.map((item) => {
        if (item.name === prev) {
          return { ...item, name: current };
        }
        return item;
      });
    }
    
    case 'added': {
      const { name, position } = action
      return [...state, { name, position }];
    }
      
    case 'deleted': {
      const { name } = action
      return state.filter((item) => item.name !== name);
    }
      
    default:
      throw new Error(`${action.type}은 잘못된 타입입니다`)
  }
}