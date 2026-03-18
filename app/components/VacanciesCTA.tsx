'use client';

import React, { useState } from 'react';
import ButtonPrimary from './ButtonPrimary';
import ContactSubinfo from './ContactSubinfo';
import { vacanciesData } from '../data/vacancies';

const inputClass =
  'w-full px-4 py-3 rounded-sm bg-white text-(--black) placeholder:opacity-50 focus:outline-none transition-colors';

const selectClass = `${inputClass} appearance-none select-chevron`;

const VacanciesCTA = ({ sectionClassName }: { sectionClassName?: string }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [message, setMessage] = useState('');
  const [resume, setResume] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to API (include resume file)
    console.log({ name, email, phone, position, message, resume });
  };

  return (
    <section
      id="vacancy-apply-form"
      className={`section-base-padding min-h-0 lg:min-h-screen bg-(--white) flex flex-col gap-8 lg:gap-16 items-start justify-start ${sectionClassName ?? ''}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full">
        <div className="relative w-full h-full flex flex-col gap-4">
          <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[170px] lg:h-[170px] shrink-0">
            <DoorSVG />
          </div>
          <h3 className="h3">Откликнуться на вакансию</h3>
          <p className="p-medium">
            Заполните форму. Мы рассмотрим вашу заявку и свяжемся с вами в
            ближайшее время.
          </p>
        </div>
        <div className="w-full min-h-0 rounded-sm flex flex-col gap-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-1">
                <span className="text-sm opacity-70">Имя</span>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  required
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm opacity-70">Email</span>
                <input
                  type="email"
                  placeholder="example@yandex.ru"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  required
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm opacity-70">Телефон</span>
                <input
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                  required
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm opacity-70">Вакансия</span>
                <select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className={selectClass}
                  required
                >
                  <option value="">Выберите вакансию</option>
                  {vacanciesData.map((v) => (
                    <option key={v.title} value={v.title}>
                      {v.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm opacity-70">
                  Резюме (форматы: .pdf, .doc, .docx)
                </span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                  className={inputClass}
                  required
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm opacity-70">
                  Сопроводительное письмо
                </span>
                <textarea
                  placeholder="Расскажите о себе и почему вы хотите присоединиться к команде..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputClass} min-h-[120px] resize-y`}
                  rows={4}
                  required
                />
              </label>
            </div>
            <ButtonPrimary isSubmit>Отправить Заявку</ButtonPrimary>
          </form>
        </div>
      </div>
      <ContactSubinfo description="Вы также можете связаться с нами по телефону или по email, чтобы уточнить детали вашего запроса и получить ответы на Ваши вопросы." />
    </section>
  );
};

export default VacanciesCTA;

function DoorSVG() {
  return (
    <svg
      className="w-full h-full"
      width="170"
      height="170"
      viewBox="0 0 465 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="7.5" y="76.5" width="382" height="51" rx="19.5" stroke="black" />
      <path d="M405 433V434H296V433H405Z" fill="var(--black)" />
      <path
        d="M405 433C437.585 433 464 406.585 464 374V60C464 27.4152 437.585 1 405 1H296C263.415 1 237 27.4152 237 60V77H236V60C236 27.1218 262.445 0.420035 295.225 0.00488281L296 0H405C438.137 0 465 26.8629 465 60V374L464.995 374.775C464.58 407.555 437.878 434 405 434V433Z"
        fill="var(--black)"
      />
      <path
        d="M236 86H237V374C237 406.585 263.415 433 296 433V434L295.225 433.995C262.445 433.58 236 406.878 236 374V86Z"
        fill="var(--black)"
      />
      <path
        d="M389 241.478C389.208 232.306 385.9 223.746 380.358 216.949L380.357 216.947C373.058 207.953 361.857 202 349.5 202C327.685 202 310 219.685 310 241.5C310 254.769 316.542 266.51 326.581 273.674L327 273.974V329C327 336.168 330.995 342.198 336.896 345.448L337.474 345.755L337.497 345.767C340.114 347.187 343.023 348 346 348H353.062L353.124 348.008C355.69 348.329 358.854 347.385 361.912 345.437L361.938 345.422C367.822 341.921 372 335.406 372 329V273.996L372.404 273.696C372.536 273.599 372.667 273.501 372.797 273.401L372.812 273.39C382.628 266.201 389 254.595 389 241.5V241.478ZM390 241.5C390 254.927 383.465 266.828 373.403 274.196C373.269 274.298 373.135 274.4 373 274.5V329C373 335.816 368.584 342.632 362.449 346.281C359.279 348.301 355.88 349.36 353 349H346C342.839 349 339.768 348.138 337.02 346.645C330.497 343.322 326 336.808 326 329V274.488C315.709 267.144 309 255.106 309 241.5C309 219.132 327.132 201 349.5 201C362.182 201 373.661 207.108 381.134 216.317C386.811 223.28 390.214 232.069 390 241.5Z"
        fill="var(--black)"
      />
      <path d="M368 239L368 240L332 240L332 239L368 239Z" fill="var(--black)" />
      <rect y="86" width="383" height="52" rx="20" fill="var(--black)" />
    </svg>
  );
}
