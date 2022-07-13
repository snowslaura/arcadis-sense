import signUpSchema from "../schemas/authSchema.js";

export async function signInDataVerification (req, res, next) {

    const validation = signUpSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        return res.status(422).send(validation.error.details);
    }

    next();
}