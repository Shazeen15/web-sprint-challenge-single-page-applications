// Add a schema, used for all validation to determine whether the input is valid or not
import * as yup from "yup";

export default yup.object().shape({
  size: yup.string().oneOf(["Small", "Medium", "Large"]), // must be a string or else error
  sauce: yup
    .string()
    .oneOf(["marinara", "garlic", "bbq", "spinach"], "pick a sauce"),
  pepperoni: yup.boolean(),
  italian: yup.boolean(),
  meatball: yup.boolean(),
  mushrooms: yup.boolean(),
  roastedSpinach: yup.boolean(),
  redOnion: yup.boolean(),
  substitute: yup.boolean(),
  special: yup.string(),
});
