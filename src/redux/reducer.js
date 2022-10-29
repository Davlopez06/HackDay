import { GET_INFORMATION } from "./actions";
const initialState = {
    agentes:{},
    indicadores:{}
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      // Acá va tu código
        case GET_INFORMATION:
            const { payload: { data: { onCreateHackathonEvents: { event } } } } = action.payload; // = const event = data.payload.data.onCreateHackathonEvents.event
            const { detail: { events } } = JSON.parse(event) 
            return{
                ...state,
                agentes: events[0],
                indicadores: events[1]
            }
        default: return state
    }
  };
  
  export default rootReducer;