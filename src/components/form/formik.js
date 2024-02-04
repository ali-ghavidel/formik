import * as Yup from 'yup';
export const initialValues = {
    name: '',
    email: '',
    password: '',
    bio: '',
    address: {
        city: '',
        postalcode: ''
    },
    phone: ["", ""],
    favorites: [""],
    education: "",
    gender: ""
}
export const onSubmit = (values, submitProps) => {
    // console.log(submitProps);
    // console.log("submit: ");
    // console.log(values);
    setTimeout(() => {
        submitProps.setSubmitting(false);
        // submitProps.resetForm();
    }, 5000);
    
}
export const validationSchema = Yup.object({
    name: Yup.string().required("لطفا نام را وارد کنید"),
    email: Yup.string().required("لطفا ایمیل را وارد کنید").email("لطفا از ایمیل صحیح استفاده کنید"),
    password: Yup.string().required("لطفا رمز عبور را وارد کنید").min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد'),
    address: Yup.object({
        city: Yup.string().required("لطفا شهر را وارد کنید"),
        postalcode: Yup.string().required("لطفا کدپستی را وارد کنید"),
    }),
    phone: Yup.array().of(Yup.string().required("لطفا این قسمت را وارد کنید")),
    favorites: Yup.array().of(Yup.string().required("لطفا این قسمت را وارد کنید")),
    education: Yup.string().required("لطفا تحصیلات را انتخاب کنید"),
    gender: Yup.string().required("لطفا جنسیت را انتخاب کنید"),
})

//
export const validate = (values) => {
    let errors = {};
    if (!values.name) {
        errors.name = "لطفا نام را وارد کنید"
    }
    if (!values.email) {
        errors.email = "لطفا ایمیل را وارد کنید"
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)) {
        errors.email = "لطفا از ایمیل صحیح استفاده کنید"
    }
    if (!values.pass) {
        errors.pass = "لطفا رمز عبور را وارد کنید"
    } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.pass)) {
        errors.pass = "رمز عبور باید حداقل یک عدد و یک کاراکتر خاص داشته باشد"
    }
    return errors;
}

export const validateBio = (value) => {
    let error;
    if (!value) {
        error = "این فیلد اجباری است!";
    } else if (!/^[\u0600-\u06FF\s0-9a-zA-Z]+$/.test(value)) {
        error = "لطفا قالب نوشتاری را رعایت کنید"
    }
    return error;
}