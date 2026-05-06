import type { StackGroup } from '../types/content';
import type { Locale } from '../i18n/dict';

export const stackByLocale: Record<Locale, StackGroup[]> = {
  ru: [
    { title: 'Языки', items: ['Python', 'Go', 'SQL'] },
    { title: 'Фреймворки', items: ['FastAPI', 'Django', 'DRF', 'GraphQL (graphene)', 'Pandas'] },
    { title: 'Базы данных', items: ['PostgreSQL', 'SQLAlchemy', 'Django ORM', 'Redis', 'MongoDB'] },
    {
      title: 'Интеграции',
      items: ['Платёжные шлюзы', 'Рассрочка', 'CRM', 'LMS', 'OTP/SMS/e-mail провайдеры'],
    },
    {
      title: 'Инфраструктура',
      items: ['Docker', 'docker-compose', 'Nginx', 'GitHub Actions', 'GitLab CI'],
    },
    {
      title: 'Качество',
      items: ['pytest', 'unittest', 'coverage', 'mypy/pyright', 'ruff/flake8', 'black', 'pre-commit', 'code review'],
    },
    {
      title: 'Документация и процессы',
      items: ['OpenAPI/Swagger', 'Postman', 'Scrum', 'Kanban'],
    },
    {
      title: 'AI-инструменты',
      items: ['Claude Code', 'MCP', 'Subagents', 'Prompt engineering'],
    },
  ],
  en: [
    { title: 'Languages', items: ['Python', 'Go', 'SQL'] },
    { title: 'Frameworks', items: ['FastAPI', 'Django', 'DRF', 'GraphQL (graphene)', 'Pandas'] },
    { title: 'Databases', items: ['PostgreSQL', 'SQLAlchemy', 'Django ORM', 'Redis', 'MongoDB'] },
    {
      title: 'Integrations',
      items: ['Payment gateways', 'Installments', 'CRM', 'LMS', 'OTP/SMS/email providers'],
    },
    {
      title: 'Infrastructure',
      items: ['Docker', 'docker-compose', 'Nginx', 'GitHub Actions', 'GitLab CI'],
    },
    {
      title: 'Quality',
      items: ['pytest', 'unittest', 'coverage', 'mypy/pyright', 'ruff/flake8', 'black', 'pre-commit', 'code review'],
    },
    {
      title: 'Docs & Process',
      items: ['OpenAPI/Swagger', 'Postman', 'Scrum', 'Kanban'],
    },
    {
      title: 'AI tooling',
      items: ['Claude Code', 'MCP', 'Subagents', 'Prompt engineering'],
    },
  ],
};
