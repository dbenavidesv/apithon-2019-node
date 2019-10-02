module.exports = {
  responses: {
    USER_CREATED_OK: 'USER_SUCCESSFULLY_CREATED',
    USER_LOGGED_IN: 'USER_SUCCESSFULLY_LOGGED_IN',
    ITEM_NOT_FOUND_ERROR: 'ITEM_NOT_FOUND_ERROR'
  },
  errors: {
    DATABASE_ERROR: 'DATABASE_ERROR',
    DEFAULT_ERROR: 'DEFAULT_SERVER_ERROR',
    INVALID_CREDENTIALS_ERROR: 'INVALID_CREDENTIALS_ERROR'
  },

  POLUTION_LEVELS_PM_25: [
    { value: 12, label: 'good', id: 1 },
    { value: 55, label: 'moderate', id: 2 },
    { value: 154, label: 'slightly_harmful', id: 3 },
    { value: 255, label: 'moderately_harmful', id: 4 },
    { value: 355, label: 'harmful', id: 5 },
    { value: Infinity, label: 'dangerous', id: 6 }
  ]
};
