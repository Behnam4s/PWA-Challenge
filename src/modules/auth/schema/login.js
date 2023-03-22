import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const loginSchema = yup.object().shape({

	nationalCode: yup.string()
		.required('وارد کردن کد ملی الزامی است')
		.length(10,'کد ملی باید ۱۰ رقم باشد'),

	mobileNumber: yup.string()
		.required('وارد کردن شماره موبایل الزامی است')
		.matches(/^((\+98|0)9\d{9})$/gm, {excludeEmptyString: true, message:'شماره موبایل معتبر نیست'}),

});

const loginResolver = yupResolver(loginSchema);
export { loginSchema, loginResolver };
