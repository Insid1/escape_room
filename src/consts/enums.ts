enum QuestType {
  All = 'all',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  Adventures = 'adventures',
  SciFi = 'sci-fi',
}

enum QuestComplexityType {
  Hard = 'hard',
  Medium = 'medium',
  Easy = 'easy',
}

enum BookingInputName {
  Name = 'name',
  Phone = 'phone',
  PeopleCount = 'peopleCount',
}

enum ErrorMessage {
  LoadingFailed = 'Возникла непредвиденная ошибка!',
  UploadingSuccess = 'Данные успешно отправлены!',
}

export {
  QuestType, QuestComplexityType, BookingInputName, ErrorMessage,
};
