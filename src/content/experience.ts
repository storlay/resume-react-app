import type { ExperienceItem } from '../types/content';
import type { Locale } from '../i18n/dict';
import { nbsp } from '../utils/typography';

const ru: ExperienceItem[] = [
  {
    company: 'Web Design Sun',
    logo: '/web-design-sun-logo.svg',
    position: 'Software Engineer',
    period: 'Сентябрь 2025 — по настоящее время',
    stack: ['Python', 'Go', 'FastAPI', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'Pytest', 'Claude'],
    achievements: [
      nbsp('Спроектировал и разработал ключевой функционал для командной работы (управление пользователями, ролями и подписками), что позволило продукту выйти в B2B-сегмент и привело к росту выручки.'),
      nbsp('Интегрировал платежный шлюз Stripe, обеспечив приём мультивалютных платежей и автоматизировав процесс подписки.'),
      nbsp('Спроектировал и внедрил интеграцию с Canva API, позволив автоматически проверять студенческие работы на плагиат и использование AI, что сократило среднее время проверки и повысило пропускную способность платформы.'),
      nbsp('Повысил стабильность продукта, сократив количество production-инцидентов на ~25% за счёт внедрения unit-тестов (покрытие выросло с 0 до 80%) и настройки healthcheck-эндпоинтов.'),
    ],
  },
  {
    company: 'Dev Symfony',
    logo: '/dev-symfony-logo.svg',
    position: 'Backend Developer',
    period: 'Август 2024 — Сентябрь 2025',
    stack: ['Python', 'FastAPI', 'Django', 'DRF', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Celery', 'Pandas', 'Docker', 'CI/CD'],
    achievements: [
      nbsp('Разработал бэкенд для интернет-магазина и админки (5000+ SKU, 9000 DAU).'),
      nbsp('Реализовал интеграцию с 4 локальными платёжными системами и сервисами рассрочки, что увеличило конверсию в покупку.'),
      nbsp('−20% время обработки заказа: интеграция с CRM и OTP сервисами, оптимизация API и очередей.'),
      nbsp('Снизил количество багов в production на 30%, внедрив CI/CD пайплайн с обязательными шагами: линтеры (ruff), статический анализ (mypy) и запуск тестов.'),
      nbsp('Сократил время развёртывания новых версий с нескольких часов до 15 минут, настроив CI/CD и изолированное staging-окружение.'),
      nbsp('Ускорил отклик API каталога в 2–3 раза, внедрив многоуровневое кэширование (Redis) и Elasticsearch для полнотекстового поиска.'),
    ],
  },
  {
    company: 'Guider',
    logo: '/guider-pro-logo.jpeg',
    position: 'Python Backend Developer',
    period: 'Март 2024 — Июль 2024',
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Docker'],
    achievements: [
      nbsp('Провёл рефакторинг ключевых модулей API, внедрив сервисный слой и устранив N+1 проблемы с помощью select_related / prefetch_related, что ускорило загрузку данных.'),
      nbsp('Повысил стабильность кодовой базы, увеличив покрытие тестами до 78% и исправив flaky-тесты, что сократило время на поиск ошибок перед релизами.'),
      nbsp('Поддерживал и расширял RESTful API (аутентификация, фильтрация), обеспечивая синхронизацию контрактов с frontend-командой через OpenAPI.'),
    ],
  },
];

const en: ExperienceItem[] = [
  {
    company: 'Web Design Sun',
    logo: '/web-design-sun-logo.svg',
    position: 'Software Engineer',
    period: 'Sep 2025 — Present',
    stack: ['Python', 'Go', 'FastAPI', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'Pytest', 'Claude'],
    achievements: [
      'Designed and shipped core teamwork features (user, role and subscription management), which unlocked the B2B segment and drove revenue growth.',
      'Integrated the Stripe payment gateway, enabling multi-currency payments and automating the subscription flow.',
      'Designed and shipped a Canva API integration that auto-checks student work for plagiarism and AI usage, cutting average review time and increasing platform throughput.',
      'Improved product stability — reduced production incidents by ~25% by introducing unit tests (coverage from 0 to 80%) and setting up healthcheck endpoints.',
    ],
  },
  {
    company: 'Dev Symfony',
    logo: '/dev-symfony-logo.svg',
    position: 'Backend Developer',
    period: 'Aug 2024 — Sep 2025',
    stack: ['Python', 'FastAPI', 'Django', 'DRF', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Celery', 'Pandas', 'Docker', 'CI/CD'],
    achievements: [
      'Built the backend for an e-commerce store and admin panel (5,000+ SKUs, 9,000 DAU).',
      'Integrated 4 local payment systems and installment providers, lifting purchase conversion.',
      '−20% order processing time: integrated CRM and OTP services, optimised APIs and queues.',
      'Cut production bugs by 30% by introducing a CI/CD pipeline with mandatory linters (ruff), static analysis (mypy) and tests.',
      'Reduced release deployment time from hours to 15 minutes by setting up CI/CD and an isolated staging environment.',
      'Sped up catalog API response 2–3× via multi-level Redis caching and Elasticsearch full-text search.',
    ],
  },
  {
    company: 'Guider',
    logo: '/guider-pro-logo.jpeg',
    position: 'Python Backend Developer',
    period: 'Mar 2024 — Jul 2024',
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Docker'],
    achievements: [
      'Refactored core API modules — introduced a service layer and removed N+1 issues with select_related / prefetch_related, speeding up data loading.',
      'Improved codebase stability — raised test coverage to 78% and fixed flaky tests, shortening pre-release debugging time.',
      'Maintained and extended a RESTful API (auth, filtering), keeping contracts in sync with the frontend team via OpenAPI.',
    ],
  },
];

export const experienceByLocale: Record<Locale, ExperienceItem[]> = { ru, en };
