import { QuestComplexityType, QuestType } from 'consts/enums';
import { IQuest } from 'types/quest-type';
import questSlice from './slice';
import { fetchQuest } from './thunks';

const { reducer } = questSlice;

const mockData: IQuest[] = [
  {
    id: 1,
    title: 'Склеп',
    description: 'Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?',
    previewImg: 'img/preview-sklep.jpg',
    coverImg: 'img/cover-sklep.jpg',
    type: QuestType.Horror,
    level: QuestComplexityType.Hard,
    peopleCount: [
      2,
      5,
    ],
    duration: 120,
  },
  {
    id: 2,
    title: 'Маньяк',
    description: 'В комнате с приглушённым светом несколько человек, незнакомых друг с другом, приходят в себя. Никто не помнит, что произошло прошлым вечером. Руки и ноги связаны, но одному из вас получилось освободиться. На стене висит пугающий таймер и запущен отсчёт 60 минут. Сможете ли вы разобраться в стрессовой ситуации, помочь другим, разобраться что произошло и выбраться из комнаты?',
    previewImg: 'img/preview-maniac.jpg',
    coverImg: 'img/cover-maniac.jpg',
    type: QuestType.Horror,
    level: QuestComplexityType.Hard,
    peopleCount: [
      3,
      6,
    ],
    duration: 90,
  },
  {
    id: 3,
    title: 'Ритуал',
    description: 'Тяжелый воздух угнетает, в ночи вы оказываетесь запертыми в сыром помещении вместе с другими ничего не понимающими жертвами. Сквозь щель в двери вы видите, как некто в капюшоне готовит площадку как будто для проведения мистического обряда. Удастся ли вам выбраться, пока вы не станете жертвой ритуала?',
    previewImg: 'img/preview-ritual.jpg',
    coverImg: 'img/cover-ritual.jpg',
    type: QuestType.Detective,
    level: QuestComplexityType.Medium,
    peopleCount: [
      3,
      5,
    ],
    duration: 120,
  },
];

describe('Quest reducer works correctly with initial actions', () => {
  it('Reducer with given undefined state and unknown action returns initial state', () => {
    expect(reducer(undefined, {
      type: undefined,
    })).toEqual({
      quest: null,
      isQuestLoaded: false,
      errorMessage: null,
    });
  });
  it('Reducer with given modified state and unknown action returns unchanged state state', () => {
    const initialState = {
      quest: mockData[1],
      isQuestLoaded: true,
      errorMessage: null,
    };
    expect(reducer(initialState, {
      type: undefined,
    })).toEqual(initialState);
  });
});

describe('Quest reducer works correctly with given extra actions from extraReducers', () => {
  it('Reducer with provided fetchQuest.pending.type sets isQuestLoaded to false & errorMessage to null', () => {
    const action = { type: fetchQuest.pending.type };
    const initialState = {
      quest: mockData[0],
      isQuestLoaded: true,
      errorMessage: 'some error',
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      quest: null,
      isQuestLoaded: false,
      errorMessage: null,
    });
  });
  it('Reducer with provided fetchQuest.fulfilled.type sets isQuestLoaded to true & quest to mockData', () => {
    const action = { type: fetchQuest.fulfilled.type, payload: mockData[0] };
    const initialState = {
      quest: null,
      isQuestLoaded: false,
      errorMessage: null,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      quest: mockData[0],
      isQuestLoaded: true,
      errorMessage: null,
    });
  });
  it('Reducer with provided fetchQuest.rejected.type sets  errorMessage to some given message from payload', () => {
    const action = { type: fetchQuest.rejected.type, payload: 'some error' };
    const initialState = {
      quest: null,
      isQuestLoaded: false,
      errorMessage: null,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      quest: null,
      isQuestLoaded: false,
      errorMessage: 'some error',
    });
  });
});
