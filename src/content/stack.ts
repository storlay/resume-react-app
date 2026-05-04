import type { StackGroup } from '../types/content';

export const stack: StackGroup[] = [
  {
    title: 'Языки',
    items: ['Python', 'Go', 'SQL'],
  },
  {
    title: 'Фреймворки',
    items: ['FastAPI', 'Django', 'DRF', 'GraphQL (graphene)', 'Pandas'],
  },
  {
    title: 'Базы данных',
    items: ['PostgreSQL', 'SQLAlchemy', 'Django ORM', 'Redis', 'MongoDB'],
  },
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
];
