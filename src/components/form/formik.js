import * as Yup from 'yup';
export const initialValues = {
    name: '',
    email: '',
    pass: '',
    bio: '',
    address: {
        city: '',
        postalcode: ''
    },
    phone: ["",""],
    favorites: [""]
}
export const onSubmit =  (values) => {
    console.log("submit: ");
    console.log(values);
}
export const validate = (values)=> {
    let errors = {};
    if(!values.name){
        errors.name = "لطفا نام را وارد کنید"
    }
    if(!values.email){
        errors.email = "لطفا ایمیل را وارد کنید"
    }else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)){
        errors.email = "لطفا از ایمیل صحیح استفاده کنید"
    }
    if(!values.pass){
        errors.pass = "لطفا رمز عبور را وارد کنید"
    }else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.pass)){
        errors.pass = "رمز عبور باید حداقل یک عدد و یک کاراکتر خاص داشته باشد"
    }
    return errors;
}
export const validationSchema = Yup.object({
    name: Yup.string().required("لطفا نام را وارد کنید"),
    email: Yup.string().required("لطفا ایمیل را وارد کنید").email("لطفا از ایمیل صحیح استفاده کنید"),
    pass: Yup.string().required("لطفا رمز عبور را وارد کنید").min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد'),
    address: Yup.object({
        city: Yup.string().required("لطفا شهر را وارد کنید"),
        postalcode: Yup.string().required("لطفا کدپستی را وارد کنید"),
    }),
    phone: Yup.array().of(Yup.string().required("لطفا این قسمت را وارد کنید"))
})