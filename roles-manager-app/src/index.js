const {
    RolesConfig
} = require("amerykahospital-personalizedadvice-db");

const {
    FIREBASE_CONFIG
} = require("../../settings");

const {
    FirestoreRolesManagerAppUI
} = require("firestore-roles-manager-ui");

const config = {
    title: "AmerykaApp role management",
    firebase: FIREBASE_CONFIG,
    authProviders: ["google.com", "password"],
    roles: RolesConfig,
    basePath: window.location.hostname === "localhost" ? "/dist/" : "/role-management/",
};

FirestoreRolesManagerAppUI.mount("#app", config);