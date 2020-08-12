# Logger
Write logs on console just when not in production mode.

## How It Works?
If your .env NODE_ENV property is different of 'production' it will print your log, else it will do nothing.

## Usage
```javascript
  import logger from '@/logger';

  logger.log('Hello World!');
  logger.error('Hello World!');
  logger.warn('Hello World!');
 ```
