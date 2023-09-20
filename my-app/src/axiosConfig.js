import axios from "axios";

const instance = axios.create({
  baseURL: "https://studapi.teachmeskills.by", // Replace with your API base URL
});

instance.interceptors.request.use(
  (config) => {
    const access = localStorage.getItem("access");

    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;

// const formData = new FormData();

// if (uploadedImage) {
//   formData.append("kyc_document", uploadedImage);
// }
// if (frontImage) {
//   formData.append("kyc_document", frontImage);
// }
// if (backImage) {
//   formData.append("kyc_document", backImage);
// }

// formData.append("name[first]", firstName);
// formData.append("name[last]", lastName);
// formData.append("country_code", code);
// formData.append("address[city]", city);
// formData.append("address[pin_code]", pinCode);
// formData.append("address[full_address]", address);
// formData.append("terms_and_conditions_consent", termsAgreed.toString());
// formData.append("privacy_policy_consent", privacyAgreed.toString());
