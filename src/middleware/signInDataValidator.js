import singInSchema from "./../schemas/signinSchema.js";

export async function signInDataVerification (req, res, next) {
    const body = req.body
    const validation = singInSchema.validate(body, { abortEarly: false });
    if (validation.error) {
        return res.status(422).send(error.details.map((error) => error.message));
    }

    next();
}