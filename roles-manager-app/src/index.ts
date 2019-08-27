import { RolesConfig } from "amerykahospital-personalizedadvice-db";

import { FIREBASE_CONFIG } from "../../settings";

import FirestoreRolesManagerAppUI from "firestore-roles-manager-ui";

const config = {
    title: "AmerykaApp role management",
    firebase: FIREBASE_CONFIG,
    authProviders: ["google.com", "password"],
    roles: RolesConfig,
    basePath: "/role-management/",
};

FirestoreRolesManagerAppUI.mount("#app", config);
