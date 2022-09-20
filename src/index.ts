import {OneSchema} from 'dynamodb-onetable';

const schema: OneSchema = {
  format: 'onetable:1.1.0',
  version: '0.0.1',
  indexes: {
    primary: {hash: 'pk', sort: 'sk'},
  },
  models: {} as const,
  params: {
    isoDates: true,
    timestamps: true,
  },
};
