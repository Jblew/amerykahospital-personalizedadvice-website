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
    menuLinks: [{
        text: "Panel porad",
        href: "https://amerykaapp-preprod.jedrzej.lewandowski.doctor/professional-panel/",
        icon: "fa-briefcase-medical",
        target: "_blank"
    }, {
        text: "Strona aplikacji",
        href: "https://amerykaapp-preprod.jedrzej.lewandowski.doctor/",
        icon: "fa-at",
        target: "_blank"
    }]
};

FirestoreRolesManagerAppUI.mount("#app", config);