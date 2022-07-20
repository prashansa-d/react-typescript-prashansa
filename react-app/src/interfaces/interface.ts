
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
    better_call_saul_appearance: any[];
}


export interface RootState {
    favouriteList: CharacterModal
  }
  
  // TS infers type: (state: RootState) => boolean
