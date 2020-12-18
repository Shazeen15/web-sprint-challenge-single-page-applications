// Add a schema, used for all validation to determine whether the input is valid or not
import * as yup from "yup";

export default yup.object().shape({
  size: yup.string().oneOf(["Small", "Medium", "Large"]), // must be a string or else error
  sauce: yup.string().required("pick a sauce"),
  pepperoni: yup.string(),
  italian: yup.string(),
  meatball: yup.string(),
  mushrooms: yup.string(),
  roastedSpinach: yup.string(),
  redOnion: yup.string(),
  substitute: yup.string(),
  special: yup.string(),
});
