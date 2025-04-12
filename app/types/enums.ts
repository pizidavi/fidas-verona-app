export enum ENV {
  API_URL = 'EXPO_PUBLIC_API_URL',
  COMPANY_ID = 'EXPO_PUBLIC_COMPANY_ID',
  FORGOT_PASSWORD_URL = 'EXPO_PUBLIC_FORGOT_PASSWORD_URL',
  REPOSITORY_URL = 'EXPO_PUBLIC_REPOSITORY_URL',
  DEV_USER = 'EXPO_PUBLIC_DEV_USER',
  DEV_PASSWORD = 'EXPO_PUBLIC_DEV_PASSWORD',
}

export enum LANGUAGE {
  EN = 'en',
  IT = 'it',
}

export enum STORAGE_KEY {
  LAST_BACKGROUND_TASK_REFRESH_USER = 'LAST_BACKGROUND_TASK_REFRESH_USER',
}

export enum SECURE_STORAGE_KEY {
  USER = 'USER',
}

export enum BACKGROUND_TASK {
  REFRESH_USER = 'REFRESH_USER',
}

export enum NOTIFICATION_CHANNEL {
  ADDED_DONATION = 'ADDED_DONATION',
}

export enum ACHIEVEMENT {
  // Original
  CERTIFICATE_OF_MERIT = 'achievements:certificateOfMerit',
  BRONZE_DROP = 'achievements:bronzeDrop',
  SILVERED_DROP = 'achievements:silveredDrop',
  GOLDEN_DROP = 'achievements:goldenDrop',
  CROSS_OF_MERIT = 'achievements:crossOfMerit',
  BADGE_OF_MERIT = 'achievements:badgeOfMerit',
  STAR_OF_MERIT = 'achievements:starOfMerit',
  // Custom
  KING_OF_DONATIONS = 'achievements:kingOfDonations',
  GOD_OF_DONATIONS = 'achievements:godOfDonations',
}

export enum NEWS_TYPE {
  PUBLICATION = 'PUBLICATION',
  EVENT = 'EVENT',
}
