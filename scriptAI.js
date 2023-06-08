// Создаем массивы с частями мотивационных сообщений
const beginnings = [
    "Верь в себя и",
    "У тебя есть потенциал быть",
    "Не ограничивай себя. Все возможно, если ты на самом деле",
    "Твои мечты стоят того, чтобы их",
    "Каждый день - новая возможность",
  ];
  
  const middles = [
    "ты сможешь достичь любых высот!",
    "удивительным!",
    "этого хочешь.",
    "преследовать. Не останавливайся!",
    "стать лучше, чем вчера.",
  ];
  
  const endings = [
    "Никогда не сдавайся!",
    "Ты сильнее, чем думаешь!",
    "Мечты сбываются для тех, кто верит в них!",
    "Будь настойчивым и добейся своей цели!",
    "Ты способен на большее, чем представляешь!",
  ];
  
  // Функция для генерации случайного сообщения
  function motivate() {
    // Генерируем случайные индексы для каждой части сообщения
    const randomBeginningIndex = Math.floor(Math.random() * beginnings.length);
    const randomMiddleIndex = Math.floor(Math.random() * middles.length);
    const randomEndingIndex = Math.floor(Math.random() * endings.length);
  
    // Получаем случайные части сообщения из массивов
    const beginning = beginnings[randomBeginningIndex];
    const middle = middles[randomMiddleIndex];
    const ending = endings[randomEndingIndex];
  
    // Составляем и выводим сообщение
    const message = `${beginning} ${middle} ${ending}`;
    console.log(message);
  }
  
  // Вызываем функцию motivate() для вывода случайного мотивационного сообщения
  motivate();
  