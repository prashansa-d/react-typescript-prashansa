
export interface CharacterModal {
    char_id: number;
    name: string;
    birthday: string;
    occupation: string[];
    img: string;
    status: string;
    nickname: string;
    appearance: number[];
    portrayed: string;
    category: string;
}


export interface RootState {
    favouriteList: CharacterModal
  }
  
export type CharacterAction = {
    type: string 
    payload: []
    
}

export type DispatchType = (args: CharacterAction) => CharacterAction
  // TS infers type: (state: RootState) => boolean
