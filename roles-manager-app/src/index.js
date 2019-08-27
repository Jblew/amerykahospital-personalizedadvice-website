const {
    RolesConfig
} = require("amerykahospital-personalizedadvice-db");

const {
    FIREBASE_CONFIG
} = require("../../settings/index");

const {
    FirestoreRolesManagerAppUI
} = require("firestore-roles-manager-ui");

const config = {
    title: "AmerykaApp role management",
    firebase: FIREBASE_CONFIG,
    authProviders: ["google.com", "password"],
    roles: RolesConfig,
    basePath: "/role-management/",
};

FirestoreRolesManagerAppUI.mount("#app", config);