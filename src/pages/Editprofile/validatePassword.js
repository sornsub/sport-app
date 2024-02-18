import Joi from "joi";
import Swal from "sweetalert2";

const passwordSchema = Joi.object({
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .label("Password")
    .messages({
      "string.pattern.base":
        "Password must contain only letters and numbers and be between 3 and 30 characters long",
    }),
});

const validatePassword = async (password) => {
  try {
    await passwordSchema.validateAsync({ password });
    return true; // ถ้าผ่านการตรวจสอบ
  } catch (error) {
    const errorMessage = error.details[0].message;
    await Swal.fire({
      icon: "error",
      title: "Invalid Password",
      text: errorMessage,
    });
    return false; // ถ้าไม่ผ่านการตรวจสอบ
  }
};

export default validatePassword;
