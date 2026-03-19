import React from 'react';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Политика конфиденциальности | Монтаж межкомнатных дверей',
  description:
    'Политика конфиденциальности: как мы собираем, используем и защищаем ваши данные, а также описание cookie.',
};

const page = () => {
  return (
    <main className="bg-(--white) pt-16">
      <section className="section-base-padding flex flex-col gap-8 lg:gap-16">
        <div className="flex flex-col gap-4">
          <span className="subtitle text-(--accent)">
            (Последнее обновление: 14.03.2026)
          </span>
          <h1 className="h3">
            Компания «Технический отдел» уделяет особое внимание защите ваших
            данных. В этой политике конфиденциальности описано, какие данные мы
            собираем, как используем и храним их, а также какие меры принимаем
            для их защиты.
          </h1>
        </div>
        <div className="flex flex-col gap-8 lg:gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="h3">Что такое cookie?</h2>
            <p className="p-medium">
              <b>Cookie</b> — это небольшие текстовые файлы, которые сайт
              сохраняет на вашем устройстве при посещении. Они нужны для
              стабильной работы сайта, сохранения ваших настроек и удобства
              использования.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="h3">Какие cookie мы используем?</h2>
            <ul className="list-disc pl-4 sm:pl-6 p-medium flex flex-col gap-2 text-sm sm:text-base">
              <li>
                <b>Технические cookie</b> — обеспечивают базовую работу сайта:
                загрузку страниц, работу форм, кнопок и других элементов
                интерфейса.
              </li>
              <li>
                <b>Аналитические cookie</b> — помогают понять, как посетители
                пользуются сайтом. На основе этих данных мы улучшаем структуру и
                содержание ресурса.
              </li>
              <li>
                <b>Функциональные cookie</b> — запоминают введённые вами данные
                (например, имя, телефон или email в формах), чтобы вам было
                удобнее пользоваться сайтом при следующих визитах.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="h3">Для чего мы используем cookie?</h2>
            <ul className="list-disc pl-4 sm:pl-6 p-medium flex flex-col gap-2 text-sm sm:text-base">
              <li>Обеспечение стабильной и корректной работы сайта</li>
              <li>
                Анализ посещаемости и поведения пользователей для улучшения
                сервиса и контента
              </li>
              <li>
                Повышение удобства использования сайта и форм обратной связи
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="h3">Управление cookie</h2>
            <p className="p-medium">
              В большинстве браузеров cookie разрешены по умолчанию. Вы можете в
              любой момент изменить настройки: ограничить приём cookie,
              запретить их сохранение или удалить уже сохранённые файлы. Учтите,
              что отключение cookie может привести к сбоям в работе части
              функций сайта.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="h3">Согласие на использование cookie</h2>
            <p className="p-medium">
              Использование нашего сайта означает ваше согласие на применение
              cookie в соответствии с настоящей политикой конфиденциальности.
              Если вы не согласны с этими условиями, пожалуйста, покиньте сайт
              или отключите cookie в настройках браузера.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
