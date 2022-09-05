import { createAction, props } from "@ngrx/store";
import HanziWriter from "hanzi-writer";
import { Character, CharacterProperties, List } from "./app.model";
import { GroupCharacter } from "./app.state";

export const searchCharacter = createAction(`Search Character`, props<{search: string}>());
export const updateCharacter = createAction(`Update Character`, props<{character: string}>());
export const loadCharacterDecomposition = createAction(`Load Character Decomposition`, props<{character?: string}>());
export const loadRelatedWords = createAction(`Load Related Words`, props<{character?: string}>());
export const loadRelatedWordsEnded = createAction(`Load Related Words Ended`, props<{relatedWords: string}>());
export const loadCharacter = createAction(`Load Character`, props<{id: string, text: string, properties: CharacterProperties}>());
export const loadCharacterEnded = createAction(`Load Character Ended`, props<{writer:string, isGroup:boolean}>());
export const loadCharacterDecompositionEnded = createAction(`Load Character Decomposition Ended`, props<{decomposition: string}>());
export const addNewList = createAction(`Add New List`, props<{list: List}>());
export const updateList = createAction(`Update List`, props<{list: List}>());
export const reschuffleList = createAction(`Reschuffle List`, props<{list: List}>());
export const saveReschuffledList = createAction(`Save Reschuffle List`, props<{list: List[]}>());
export const setActiveCharacterList = createAction(`Set Active Character List`, props<{character: Character, listName: string}>());
export const resetGroupWriter = createAction(`Reset Group Writer`);
export const saveGroupDecomposition = createAction(`Save Group Decomposition`, props<{group: GroupCharacter[]}>());
export const saveGroupRelatedWords = createAction(`Save Related Words`, props<{group: GroupCharacter[]}>());
export const loadWordsList = createAction(`Get Words List`);
export const loadWordsListEnded = createAction(`Words List Ended`, props<{lists: List[], listIds: string[]}>());
export const addWordList = createAction(`Add Word List`, props<{list: List}>());
export const updateWordList = createAction(`Update Word List`, props<{list: List}>());




