const {
    FIREBASE_CONFIG
} = require("../../settings/index");

const {
    AmerykahospitalPersonalizedadviceMedicalprofessionalappUI
} = require("amerykahospital-personalizedadvice-medicalprofessional-app");

const config = {
    basePath: "/professional-panel/",
    firebase: FIREBASE_CONFIG,
};

AmerykahospitalPersonalizedadviceMedicalprofessionalappUI.mount("#app", config);