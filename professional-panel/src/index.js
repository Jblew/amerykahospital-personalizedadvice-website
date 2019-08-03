const {
    AmerykahospitalPersonalizedadviceMedicalprofessionalappUI
} = require("amerykahospital-personalizedadvice-medicalprofessional-app");

const config = {
    basePath: window.location.hostname === "localhost" ? "/dist/" : "/professional-panel/",
};

AmerykahospitalPersonalizedadviceMedicalprofessionalappUI.mount("#app", config);