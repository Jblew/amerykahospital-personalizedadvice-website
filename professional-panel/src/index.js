const {
    FIREBASE_CONFIG,
    chatConfig
} = require("../../settings");

const {
    AmerykahospitalPersonalizedadviceMedicalprofessionalappUI
} = require("amerykahospital-personalizedadvice-medicalprofessional-app");

const config = {
    basePath: window.location.hostname === "localhost" ? "/dist/" : "/professional-panel/",
    chatConfig: chatConfig,
    firebase: FIREBASE_CONFIG,
    evidenceIdHashSalt: FIREBASE_CONFIG.evidenceHashSalt,
};

AmerykahospitalPersonalizedadviceMedicalprofessionalappUI.mount("#app", config);