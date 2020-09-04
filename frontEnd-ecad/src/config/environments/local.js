export default {
  END_POINT: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080',
  EXPIRATION_AUTH: 3600000 || process.env.MAX_IDLE_TIME,
  EXPIRATION_FORM: 5, // Minuts
  DEBUG: {
    LEVEL: 'debug',
    AVAILABLE: true,
    LOCAL: true,
  },
};
